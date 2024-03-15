// Tareas.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tareas = () => {
  const [completed, setCompleted] = useState([false, false, false]);
  const navigation = useNavigation();

  const completeTask = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = true;
    setCompleted(updatedCompleted);
  };

  const handleIniciar = () => {
    navigation.navigate('Montacarga'); // Dirigir a la vista Montacarga.js
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {completed.map((isCompleted, index) => (
        <View key={index} style={styles.taskList}>
          <View style={[styles.task, isCompleted && styles.completedTask]}>
            <TouchableOpacity style={styles.scanButton} onPress={handleIniciar}>
              <Text style={styles.scanButtonText}>Iniciar</Text>
            </TouchableOpacity>
            <View style={styles.taskDetails}>
              <Text style={[styles.taskText, isCompleted && styles.completedText]}>
                Estibar materia en rack {index + 1}
              </Text>
            </View>
            <View style={styles.taskInfo}>
              <Text style={styles.taskInfoText}>Fecha Inicio : 08/02/2024</Text>
              <Text style={styles.taskInfoText}>Fecha Término: 12/02/2024</Text>
              <Text style={styles.taskInfoText}>Área de Trabajo : Compras</Text>
              <Text style={styles.taskInfoText}>Tipo de Carga : Alimentos</Text>
              <Text style={styles.taskInfoText}>Nivel de Urgencia : Medio</Text>
            </View>
            <View style={styles.taskActions}>
              <TouchableOpacity
                style={[styles.btnComplete, isCompleted ? styles.completedBtn : null]}
                onPress={() => completeTask(index)}
                disabled={isCompleted}
              >
                <Text style={styles.btnText}>{isCompleted ? 'Completado' : 'Completar'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  taskList: {
    marginBottom: 20,
  },
  task: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  completedTask: {
    backgroundColor: '#4caf50',
  },
  taskDetails: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  taskText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  completedText: {
    color: '#000000',
  },
  taskInfo: {
    padding: 15,
  },
  taskInfoText: {
    color: '#000000',
    marginBottom: 5,
    fontSize: 16,
  },
  taskActions: {
    alignItems: 'flex-end',
    padding: 15,
  },
  btnComplete: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  completedBtn: {
    backgroundColor: '#4caf50',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scanButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#ffc107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  scanButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Tareas;
