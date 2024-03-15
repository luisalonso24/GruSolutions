import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const Registro = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [turno, setTurno] = useState('Matutino');
  const [errorMessage, setErrorMessage] = useState('');
  const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  
  const handleRegistro = async () => {
    if (!emailRegex.test(correo)) {
      setErrorMessage('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }

    try {
      const response = await fetch('http://192.168.56.1:3000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          apellidoPaterno,
          apellidoMaterno,
          correo,
          contrasena,
          turno,
          tipo: 'Operador' 
        })
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('Login');
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error de registro:', error);
      setErrorMessage('Error de registro');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido Paterno"
          onChangeText={(text) => setApellidoPaterno(text)}
          value={apellidoPaterno}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido Materno"
          onChangeText={(text) => setApellidoMaterno(text)}
          value={apellidoMaterno}
        />
        <Picker
          selectedValue={turno}
          onValueChange={(itemValue, itemIndex) => setTurno(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Matutino" value="Matutino" />
          <Picker.Item label="Vespertino" value="Vespertino" />
          <Picker.Item label="Nocturno" value="Nocturno" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => setCorreo(text)}
          value={correo}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text) => setContrasena(text)}
          value={contrasena}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleRegistro} style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Registro;
