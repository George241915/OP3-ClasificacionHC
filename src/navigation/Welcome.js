import { View, Text } from 'react-native'
import React from 'react'
import Inicio from '../screens/Inicio'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navegacion from '../screens/Navegacion'
import Login from '../screens/Login'

const Stack=createNativeStackNavigator()


export default function Welcome() {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Navegacion} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}