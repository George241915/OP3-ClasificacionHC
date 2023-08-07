import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

//import camicon
import cam from '../assets/logEC.png'
import styles from '../styles/stylePrincipal';


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
