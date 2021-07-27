import React from 'react'
import styled from 'styled-components'




class CadastroUsuario extends React.Component {

    render () {
        return (
            <div>
                Cadastro de Usuários
                <div>
                    <div>
                        <div>Informe seu email</div>
                        <input
                            placeholder='email'
                            value = {this.props.valorInputEmail}
                            onChange= {this.props.onChangeEmail}
                        >
                        </input>
                    </div>
                    <div>
                        <div>Informe seu nome</div>
                        <input
                            placeholder='Nome'
                            value = {this.props.valorInputNome}
                            onChange = {this.props.onChangeNome}
                        >
                        </input>
                    </div>
                    <button
                        onClick = {this.props.onClickIncluir}
                    >
                        Incluir Usuário
                    </button>
                </div>

                {/* <button onClick={this.props.mudarTela}>
                    Lista
                </button> */}
                {/* <button>
                    <ListaUsuarios>

                    </ListaUsuarios>
                </button> */}
            </div>
            
        )
    }
}

export default CadastroUsuario