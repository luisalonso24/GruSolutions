import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Historialincidencia = () => {
  const navigation = useNavigation();

  const handleFinalizar = () => {
    // Lógica para finalizar la incidencia
    console.log('Incidencia finalizada');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>En desarrollo</Text>
      <Image source={require('../assets/tool.png')} style={styles.image} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Historialincidencia;
