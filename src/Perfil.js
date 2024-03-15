import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { idUsuario } = route.params; 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://192.168.56.1:3000/perfil/${idUsuario}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
      } else {
        console.error('Error al obtener los datos del usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleEstadoMontacargas = () => {
    navigation.navigate('Montacarga');
  };

  const handleIncidencias = () => {
    navigation.navigate('Incidencias');
  };

  const handleTareas = () => {
    navigation.navigate('Tareas');
  };

  const handleTiempo = () => {
    navigation.navigate('Tiempo');
  };

  const handleRegistro = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Perfil de Usuario</Text>
        {userData && (
          <View style={styles.infoContainer}>
            <Image source={require('../assets/perfil.png')} style={styles.profileImage} />
            <View style={styles.infoRow}>
              <Text style={styles.label}>Nombre:</Text>
              <Text style={styles.value}>{userData.nombre}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Turno:</Text>
              <Text style={styles.value}>{userData.turno}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Correo:</Text>
              <Text style={styles.value}>{userData.correo}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Horas Trabajadas:</Text>
              <Text style={styles.value}>{userData.hrsTrabajadas}</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {userData && userData.tipo === 'Administrador' && (
          <TouchableOpacity style={[styles.button, styles.rojo]} onPress={handleIncidencias}>
            <Text style={styles.buttonText}>Incidencias</Text>
          </TouchableOpacity>
        )}
         {userData && userData.tipo === 'Administrador' && (
          <TouchableOpacity style={[styles.button, styles.verde]} onPress={handleTareas}>
            <Text style={styles.buttonText}>Tareas</Text>
          </TouchableOpacity>
        )}
         {userData && userData.tipo === 'Administrador' && (
          <TouchableOpacity style={[styles.button, styles.azul]} onPress={handleTiempo}>
            <Text style={styles.buttonText}>Estado Montacarga</Text>
          </TouchableOpacity>
        )}
        
        {userData && userData.tipo === 'Operador' && (
          <TouchableOpacity style={[styles.button, styles.verde]} onPress={handleTareas}>
            <Text style={styles.buttonText}>Tarea</Text>
          </TouchableOpacity>
        )}
        {userData && userData.tipo === 'Operador' && (
          <TouchableOpacity style={[styles.button, styles.azul]} onPress={handleTiempo}>
            <Text style={styles.buttonText}>Estado Montacarga</Text>
          </TouchableOpacity>
        )}
         {userData && userData.tipo === 'Administrador' && (
          <TouchableOpacity style={[styles.button, styles.naranja]} onPress={handleRegistro}>
            <Text style={styles.buttonText}>Registrar Usuario</Text>
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rojo: {
    backgroundColor: '#dc3545',
  },
  verde: {
    backgroundColor: '#28a745',
  },
  amarillo: {
    backgroundColor: '#ffc107',
  },
  azul: {
    backgroundColor: '#007bff',
  },
  naranja : {
    backgroundColor: '#FFA500',
  },
});

export default Perfil;
