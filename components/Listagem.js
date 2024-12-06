import React, {useState, useContext} from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import Dados from '../context/DadosContext'

import * as Animatable from 'react-native-animatable'
import {estilo} from '../assets/CSS/estilo'

export default function Listagem({navigation}){

  var {usuario,setUsuario} = useContext(Dados)
  console.log(usuario)

  function paginaHome(){
    navigation.navigate('Home')
  }

  function excluirItem(index){
    var novoUsuario = [...usuario]
    novoUsuario.splice(index, 1)
    setUsuario(novoUsuario)
  }

  function editarItem(index){
    navigation.navigate('Editar', {index})
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

  function paginaCadastrar(){
    navigation.navigate('CadastrarPacientes')
  }

  return(
    <ScrollView style={estilo.container}>
      <View style={estilo.nav}>
        <View style={estilo.tituloPag}>
          <Image style={estilo.imgNav} source={require('../assets/IMG/IconPsco.png')}/>
          <Text style={estilo.textNav}>Espaço Psicologia</Text>
        </View>

        <TouchableOpacity onPress={paginaHome}>
          <Image style={estilo.imgNav} source={require('../assets/IMG/IconSair.png')}/>
        </TouchableOpacity>
      </View>

      <View>
        <Animatable.Image
         animation='zoomIn'
         source={require('../assets/IMG/IconListagem.png')}
         resizeMode='contain'
         style={estilo.iconListagem}
        />
      </View>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={estilo.tituloListagem}>Agendamentos</Text>
      </Animatable.View>

      {usuario.length === 0 && (
        <View>
          <Text style={estilo.textoListagem}>Não há usuários cadastrados!</Text>
        </View>
      )}

      <View>     

        {usuario.map((item, index) => (
          <View style={estilo.cardPaciente} key={index}>

            <Image style={estilo.imgPaciente} source={alterarImagem(item.sexo)}/>

            <Text style={estilo.textoCards}>Nome: {item.nome}</Text>
            <Text style={estilo.textoCards}>Idade: {item.idade}</Text>
            <Text style={estilo.textoCards}>Sexo: {item.sexo}</Text>
            <Text style={estilo.textoCards}>Data: {item.data}</Text>

            <View style={estilo.btnsCadastro}>
  
              <TouchableOpacity onPress={excluirItem.bind(null, index)}>
                <Image style={estilo.iconsPaciente} source={require('../assets/IMG/IconLixeira.png')}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={editarItem.bind(null, index)}>
                <Image style={estilo.iconsPaciente} source={require('../assets/IMG/IconEditar.png')}/>
              </TouchableOpacity>

            </View>

          </View>
        ))}
        
        <View style={estilo.centralizar}>
          <TouchableOpacity style={estilo.btnLogin} onPress={paginaCadastrar}>
            <Text style={estilo.textoBtn}>Cadastrar Paciente</Text>
          </TouchableOpacity>
        </View>

      </View>

      
    </ScrollView>
  );
}