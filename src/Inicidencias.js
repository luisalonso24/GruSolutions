import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const Incidencias = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  const selectImageHandler = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Se requiere permiso para acceder a la galería.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ uri: pickerResult.uri });
  };

  const handleHistorialPress = () => {
    navigation.navigate('HistorialIncidencia'); // Corregido el nombre de la pantalla
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tipo de incidencia:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el tipo de incidencia"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Fecha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Seleccione la fecha"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Ingrese la descripción de la incidencia"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <View style={styles.formGroup}>
        <TouchableOpacity style={styles.button} onPress={selectImageHandler}>
          <Text style={styles.buttonText}>Adjuntar fotografía</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />
        )}
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#FFA500', marginBottom: 10 }]} onPress={handleHistorialPress}>
        <Text style={styles.buttonText}>Historial de las incidencias</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#800080' }]} onPress={() => console.log('Guardar Reporte')}>
        <Text style={styles.buttonText}>Guardar Reporte</Text>
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
    padding: 20,
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    marginBottom: 10,
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    fontSize: 16,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Incidencias;
