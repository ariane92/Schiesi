import React, {useContext} from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import AuthRoutes from './auth.routes'
import CadastroRoutes from './cadastro.routes'
import Home from '../pages/Home'
import { ActivityIndicator, View } from 'react-native'


const Routes: React.FC = () => {
  const {user, confirm, loading} = useContext(AuthContext)

  /*if (!loading)  {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }*/

  return (
    user || confirm ? <CadastroRoutes /> : <AuthRoutes />
  )
}

export default Routes
