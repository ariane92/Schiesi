import React, {useContext} from 'react';
import { SafeAreaView, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import ButtonSelect from '../../../components/ButtonSelect'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import StatusBarIOS from '../../../components/StatusBar'
import { Container, BoxButtons, Title, Content  } from './styles';
import Icon from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')

export const Preferencia: React.FC = () => {
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
    <SafeAreaView >
      <Progress.Bar progress={0.36} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
        <Container>
        <BoxButtons>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={42} color='#cecece'/>
            </TouchableOpacity>
        </BoxButtons>
        <Content>
            <Title>Mostrar no meu perfil</Title>
            <ButtonSelect onPress={() => logout()}>Mulher</ButtonSelect>
            <ButtonSelect onPress={() => logout()}>Homem</ButtonSelect>
            <ButtonSelect onPress={() => logout()}>Todos</ButtonSelect>
            <Button onPress={() => navigation.navigate('Universidade')} style={{marginTop: (height / 10) * 3.4}}>CONTINUAR</Button>
          </Content>
        </Container>
    </SafeAreaView>
    </>
  )
}


