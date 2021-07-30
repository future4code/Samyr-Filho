import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CadastroUsuario from './Componentes/CadastroUsuarios'
import ListaUsuarios from './Componentes/ListaUsuarios'
import DetalheUsuario from './Componentes/DetalheUsuario'



const EstiloTela = styled.div `
   text-align: center; 

`

let url= 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers: {
    Authorization: "samyr-hissa-lovelace"
  }
}

class App extends React.Component {

  state = {
    listaUsuarios: [],
    telaAtual: 'Cadastro',
    id_detalhe: ''
  }

componentDidUpdate() {
    
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

deletarUsuario = async (id) => {
    const param = url + '/' + id;
    if (window.confirm ("Confirma a exclusão?")) {
        try {
            const response = await axios.delete(param, headers)
            
        }
        catch(error) {
            alert('Usuário não excluído!')
        }
        this.puxarListaUsuarios()
    } else {
        alert('Usuário não excluído')
    }
}

  mudarTelaCadastro = () => {
    this.setState({telaAtual: 'Cadastro'})
  }
  mudarTelaLista = () => {
    {this.puxarListaUsuarios()}
    this.setState({telaAtual: 'Lista'})
  }

  mudarTelaDetalhe = (id) => {
    this.setState({id_detalhe: id})
    this.setState({telaAtual: 'Detalhe'})
  }


  renderizaTelaCorreta = () => {
    if (this.state.telaAtual === 'Cadastro') {
      return <CadastroUsuario
              onClickLista = {this.mudarTelaLista} 
              />;
    } else if (this.state.telaAtual === 'Lista') {
      return <ListaUsuarios 
              onClickVoltar = {this.mudarTelaCadastro}
              onClickTelaDetalhe = {this.mudarTelaDetalhe}
              listaUsuarios = {this.state.listaUsuarios}
              onClickDeletar = {this.deletarUsuario}
            /> ;
    } else {
      return <DetalheUsuario 
                onClickTelaLista = {this.mudarTelaLista}
                id_usuario = {this.state.id_detalhe}
                lista = {this.state.listaUsuarios}
              >
              </DetalheUsuario>
    }
  };
  render() {
  return (
    <EstiloTela>
        <h2>Sistema de usuários</h2>
        <hr></hr>
        {this.renderizaTelaCorreta()}
    </EstiloTela>
  );
  }
}

export default App;
