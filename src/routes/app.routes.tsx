import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chat from '../pages/Chat'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';

const App = createMaterialTopTabNavigator();


const AppRoutes: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
      <App.Navigator initialRouteName='Home' tabBarOptions={{
        activeTintColor: '#825BC9',
        inactiveTintColor: '#CECECE',
        pressColor: '#b9a4df',
        showIcon: true,
        showLabel: false,
        indicatorStyle: {backgroundColor: '#825BC9'},
        style: {
            marginTop: insets.top
      }}}>

        <App.Screen name='Home' component={Home} options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="heart" color={color} size={24} />
          ),
        }}
      />
        <App.Screen name='Chat' component={Chat} options={{
            tabBarIcon: ({color}) => <Icon2 name="comments" color={color} size={24} />,
          }}/>
        <App.Screen name='Perfil' component={Perfil} options={{
            tabBarIcon: ({color}) => <Icon2 name="user" color={color} size={24} />,
          }}/>
      </App.Navigator>
  )
}

export default AppRoutes
