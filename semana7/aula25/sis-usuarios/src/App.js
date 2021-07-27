import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CadastroUsuario from './Componentes/CadastroUsuarios'
import ListaUsuarios from './Componentes/ListaUsuarios'

const url= 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers: {
    Authorization: "samyr-hissa-lovelace"
  }
}

class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputEmail: '',
    inputNome: '', 
    telaCadastro: true
  }

  componentDidUpdate() {
    
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  puxarListaUsuarios = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({listaUsuarios: res.data})
      })
      .catch((erro) => {
        console.log(erro)
      })
  }
  incluirUsuario = () => {
    
    const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
    }
    
    axios
      .post(url, body, headers)
      .then((res) => {
        alert('Usuario Incluido!')
        
      })
      .catch((erro) => {
        alert(erro.response.data)
      })
  }
  mudarTela = () => {
    this.setState({telaCadastro: !this.state.telaCadastro})
    console.log(this.state.telaCadastro)
    this.renderizaTelaCorreta()
  }

  renderizaTelaCorreta = () => {
    if (this.state.telaCadastro) {
      return <CadastroUsuario
      valorInputEmail = {this.state.inputEmail}
      valorInputNome = {this.state.inputNome}
      onChangeEmail = {this.onChangeEmail}
      onChangeNome = {this.onChangeNome}
      onClickIncluir = {this.incluirUsuario} />;
    } else {
      return <ListaUsuarios></ListaUsuarios> ;
    }
  };
  render() {

    const componenteListaUsuarios = this.state.listaUsuarios.map((usuario) => {
      return (<li key={usuario.id}>
                {usuario.name}
              </li>      
      )
    })
  return (
    <div>
        <h3>Sistema de usuários</h3>
        <CadastroUsuario
          valorInputEmail = {this.state.inputEmail}
          valorInputNome = {this.state.inputNome}
          onChangeEmail = {this.onChangeEmail}
          onChangeNome = {this.onChangeNome}
          onClickIncluir = {this.incluirUsuario}
          mudarTela = {this.mudarTela}
        >

        </CadastroUsuario>
        <button onClick={this.mudarTela}>
          Lista
        </button>
        {/* <div>{componenteListaUsuarios}</div> */}
    </div>
  );
  }
}

export default App;
