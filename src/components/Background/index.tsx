import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Container } from './styles';
import colors from '../../styles/colors'

const Background: React.FC = ({children}) => {
  return(
    <LinearGradient  colors={[ colors.backgroundInit, colors.backgroundEnd ]} style={{flex: 1}}>
        {children}
    </LinearGradient>
  )
}


export default Background;

