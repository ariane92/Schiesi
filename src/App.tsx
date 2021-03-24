import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { StatusBar, View } from 'react-native'
import { AuthProvider } from './Providers/AuthProvider'
import Routes from './routes/index'



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

