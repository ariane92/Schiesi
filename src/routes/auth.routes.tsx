import React, { useState, useContext, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Providers/AuthProvider'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Login from '../pages/Login'
import Init from '../pages/Init'
import RegisterEmail from '../pages/RegisterEmail'
import RegisterPhone from '../pages/RegisterPhone'
import Register from '../pages/Register'
const Auth = createStackNavigator()


const AuthRoutes: React.FC = () => {
  const {user, setUser, confirm} = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true);
  const [code, setCode] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    confirm
    console.log(confirm)
    if (initializing) setInitializing(false);
    if(user){
      console.log(user)
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  return (
    <Auth.Navigator initialRouteName='Init' screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
      <Auth.Screen name='Login' component={Login} />
      <Auth.Screen name='Init' component={Init} />
      <Auth.Screen name='RegisterEmail' component={RegisterEmail} />
      <Auth.Screen name='RegisterPhone' component={RegisterPhone} />
      <Auth.Screen name='Register' component={Register} />
    </Auth.Navigator>
  )
}

export default AuthRoutes
