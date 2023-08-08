import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

//import camicon
import cam from '../assets/logEC.png'
import styles from '../styles/stylePrincipal';


export default function Bienvenido({navigation}) {

  const handleCameraPress = () => {
    navigation.navigate('Classification'); // Cambia 'Camera' por el nombre de la pantalla de la cámara
  };

  const handleRecommendationsPress = () => {
    navigation.navigate('Recomendaciones'); // Cambia 'Recommendations' por el nombre de la pantalla de recomendaciones
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a EggScan</Text>
      <TouchableOpacity  onPress={handleCameraPress}>
      <Animatable.Image
          animation="pulse" // Usamos la animación "pulse" para el brillo llamativo
          easing="ease-out"
          iterationCount="infinite" // Repite la animación infinitamente
          source={cam}
          duration={2000}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>
        ¿Quieres aprender más sobre codornices?
      </Text>
      <TouchableOpacity  onPress={handleCameraPress}>
      <Text  onPress={handleRecommendationsPress} style={{
        color: 'gray',
        fontSize: 20,
        paddingTop: 20
      }}>
       ¡Aventúrate aquí!
      </Text>
      </TouchableOpacity>
    </View>
  );
};
