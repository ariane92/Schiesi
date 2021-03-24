import React, {useContext} from 'react';
import { SafeAreaView, View, Platform, TouchableOpacity, Dimensions } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import StatusBarIOS from '../../../components/StatusBar'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/Feather'
import { Container, BoxButtons, Title, TitleDescription, Description, Content, Topic } from './styles';

const { height } = Dimensions.get('window')

export const Termos: React.FC = () => {
  const {user, logout} = useContext(AuthContext)
  const navigation = useNavigation();
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
    <SafeAreaView>
      <Progress.Bar progress={0.06} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>
          <BoxButtons>
            <TouchableOpacity onPress={() => logout()}>
                <Icon name='x' size={42} color='#cecece'/>
            </TouchableOpacity>
          </BoxButtons>
          <Title>Seja bem vindo(a) ao Schiesi.</Title>
        <Content>
          <Topic>
            <Icon name='check-circle' size={22} color='#825BC9' />
            <TitleDescription>Se Proteja.</TitleDescription>
          </Topic>
            <Description>Não forneça suas informações pessoais rápido demais. E Realize encontros com segurança</Description>

          <Topic>
          <Icon name='check-circle' size={22} color='#825BC9' />
            <TitleDescription>Seja Legal.</TitleDescription>
          </Topic>
            <Description>Respeite todos e os trate como gostaria de ser tratado.</Description>

          <Topic>
          <Icon name='check-circle' size={22} color='#825BC9' />
            <TitleDescription>Seja pró-ativo.</TitleDescription>
          </Topic>
            <Description>Sempre denuncie</Description>
        </Content>
      </Container>
    </SafeAreaView>
    <Button onPress={() => navigation.navigate('Nome')}>EU ACEITO</Button>
    </>
  )
}


