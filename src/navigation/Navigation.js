import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navegacion from '../screens/Navegacion';

const Tab= createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Navegacion' component={Navegacion}>

      </Tab.Screen>
    </Tab.Navigator>
  )
}