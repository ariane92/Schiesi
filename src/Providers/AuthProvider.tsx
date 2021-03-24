import React, {createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import {Alert} from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
type PropsContext = {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  user: '',
  setUser: () => {},
  confirm: '',
  loading: true,
  setConfirm: () => {},
  logout: () => {},
  googleLogin: () => {},
  facebookLogin: () => {},
  phoneNumberLogin: () => {},
  createUserWithEmailAndPassword: () => {},
  LoginWithEmailAndPassword: () => {}
}
export const AuthContext = createContext(DEFAULT_VALUE);

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState();
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);


  return(
    <AuthContext.Provider value={{user,
    setUser,
    confirm,
    setConfirm,
    loading,
    googleLogin: async () => {
      try{
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        console.log('Retorno da google:', googleCredential)
        await auth().signInWithCredential(googleCredential);

      }catch(error){
        console.log({error})
      }
      setLoading(false)

    },
    facebookLogin: async () => {
      try{
          const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

          if (result.isCancelled) {
            throw 'User cancelled the login process';
          }

          const data = await AccessToken.getCurrentAccessToken();

          if (!data) {
            throw 'Something went wrong obtaining access token';
          }

          const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
          await auth().signInWithCredential(facebookCredential);

      } catch(error){
        console.log({error})
      }
      setLoading(false)
    },
    phoneNumberLogin: async (phoneNumber) => {

      try{
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);


      } catch(error){
        console.log({error})
      }
      setLoading(false)
    },

    createUserWithEmailAndPassword: async (email, password) => {
      try{
        const LoginWithEmail = await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Alert.alert('User account created & signed in!')

        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!')
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!')
            console.log('That email address is invalid!');
          }

          console.error(error);
        });

      }catch(error) {
        console.error(error);
      }

    },

    LoginWithEmailAndPassword: async () => {
      try{
        const LoginWithEmail = await auth()
        .signInWithEmailAndPassword('carly.doe@example.com', 'SuperSecretPassword!')
        .then(() => {
          Alert.alert('Usuário logado')
          console.log('User account created & signed in!');
        })
        .catch(error => {
          Alert.alert('Ocorreu um problema')
          console.error(error);
        });

      }catch(error) {
        console.error(error);
      }

    },


    logout: async () => {
      try{
        await auth().signOut()
      }catch(e){
        console.log(e)
      }
    }
  }}>
      {children}
    </AuthContext.Provider>
  )
}
