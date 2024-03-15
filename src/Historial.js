// Historial.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome para los iconos
import { MaterialIcons } from '@expo/vector-icons'; // Importa MaterialIcons para el icono del montacargas

const Historial = ({ navigation }) => {
  // Ejemplo de datos de historial
  const historialData = [
    { fecha: '15/02/2024', horaInicio: '09:00', horaFin: '15:00', operador: 'Juanito Pérez', localizacion: 'Almacén A' },
    { fecha: '16/02/2024', horaInicio: '08:30', horaFin: '14:30', operador: 'María López', localizacion: 'Almacén B' },
    { fecha: '17/02/2024', horaInicio: '10:00', horaFin: '16:00', operador: 'Carlos Ramírez', localizacion: 'Almacén C' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {historialData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="local-shipping" size={24} color="#ffffff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>Fecha: {item.fecha}</Text>
              <Text style={styles.itemText}>Hora inicio: {item.horaInicio}</Text>
              <Text style={styles.itemText}>Hora finalización: {item.horaFin}</Text>
              <Text style={styles.itemText}>Operador: {item.operador}</Text>
              <Text style={styles.itemText}>Localización: {item.localizacion}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    elevation: 3, // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    backgroundColor: '#f77f00', // Naranja
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Historial;
