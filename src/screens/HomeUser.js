import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/styleProfile'
import Icon from "react-native-vector-icons/FontAwesome5"

const twitter = <Icon name="twitter" size={50} color={"black"}></Icon>
const facebook = <Icon name="facebook" size={50} color={"black"}></Icon>
const instagram = <Icon name="instagram" size={50} color={"black"}></Icon>
const linkedin = <Icon name="linkedin" size={50} color={"black"}></Icon>
const tiktok = <Icon name="tiktok" size={50} color={"black"}></Icon>

export default function HomeUser() {
  const user = {
    avatar: '',
    coverPhoto:"https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name: "Avicola Estefania",
    correo: "avicola@gmail.com",
    phone: "0987652419",
    Dirección: "Mulalo"
}

  return (
    <View style={styles.container}>
      <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
      <View style ={styles.avatarContainer}>
        
        <View style={styles.card}>
          <View style ={styles.avatarContainer}>
            <Image source={require('../assets/perfil.jpg')} style={styles.avatar}/>
            <Text style={styles.namePrincipal}>
              {user.name}
            </Text>
            <Text style={styles.emailSecond}>
              {user.correo}
            </Text>
            <View>
              
            </View>
          </View>
          
            
        
            <Text style={styles.name}>
              {user.phone}
            </Text>
            <Text style={styles.name}>
              {user.Dirección}
            </Text>
        </View>
        
      </View>
    </View>
  )
}