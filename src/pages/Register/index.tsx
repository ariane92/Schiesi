import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Container, Title, Description, BoxButtons, ProblemsLogin, TextProblemsLogin} from './styles';
import Background from '../../components/Background'
import { SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import {AuthContext} from '../../Providers/AuthProvider'
import {useNavigation} from '@react-navigation/native';
import Icon3 from 'react-native-vector-icons/Feather'
import colors from '../../styles/colors'
Icon.loadFont()
Icon2.loadFont()
Icon3.loadFont()
GoogleSignin.configure({
  webClientId: '752747247942-95e5pbla4s18kh48lgjon1kgtcp6ij7j.apps.googleusercontent.com',
});

const Register: React.FC = () => {
  const navigation = useNavigation()
  const {googleLogin, facebookLogin} = useContext(AuthContext)

  return (
    <>
      <StatusBar backgroundColor={colors.backgroundInit} barStyle='light-content'  />
      <Background>
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon3 name='chevron-left' size={42} color={colors.warning}/>
            </TouchableOpacity>
          <Title>Cadastro</Title>
          <SocialIcon
              title='Entrar com seu número de telefone cadastrado'
              button
              iconColor={'transparent'}
              type='instagram'
              style={{width: 350, height: 50}}
              onPress={() => navigation.navigate('RegisterPhone')}
            />
          <SocialIcon
              title='Entrar com seu email cadastrado'
              button
              iconColor={'transparent'}
              type='facebook'
              style={{width: 350, height: 50}}
              onPress={() => navigation.navigate('RegisterEmail')}
            />
          <SocialIcon
              title='Entrar com Facebook'
              button
              type='facebook'
              style={{width: 350, height: 50}}
              onPress={() => facebookLogin()}
            />
            <SocialIcon
              title='Entrar com Google'
              button
              type='google'
              style={{width: 350, height: 50}}
              onPress={() => googleLogin()}
            />
        </Container>
        <ProblemsLogin>
            <TextProblemsLogin>Problemas para logar?</TextProblemsLogin>
        </ProblemsLogin>
      </Background>
    </>
  )
}

export default Register;
