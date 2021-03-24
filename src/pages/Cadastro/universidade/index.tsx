import React, {useContext, useRef} from 'react';
import { SafeAreaView, Text, TouchableOpacity, Dimensions, Platform, View } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, ButtonText, Title, Content } from './styles';
import Icon from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')
import StatusBarIOS from '../../../components/StatusBar'
import { FormHandles } from '@unform/core'
import Input from '../../../components/Input'
export const Universidade: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const navigation = useNavigation();
  const d = Dimensions.get('window')
  const isX = !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800))
  const formRef = useRef<FormHandles>(null)
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
      <Progress.Bar progress={0.44} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container ref={formRef}>
      <BoxButtons>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color='#cecece'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Interesses')}>
                <ButtonText>PULAR</ButtonText>
            </TouchableOpacity>
        </BoxButtons>
        <Content>
            <Title>Minha universidade é:</Title>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              name='universidade'
              keyboardType='default'
              placeholder='USP'
            />

            <Button onPress={() => navigation.navigate('Interesses')} style={{marginTop: (height / 10) * 3.55}}>CONTINUAR</Button>
          </Content>

      </Container>


    </SafeAreaView>
    </>
  )
}


