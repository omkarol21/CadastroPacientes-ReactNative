import React from 'react';
import * as Animatable from 'react-native-animatable';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import {estilo} from '../assets/CSS/estilo'

export default function Login({navigation}){

  function paginaListagem(){
    navigation.navigate('Listagem')
  }

  return(
    <View style={estilo.container}>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={estilo.tituloLogin}>Faça login para acessar!</Text>
        <Text style={estilo.textoLogin}>Cadastre-se no nosso portal para um atendimento psicológico personalizado e seguro.</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={estilo.containerHome}>

        <Text style={estilo.titulo}>Insira seu e-mail:</Text>
        <TextInput 
          placeholder='Ex: usuário@gmail.com...'
          style={estilo.input}          
        />

        <Text style={estilo.titulo}>Insira sua senha:</Text>
        <TextInput 
          placeholder='Ex: 123...'
          style={estilo.input}           
        />

        <View style={estilo.centralizar}>
          <TouchableOpacity style={estilo.btnLogin} onPress={paginaListagem}>
            <Text style={estilo.textoBtn}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}