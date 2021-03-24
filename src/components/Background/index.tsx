import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Container } from './styles';

const Background: React.FC = ({children}) => {
  return(
    <LinearGradient  colors={[ '#825BC9', '#B75FBD',]} style={{flex: 1}}>

        {children}


    </LinearGradient>
  )
}


export default Background;

