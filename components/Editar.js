import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, Picker} from 'react-native';
import Dados from '../context/DadosContext'

import * as Animatable from 'react-native-animatable'
import {estilo} from '../assets/CSS/estilo';

export default function Editar({route, navigation}){
  var {index} = route.params
  var {usuario, setUsuario, } = useContext(Dados)
  var [nome, setNome] = useState(usuario[index].nome)
  var [idade, setIdade] = useState(usuario[index].idade)
  var [sexo, setSexo] = useState(usuario[index].sexo)
  var [data, setData] = useState(usuario[index].data)

  function alteraOption(itemValue){
    setSexo(itemValue)
  }

  function alterarImagem(sexo){
    switch(sexo){
      case 'Feminino':
        return require('../assets/IMG/IconMulher.png')
      
      case 'Masculino':
        return require('../assets/IMG/IconHomem.png')

      default:
        return require('../assets/IMG/IconUsuario.jpg')
    }
  }

  function salvarEdicao(){
    //Cópia da lista
    var novoUsuario = [...usuario]

    //Alterando os dados do novo usuário
    novoUsuario[index] ={nome, idade, sexo, data}

    //Atualiza a lista usuario
    setUsuario(novoUsuario)
    navigation.navigate('Listagem')
  }

  function paginaHome(){
    navigation.navigate('Home')
  }

  return(
    <View style={estilo.container}>
      <View style={estilo.nav}>
        <View style={estilo.tituloPag}>
          <Image style={estilo.imgNav} source={require('../assets/IMG/IconPsco.png')}/>
          <Text style={estilo.textNav}>Espaço Psicologia</Text>
        </View>

        <TouchableOpacity onPress={paginaHome}>
          <Image style={estilo.imgNav} source={require('../assets/IMG/IconSair.png')}/>
        </TouchableOpacity>
      </View>

      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={estilo.tituloLogin}>Editar paciente</Text>
      </Animatable.View>

      <View style={estilo.containerHome}>

        <Image style={estilo.imgEditar} source={alterarImagem(sexo)} />
        
        <Text style={estilo.textoLabel}>Insira seu nome:</Text>
        <TextInput
          placeholder = "Ex: Sidinei..."
          value = {nome}
          onChangeText = {setNome}
          style={estilo.input}
        />

        <Text style={estilo.textoLabel}>Insira sua idade:</Text>
        <TextInput
          placeholder = "Ex: 29..."
          value = {idade}
          onChangeText = {setIdade}
          style={estilo.input}
        />

        <Text style={estilo.textoLabel}>Insira seu sexo:</Text>
        <Picker
          selectedValue = {sexo}
          onValueChange = {alteraOption}
          style={estilo.select}
          >
          <Picker.Item label='Masculino' value='Masculino'/>
          <Picker.Item label='Feminino' value='Feminino'/>
        </Picker>

        <Text style={estilo.textoLabel}>Insira a data da consulta:</Text>
        <TextInput
          placeholder = "Ex: 21/06/2024..."
          value = {data}
          onChangeText = {setData}
          style={estilo.input}
        />

        <View style={estilo.centralizar}>
        <TouchableOpacity style={estilo.btnCadastro} onPress={salvarEdicao}>
            <Text style={estilo.textoCadastro}>Salvar</Text>
          </TouchableOpacity>
      </View>
      </View>

      
    </View>
  );
}