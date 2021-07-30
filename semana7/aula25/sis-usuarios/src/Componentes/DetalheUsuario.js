import React from "react";

class DetalheUsuario extends React.Component {
    state = {
        usuarioDetalhe: {
            id: '',
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        this.setarUsuraioDetalhe();
      }

    setarUsuraioDetalhe = () => {
        const usuario = this.props.lista.filter((usuario) => {
            return usuario.id === this.props.id_usuario
        })
        console.log('usuario detalhe', usuario[0])
        const usuarioDet = {
            id: usuario[0].id,
            name: usuario[0].name,
            email: usuario[0].email
        }
        this.setState({usuarioDetalhe: usuarioDet})
    }
    
    render() {
    const exibirUsuario = () => {
        return (
            <div>
                <div>Nome:
                    <div>{this.state.usuarioDetalhe.name}</div>
                </div>
                <div>email:
                    <div>{this.state.usuarioDetalhe.email}</div>
                </div>
            </div>
        )
    }
    return (
        
        <div>
            Detalhe do usuário
            {exibirUsuario()}
            <button onClick={this.props.onClickTelaLista}>
                Voltar
                
            </button>
            
        </div>
    )
    }
}
export default DetalheUsuario