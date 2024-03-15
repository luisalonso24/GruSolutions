// MontacargaForm.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MontacargaForm = () => {
  const navigation = useNavigation();

  const handleComenzar = () => {
    navigation.navigate('Estado');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scanQRButton}>
        <Text style={styles.buttonText}>Escanear Código QR</Text>
      </TouchableOpacity>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre Tarea:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el titulo de la tarea asignada"
        />  
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tipo de carga:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el tipo de carga"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de Montacargas:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el número de montacargas"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Fecha Inicio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fecha de inicio"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Área de Trabajo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el área de trabajo"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Operador:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre del operador"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nivel de urgencia:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nivel de urgencia"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleComenzar}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  scanQRButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#003DF5',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
});

export default MontacargaForm;
