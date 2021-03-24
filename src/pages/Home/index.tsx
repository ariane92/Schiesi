import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import CardItem from '../../components/CardItem'
import { SafeAreaView } from 'react-native-safe-area-context';
const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <CardItem name='Ariane Mateus' status='Online' description='Desenvolvedora mobile que gosta de várias coisas'/>
    </SafeAreaView>
  )
}

export default Home;
