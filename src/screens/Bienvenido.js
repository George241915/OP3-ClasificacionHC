import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

//import camicon
import cam from '../assets/logEC.png'

export default function Bienvenido({navigation}) {

  const handleCameraPress = () => {
    navigation.navigate('Classification'); // Cambia 'Camera' por el nombre de la pantalla de la cámara
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a EggScan</Text>
      <Image
        source={cam} // Ruta de tu imagen de logo
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
        <FontAwesome5 name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Cámara</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      marginLeft: 10,
      fontSize: 18,
    },
  });