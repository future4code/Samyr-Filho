import React from "react";

import styled from "styled-components";




const EstiloLinha = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 5px 5px;
    
`
const EstiloContainer = styled.div `
    border: 1px black solid;
    margin: 10px;
`


class ListaUsuarios extends React.Component {
    state = {
        // listaUsuarios: []
    }


    // puxarListaUsuarios = () => {
    //     axios
    //       .get(url, headers)
    //       .then((res) => {
    //         this.setState({listaUsuarios: res.data})
    //       })
    //       .catch((erro) => {
    //         console.log(erro)
    //       })
    // }

    // deletarUsuario = async (id) => {
    //     const param = url + '/' + id;
    //     if (window.confirm ("Confirma a exclusão?")) {
    //         try {
    //             const response = await axios.delete(param, headers)
                
    //         }
    //         catch(error) {
    //             alert('Usuário não excluído!')
    //         }
    //         this.puxarListaUsuarios()
    //     } else {
    //         alert('Usuário não excluído')
    //     }
    // }

    
    render() {
        
            const lista = this.props.listaUsuarios.map((usuario) => {
                return <EstiloLinha>
                            <li id={usuario.id}
                            onClick={() => this.props.onClickTelaDetalhe(usuario.id)}
                            >
                                {usuario.name}
                            </li>
                            <button 
                            onClick={() => this.props.onClickDeletar(usuario.id)}
                            >
                                Excluir
                            </button>
                        </EstiloLinha>
                })
            return (
                <div>
                        <h4>Lista Usuários</h4>
                    <EstiloContainer>
                    {lista}
                    </EstiloContainer>
                    <button onClick={this.props.onClickVoltar}>
                        Voltar
                    </button>
                </div>
            )
        
    }
}

export default ListaUsuarios