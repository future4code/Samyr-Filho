import React from "react";

class DetalheUsuario extends React.Component {

    
    render() {

    
    return (
        <div>
            Detalhe
            <button onClick={this.props.onClickTelaLista}>
                Voltar
                {this.props.id_usuario}
            </button>
        </div>
    )
    }
}
export default DetalheUsuario