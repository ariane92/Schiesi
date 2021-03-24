import React, {useContext, useEffect, useRef, useState} from 'react';
import { SafeAreaView, Text, TouchableOpacity, Platform, View } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import StatusBarIOS from '../../../components/StatusBar'
import InputMask from '../../../components/InputMask'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, Content, Title, Alert } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import { FormHandles } from '@unform/core'

export const Nascimento: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const formRef = useRef<FormHandles>(null)
  const navigation = useNavigation();
  const [data, setData] = useState<string>();
  useEffect(() => {
    setData('22/10/1992')
  },[])
  const d = Dimensions.get('window')
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))


  return (
    <>
    {isX ? (
        <>
        <View style={{ height: 40, backgroundColor: '#000' }} />
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
        </>
      ) : (
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
      )}
    <SafeAreaView >
      <Progress.Bar progress={0.18} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>
      <BoxButtons>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color='#cecece'/>
            </TouchableOpacity>
        </BoxButtons>
        <Content ref={formRef} initialData={{nascimento: '01/01/2000'}}>
            <Title>Meu aniversário é:</Title>
             <InputMask type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }} name='nascimento'
                style={{color: '#cecece', fontFamily: 'Roboto-Medium'}}
            />
            <Alert>Você precisa ter pelo menos 18 anos.</Alert>


            <Button onPress={() => navigation.navigate('Genero')} style={{marginTop: (height / 10) * 2.9}}>CONTINUAR</Button>
          </Content>

      </Container>


    </SafeAreaView>
    </>
  )
}


