import React, {  useContext, useRef } from 'react';
import { View, StatusBar, Text, SafeAreaView, TextInput, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import { Container, Title, BoxButton,  Box, Content} from './styles';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import { FormHandles } from '@unform/core';
import {AuthContext} from '../../Providers/AuthProvider'
import colors from '../../styles/colors'
interface LoginFormData {
  user: string
  password: string
}


const RegisterEmail: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const {createUserWithEmailAndPassword} = useContext(AuthContext)

  const dataLogin = (data) => {
    console.log(data)
    createUserWithEmailAndPassword(data.user, data.password)
  }
  return (
    <>
    <KeyboardAvoidingView  style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding': undefined} enabled>
    {Platform.OS === 'ios' ?  <StatusBar  barStyle={"dark-content"}/>
        :  <StatusBar  barStyle={"light-content"}/>
    }


    <ScrollView  style={{flex: 1}}>
      <SafeAreaView>
        <BoxButton>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color={colors.grey}/>
              </TouchableOpacity>
            </BoxButton>
          <Container>
            <View>
              <Title>Digite seu email e senha para se cadastrar</Title>
            </View>
            <Content>
              <Box ref={formRef} onSubmit={dataLogin}>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      name="user"
                      keyboardType='email-address'
                      placeholder="Email"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        passwordInputRef.current?.focus()
                      }}
                    />
                    <Input
                      ref={passwordInputRef}
                      secureTextEntry
                      name="password"
                      placeholder="Senha"
                      returnKeyType="send"
                      onSubmitEditing={() => {
                        formRef.current?.submitForm()
                      }}
                    />
                    </Box>

            </Content>
          </Container>
          <Button style={{ marginTop: 32}} onPress={() => {formRef.current?.submitForm()}}>Entrar</Button>
      </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
}

export default RegisterEmail;
