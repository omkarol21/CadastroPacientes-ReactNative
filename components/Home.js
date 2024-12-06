import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {estilo} from '../assets/CSS/estilo'

export default function Home({navigation}){

  function paginaLogin(){
    navigation.navigate('Login')
  }

  return(
    <View style={estilo.container}>
      <View style={estilo.containerLogo}>
        <Animatable.Image
         animation='zoomIn'
         source={require('../assets/IMG/IconPsco.png')}
         resizeMode='contain'
         style={estilo.iconHome}
        />
      </View>

      <Animatable.View animation='fadeInUp' delay={600} style={estilo.containerHome}>
        <Text style={estilo.titulo}>Seja Bem-Vindo(a)</Text>
        <Text style={estilo.texto}>Faça login para acessar!</Text>

        <View style={estilo.centralizar}>
          <TouchableOpacity style={estilo.btnLogin} onPress={paginaLogin}>
            <Text style={estilo.textoBtn}>Fazer Login</Text>
          </TouchableOpacity>
        </View>

      </Animatable.View>
    </View>
  );
}