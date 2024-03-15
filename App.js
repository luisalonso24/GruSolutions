import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Registro from './src/Registro';
import Perfil from './src/Perfil';
import Montacarga from './src/Montacarga';
import Incidencias from './src/Inicidencias';
import Tareas from './src/Tareas';
import Tiempo from './src/Tiempo';
import Historial from './src/Historial';
import Estado from './src/Estado';
import Historialincidencia from './src/Historialincidencia';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Tiempo" component={Tiempo} />
        <Stack.Screen name="Incidencias" component={Incidencias} />
        <Stack.Screen name="Tareas" component={Tareas} />
        <Stack.Screen name="Montacarga" component={Montacarga} />
        <Stack.Screen name="Historial" component={Historial} />
        <Stack.Screen name="Estado" component={Estado} />
        <Stack.Screen name="HistorialIncidencia" component={Historialincidencia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}