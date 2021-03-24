import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar, Text, Button, TouchableOpacity, Platform } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Content, Title, BoxButton, ProblemsLogin, TextProblemsLogin, Container, SocialButton, TextButton} from './styles';
import Background from '../../components/Background'
import { SocialIcon } from 'react-native-elements'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {AuthContext} from '../../Providers/AuthProvider'
import {useNavigation} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather'
import { SafeAreaView } from 'react-native-safe-area-context'
import {scale, moderateScale} from 'react-native-size-matters'
import SimpleButton from '../../components/SimpleButton';
import Icon from 'react-native-vector-icons/FontAwesome';



GoogleSignin.configure({
  webClientId: '752747247942-95e5pbla4s18kh48lgjon1kgtcp6ij7j.apps.googleusercontent.com',
});

const Login: React.FC = () => {
  const navigation = useNavigation()
  const {googleLogin, facebookLogin, LoginWithEmailAndPassword} = useContext(AuthContext)

  return (
    <>
      <StatusBar backgroundColor='#825BC9' barStyle='light-content'  />
      <Background>
        <SafeAreaView>
      <Container>
      <BoxButton>
          <TouchableOpacity onPress={() => navigation.navigate('Init')} >
              <IconFeather name='chevron-left' size={42} color='#fff'/>
          </TouchableOpacity>
        </BoxButton>
        <Title>Faça parte do Schiesi e venha vivenciar novas experiências</Title>
        <Content>
            {Platform.OS === 'ios' &&
                <SocialButton style={{backgroundColor: '#000'}}>
                  <Icon name='apple' color={'#fff'}  size={22} style={{marginRight: 16}}/>
                  <TextButton>Entrar com Apple</TextButton>
              </SocialButton>
            }



            <SocialIcon
              title='Entrar com Facebook'
              button
              type='facebook'
              style={{width: moderateScale(320), height: moderateScale(50)}}
              onPress={() => facebookLogin()}
            />
            <SocialIcon
              title='Entrar com Google'
              button
              type='google'
              style={{width: moderateScale(320), height: moderateScale(50)}}
              onPress={() => googleLogin()}
            />
            <SocialButton style={{backgroundColor: 'green'}}onPress={() => navigation.navigate('RegisterPhone')}>
                <Icon name='phone' color={'#FFF'}  size={22} style={{marginRight: 16}}/>
                <TextButton>Entrar com número de telefone</TextButton>
            </SocialButton>

            <SocialButton style={{backgroundColor: 'grey'}}onPress={() => navigation.navigate('RegisterEmail')}>
                <Icon name='envelope' color={'#FFF'}  size={22} style={{marginRight: 16}}/>
                <TextButton>Entrar com seu email</TextButton>
            </SocialButton>
        </Content>

      </Container>
        </SafeAreaView>
        </Background>

    </>
  )
}

export default Login;
