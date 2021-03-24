import React, { useState, useContext, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Providers/AuthProvider'
import AppRoutes  from './app.routes'
import StatusBarIOS from '../components/StatusBar'
import { StatusBar, View, Platform, Dimensions } from 'react-native'

import {Termos, Fotos, Genero, Interesses, Nascimento, Nome, Orientacao, Preferencia, Universidade} from '../pages/Cadastro'
const Cadastro = createStackNavigator()


const CadastroRoutes: React.FC = () => {
  const {user, setUser, confirm} = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true);
  const [code, setCode] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <Cadastro.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#fff'}}}>
      <Cadastro.Screen name='Termos' component={Termos} />
      <Cadastro.Screen name='Fotos' component={Fotos} />
      <Cadastro.Screen name='Genero' component={Genero} />
      <Cadastro.Screen name='Interesses' component={Interesses} />
      <Cadastro.Screen name='Nascimento' component={Nascimento} />
      <Cadastro.Screen name='Nome' component={Nome} />
      <Cadastro.Screen name='Orientacao' component={Orientacao} />
      <Cadastro.Screen name='Preferencia' component={Preferencia} />
      <Cadastro.Screen name='Universidade' component={Universidade} />

      <Cadastro.Screen name='AppRoutes' component={AppRoutes} />
    </Cadastro.Navigator>

  )
}

export default CadastroRoutes
