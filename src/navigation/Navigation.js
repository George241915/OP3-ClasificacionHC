import { View, Text ,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navegacion from '../screens/Navegacion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeUser from '../screens/HomeUser';
import Statistics from '../screens/Statistics';
import Classification from '../screens/Classification';
import Icon  from "react-native-vector-icons/FontAwesome5";


const Tab= createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name='User' component={HomeUser} 
        options={{
          tabBarIcon:({color,size})=>{
            <Icon name='user' color={color}size={size}></Icon>
          },
          headerShown:false
        }}
      ></Tab.Screen>
      <Tab.Screen name='Classification' component={Classification}
        options={{
          tabBarLabel:"",
          tabBarIcon:()=>renderEggs(),
          headerShown:false,
          
        }}
      ></Tab.Screen>
      <Tab.Screen name='Statistics' component={Statistics}
        options={{
          tabBarIcon:({color,size})=>{
            <Icon name='' color={color}size={size}></Icon>
          },
          headerShown:false
        }}
      ></Tab.Screen>
      
    </Tab.Navigator>
    
  )
}

function renderEggs(){
  return(
    <Image
      source={require("../assets/logEC.png")}
      style={{width: 55, height:55}}
    ></Image>
  )
}