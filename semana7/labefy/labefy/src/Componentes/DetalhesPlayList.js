import React from 'react'
import axios from 'axios'


class DetalhesPlaylist extends React.Component {
    render() {
        return <div>
            Detalhes
            <button onClick={this.props.mudarTelaAdd}>Voltar</button>
        </div>
    }
}

export default DetalhesPlaylist