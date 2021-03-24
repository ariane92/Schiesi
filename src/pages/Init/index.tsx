import React, { useState, useEffect, useContext } from 'react';
import { View, StatusBar, Text, SafeAreaView } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import { Container, Title, Description, BoxButtons, ProblemsLogin, TextProblemsLogin, LoginButton, TextButtonLogin} from './styles';
import Background from '../../components/Background'
import SimpleButton from '../../components/SimpleButton'
import Modal from '../../components/Modal'

const Init: React.FC =  () => {
  const [modal, setModal] = useState(false)
  const navigation = useNavigation()

  return (
    <>
      <StatusBar backgroundColor='#825BC9' barStyle='light-content'  />
      <Background>
        <Container>
          <Title>Schiesi</Title>
          <Description>Ao entrar, você concorda com nossos Termos de Serviço e nossa Politica de Privacidade.</Description>
          <SimpleButton secondary onPress={() => navigation.navigate('Login')}>Cadastre-se</SimpleButton>

          <LoginButton onPress={() => setModal(true)}>
            <TextButtonLogin>Já possui cadastro? Entre aqui.</TextButtonLogin>
          </LoginButton>
        </Container>
        <ProblemsLogin>
            <TextProblemsLogin>Problemas para logar?</TextProblemsLogin>
        </ProblemsLogin>
      </Background>
      <Modal
        show={modal}
        close={() => setModal(false)}
      />
    </>
  )
}

export default Init;
