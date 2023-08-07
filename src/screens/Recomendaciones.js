import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import fetchChatGPTResponse from '../components/apiGPT';
import styles from '../styles/styleChat';


const ChatScreen = () => {
  const [message, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState('');

  const handleSendMessage = async () => {
    const response = await fetchChatGPTResponse('Eres experto en el cuidado de las codornices y sabes de codornices' + message);
    setOutputMessage(response);
  };

  return (
    <View style={styles.container}> 
      <TextInput
        value={message}
        onChangeText={setInputMessage} 
        placeholder="Escribe tu mensaje"
      />
      <Button title="Enviar" onPress={handleSendMessage} />
      <Text>{outputMessage}</Text>
    </View>
  );
};


export default ChatScreen;