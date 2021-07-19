import React from 'react';

 export default class Etapa2 extends React.Component {
    state = {
        curso: '',
        unidadeEnsino: ''
    };

    changeCurso = (event) => {
        this.setState({
            curso: event.target.value
        })
    };
    changeUnidadeEnsino = (event) => {
        this.setState({
            unidadeEnsino: event.target.value
        })
    };


    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <ul>
                    <li>
                        1.Qual curso?
                    </li>
                    <input
                        placeholder='Curso'
                        value={this.state.curso}
                        onChange={this.changeCurso}
                    />
                    <li>
                        2.Qual sua idade?
                    </li>
                    <input
                        placeholder='Unidade de ensino'
                        value={this.state.unidadeEnsinoidade}
                        onChange={this.changeUnidadeEnsinoidade}
                    />
                </ul>
                
            </div>
        )
    }
    
}