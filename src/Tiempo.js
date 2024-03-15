import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importamos el icono de FontAwesome
import { useNavigation } from '@react-navigation/native';

const EstadoMontacargas = () => {
  const [montacargasList, setMontacargasList] = useState([
    { description: '', available: true },
    { description: '', available: false },
    { description: '', available: true },
    { description: '', available: false },
    { description: '', available: true },
  ]);

  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  // Establecer el título de la pantalla
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Estado Montacargas', // Cambia el título de la pantalla
    });
  }, [navigation]);

  const menuOptions = [
    { name: 'Registro', screen: 'Registro' },
    { name: 'Montacargas', screen: 'Montacargas' },
    { name: 'Tareas', screen: 'Tareas' },
    { name: 'Perfiles', screen: 'Perfiles' },
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setShowMenu(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {montacargasList.map((montacargas, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.text}>Fecha: 14/02/2024</Text>
            <Text style={styles.text}>Incidente: Se cayó la carga</Text>
            <Text style={styles.text}>Operador: Juanito Pérez</Text>
            <Text style={styles.text}>Horas trabajadas: 6</Text>
            <TouchableOpacity
              style={[styles.button, montacargas.available ? styles.availableButton : styles.busyButton]}
              onPress={() => {
                const updatedMontacargasList = [...montacargasList];
                updatedMontacargasList[index].available = !updatedMontacargasList[index].available;
                setMontacargasList(updatedMontacargasList);
              }}>
              <Text style={styles.buttonText}>{montacargas.available ? 'Disponible' : 'Ocupado'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Historial')}>
              <Text style={styles.buttonText}>Ver historial</Text>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <FontAwesome name="truck" size={100} color="black" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Descripción del reporte"
                value={montacargas.description}
                onChangeText={(text) => {
                  const updatedMontacargasList = [...montacargasList];
                  updatedMontacargasList[index].description = text;
                  setMontacargasList(updatedMontacargasList);
                }}
                multiline={true} // Permite varias líneas
                numberOfLines={4} // Número de líneas inicial
                textAlignVertical="top" // Alinea el texto en la parte superior
              />
              <TouchableOpacity style={styles.button} onPress={() => console.log('Agregar reporte')}>
                <Text style={styles.buttonText}>Agregar reporte</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  availableButton: {
    backgroundColor: 'green',
  },
  busyButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  menuOption: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  menuText: {
    color: '#ffffff',
    fontSize: 16,
  },
  input: {
    height: 120, // Ajusta la altura según sea necesario
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '100%',
  },
});

export default EstadoMontacargas;
