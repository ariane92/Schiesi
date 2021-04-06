import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar, View } from 'react-native'
import { AuthProvider } from './Providers/AuthProvider'
import Routes from './routes/index'
import '../ReactotronConfig'
declare global {
  interface Console {
    tron: any
  }
}

console.tron.log('App iniciado');

const App: React.FC = () => {

    return (
      <NavigationContainer>

        <View style={{flex: 1, backgroundColor: '#000'}}>
          <AuthProvider>
            <Routes />

          </AuthProvider>
        </View>
      </NavigationContainer>
    )
}

export default App

