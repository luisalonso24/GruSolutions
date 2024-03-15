import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Estado = () => {
  const navigation = useNavigation();

  const handleFinalizar = () => {
    Alert.alert('Finalizar tarea', '¿Estás seguro de que deseas finalizar esta tarea?', [
      { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'Aceptar', onPress: () => navigation.navigate('Tareas') }, // Redirige a Tareas.js
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>En desarrollo</Text>
      <Image source={require('../assets/dog.png')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 18,
    borderRadius: 8, // Corrección: Agrega un valor para borderRadius
    marginTop: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Estado;
