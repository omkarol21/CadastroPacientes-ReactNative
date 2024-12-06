import React, {useState, useContext} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, Picker} from 'react-native'
import Dados from '../context/DadosContext'

import * as Animatable from 'react-native-animatable'
import {estilo} from '../assets/CSS/estilo'

export default function CadastrarPaciente({navigation}){
  var [nome, setNome] = useState('')
  var [idade, setIdade] = useState('')
  var [sexo, setSexo] = useState('')
  var [data, setData] = useState('')
  var {usuario, setUsuario} = useContext(Dados)

  function cadastrar(){
    if(nome && idade && sexo && data){

      var novoUsuario = [...usuario]

      novoUsuario.push({
        nome: nome,
        idade: idade,
        sexo: sexo,
        data: data,
      }); 
    }
    else{
      alert('Insira os dados obrigatórios!')
    }

    //Atualiza a lista de dados
    setUsuario(novoUsuario)

    //Limpa os inputs
    setNome('');
    setIdade('');
    setSexo('');
    setData('');
    navigation.navigate('Listagem')
  }

  function paginaHome(){
    navigation.navigate('Home')
  }

  function paginaListagem(){
    navigation.navigate('Listagem')
  }

  function alteraOpition(itemValue){
    setSexo(itemValue)
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
        <Text style={estilo.tituloLogin}>Cadastre sua consulta</Text>
      </Animatable.View>

      <View style={estilo.containerHome}>
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
        <Picker style={estilo.select}
          selectedValue={sexo}
          onValueChange={alteraOpition}
          >
            {sexo === "" &&(
              <Picker.Item  label='Informe seu sexo...' value=''/>
            )}
        
          <Picker.Item style={estilo.select} label='Masculino' value='Masculino'/>
          <Picker.Item style={estilo.select} label='Feminino' value='Feminino'/>
          <Picker.Item style={estilo.select} label='Outro' value='Outro'/>
        </Picker>

        <Text style={estilo.textoLabel}>Insira a data da consulta:</Text>
        <TextInput
          placeholder = "Ex: 21/06/2024..."
          value = {data}
          onChangeText = {setData}
          style={estilo.input}
        />

        <View style={estilo.btnsCadastro}>
          <TouchableOpacity style={estilo.btnCadastro} onPress={paginaListagem}>
            <Text style={estilo.textoCadastro}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.btnCadastro} onPress={cadastrar}>
            <Text style={estilo.textoCadastro}>Cadastrar</Text>
          </TouchableOpacity>        
        </View>
      </View>

    </View>
  );
}