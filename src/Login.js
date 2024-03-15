import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const obtenIdUsuario = async (email, password) => {
  try {
    const response = await fetch('http://192.168.56.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data.user.idUsuario;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('¡Complete los datos!');
    } else {
      try {
        const idUsuario = await obtenIdUsuario(email, password);

        if (idUsuario) {
          const response = await fetch(`http://192.168.56.1:3000/perfil/${idUsuario}`);
          const userData = await response.json();
          await AsyncStorage.setItem('tipoUsuario', userData.user.tipo);

          navigation.navigate('Perfil', { idUsuario });
        } else {
          setErrorMessage('Credenciales inválidas');
        }
      } catch (error) {
        console.error('Error de inicio de sesión:', error);
        setErrorMessage('Error de inicio de sesión');
      }
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/iconos.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={text => setEmail(text)} 
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  formContainer: {
    width: '85%',
    backgroundColor: '#FFF',
    padding: 20,
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
    backgroundColor: '#FFF',
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  errorMessage: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});

export default Login;
