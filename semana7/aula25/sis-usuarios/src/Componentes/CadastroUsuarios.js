import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

let url= 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers: {
    Authorization: "samyr-hissa-lovelace"
  }
}

const EstiloCard = styled.div `
background-color: aliceblue;
border: 1px black solid;
padding: 5px;
display: flex;
flex-direction: column;
text-align: left;
margin-bottom: 20px;
>div{
    margin-left: 10px;
}
`
const EstiloBotaoLista = styled.button `
width: 150px;
height: 30px;
background: burlywood;
margin-top: 20px;

`

class CadastroUsuario extends React.Component {
    state = {
        inputEmail: '',
        inputNome: ''
    }

    onChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value})
      }
      onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
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

    render () {
        return (
            <div>
                <h4>Cadastro de Usuários</h4>
                <div>
                    <EstiloCard>
                    <div>
                        <div>Informe seu email</div>
                        <input
                            placeholder='email'
                            value = {this.state.inputEmail}
                            onChange= {this.onChangeEmail}
                        >
                        </input>
                    </div>
                    <div>
                        <div>Informe seu nome</div>
                        <input
                            placeholder='Nome'
                            value = {this.state.inputNome}
                            onChange = {this.onChangeNome}
                        >
                        </input>
                    </div>
                    </EstiloCard>
                    <button
                        onClick = {this.incluirUsuario}
                    >
                        Incluir Usuário
                    </button>
                </div>

                <EstiloBotaoLista onClick={this.props.onClickLista}>
                    Ir para a Lista
                </EstiloBotaoLista>
                {/* <button>
                    <ListaUsuarios>

                    </ListaUsuarios>
                </button> */}
            </div>
            
        )
    }
}

export default CadastroUsuario