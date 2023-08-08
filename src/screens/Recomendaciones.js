import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text,TouchableOpacity  } from 'react-native';
import fetchChatGPTResponse from '../components/apiGPT';
import styles from '../styles/styleChat';


const ChatScreen = ({navigation}) => {
  const [message, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetchChatGPTResponse('Eres experto en el cuidado de las codornices y sabes de codornices' + message);
    setOutputMessage(response);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
        setInputMessage(''); // Limpiar el campo de respuesta al salir de la pantalla
        setOutputMessage(''); // Limpiar el campo de respuesta al salir de la pantalla
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}> 
      <View >
        <TextInput
        style={styles.input}
          value={message}
          onChangeText={setInputMessage} 
          placeholder="Escribe tu mensaje"
        />
      </View>
      <View style={{alignContent:'center', alignItems: 'center',}}>
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
              <Text style={styles.buttonText}>
              {outputMessage}Enviar
              </Text>
          </TouchableOpacity>
      </View>
      
    </View>
  );
};


export default ChatScreen;