import React, {useContext} from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions, Platform } from 'react-native';
import {AuthContext} from '../../../Providers/AuthProvider'
import Button from '../../../components/Button'
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { Container, BoxButtons, Content, Title } from './styles';
import Icon from 'react-native-vector-icons/Feather'
const { height } = Dimensions.get('window')
import StatusBarIOS from '../../../components/StatusBar'
import Photos from '../../../components/Photos'

export const Fotos: React.FC = () => {
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
      <Progress.Bar progress={0.8} width={600} height={8} borderColor={'#B75FBD'} color={'#B75FBD'} animated={true} borderRadius={0} borderWidth={0}/>
      <Container>

        <BoxButtons>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name='chevron-left' size={42} color='#cecece'/>
              </TouchableOpacity>
          </BoxButtons>
          <Content>
              <Title>Adicionar Fotos</Title>
              <Photos />
              <Button onPress={() => navigation.navigate('AppRoutes')} style={{marginTop: (height / 10) * 5.3}}>CONTINUAR</Button>
            </Content>
      </Container>
    </SafeAreaView>
    </>
  )
}


