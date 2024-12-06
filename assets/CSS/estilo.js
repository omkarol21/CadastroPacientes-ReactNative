import {StyleSheet} from 'react-native'

export const estilo = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#BCE5FF"    
  },

  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerHome:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingStart:  '5%',
    paddingEnd: '5%'
  },

  iconHome: {
    width: 140,
    height: 140
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 8
  },

  texto: {
    fontSize: 18
  },

  centralizar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBtn:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  btnLogin: {
    width: 180,
    height: 40,
    backgroundColor: '#2C82B5',
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tituloLogin: {
    color: '#2C82B5',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15
  },

  textoLogin: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 30
  },

  textoLabel: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold'
  },

  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    outline: 'none'
  },

  nav: {
    backgroundColor: '#88CDF6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingTop: 5
  },
  
  tituloPag: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 12,    
  },

  textNav: {
    marginLeft: 10,
    fontWeight: 'bold',
  },

  imgNav: {
    width: 30,
    height: 30,
    marginRight: 10
  },  

  iconListagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 25
  },

  tituloListagem: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF'
  },

  textoListagem: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25
  },

  textoCadastro: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold'
  },

  btnCadastro: {
    width: 120,
    height: 40,
    backgroundColor: '#2C82B5',
    borderRadius: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnsCadastro: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  select: {
    backgroundColor: '#F4F3EE',
    borderRadius: 8,
    height: 30
  },

  cardPaciente: {
    width: 200,
    height: 290,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },

  iconsPaciente: {
    width: 30,
    height: 30,
    marginTop: 25
  },

  imgPaciente: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 10
  },

  textoCards: {
    fontSize: 16,
    marginTop: 15
  },

  imgEditar: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10
  },
  
})