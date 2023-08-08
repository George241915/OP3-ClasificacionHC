import { View,SafeAreaView, Text,Image,ScrollView,TouchableOpacity,TextInput,Button, Alert, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../styles/stylesLogin'
import app from '../api/firebaseConfig'
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'


const auth=getAuth(app)



export default function Login(props) {

    const [email,setEmail]= useState()
    const [password,setPassword]= useState()

    const logueo =async()=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            Alert.alert('Iniciando sesion', 'Accediendo..')
            props.navigation.navigate('Home')
        } catch (error) {
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }



  return (
    
        <View style={styles.container}>
            <ImageBackground source={require('../assets/alimentoC.jpg')} resizeMode={'cover'} style={styles.image1}>
            <View style={{justifyContent:'center',alignItems:'center',}}>
                <Image source={require('../assets/logEC.png')} style={styles.profilePictures}></Image>
            </View>
            <View style={styles.card} >
                <View style={styles.boxText}>
                    <TextInput onChangeText={(text)=>setEmail(text)} placeholder='correo@gmail.com' style={styles.input}></TextInput>
                </View>
                <View style={styles.boxText}>
                    <TextInput onChangeText={(text)=>setPassword(text)} placeholder='password' style={styles.input} secureTextEntry={true} ></TextInput>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.boxButton} onPress={logueo}>
                        <Text style={styles.TextButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            </ImageBackground>
        </View>
        
    
  )
}