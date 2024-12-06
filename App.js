import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dados from './context/DadosContext'
import Home from './components/Home'
import Login from './components/Login'
import Listagem from './components/Listagem'
import CadastrarPacientes from './components/CadastrarPacientes'
import Editar from './components/Editar'

const Stack = createStackNavigator();

export default function App(){
  var [usuario,setUsuario]=useState([])

  return(
    <Dados.Provider value={{usuario,setUsuario}}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Listagem" component={Listagem}/>
          <Stack.Screen name="CadastrarPacientes" component={CadastrarPacientes}/>
          <Stack.Screen name="Editar" component={Editar}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Dados.Provider>
  );
}