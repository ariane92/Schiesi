import React, {useContext, useRef} from 'react';
import { SafeAreaView, View, TouchableOpacity, Dimensions, Platform, KeyboardAvoidingView } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { FormHandles } from '@unform/core'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, Title, Content } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import StatusBarIOS from '../../../components/StatusBar'
const { height } = Dimensions.get('window')
export const Nome: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null)

  const d = Dimensions.get('window')
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))
  return (
    
    <KeyboardAvoidingView  behavior='padding' enabled>
    {isX ? (
        <>
        <View style={{ height: 40, backgroundColor: '#000' }} />
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
        </>
      ) : (
        <StatusBarIOS backgroundColor="#000" barStyle="light-content" />
      )}
    
      <SafeAreaView>

        <Progress.Bar progress={0.12} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
        <Container ref={formRef}>
          <BoxButtons>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name='chevron-left' size={42} color='#cecece'/>
              </TouchableOpacity>
          </BoxButtons>
            <Content>
              <Title>Meu nome é:</Title>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name='nome'
                keyboardType='default'
                placeholder='Nome'

              />
            </Content>
        </Container>
      </SafeAreaView>
      <Button onPress={() => navigation.navigate('Nascimento')} style={{marginTop: (height / 10) * 2}}>CONTINUAR</Button>
    </KeyboardAvoidingView>
    
  )
}


