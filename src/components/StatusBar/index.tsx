import React from 'react'
import { View, StatusBar } from 'react-native'
import { StatusBarProps } from 'react-native'

export interface StatusBarIOSProps extends StatusBarProps {
  backgroundColor: string

}

import styles from './styles'

 const StatusBarIOS: React.FC<StatusBarIOSProps> = ({ backgroundColor, ...rest }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...rest} barStyle='light-content'/>
    </View>
  )
}

export default StatusBarIOS
