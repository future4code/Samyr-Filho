import React from 'react';

const opcoesEtapa1 = ['Ensino Médio Incompleto', 'Ensino Médio Completo',
'Ensino Superior Incompleto', 'Ensino Superior Completo'];

 export default class Etapa1 extends React.Component {
    state = {
        nome: '',
        idade: '',
        email: '',
        grauEscolaridade: ''
    };

    changeNome = (event) => {
        this.setState({
            nome: event.target.value
        })
    };
    changeidade = (event) => {
        this.setState({
            idade: event.target.value
        })
    };
    changeemail = (event) => {
        this.setState({
            email: event.target.value
        })
    };


    render() {
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <ul>
                    <li>
                        1.Qual o seu nome?
                    </li>
                    <input
                        placeholder='Nome'
                        value={this.state.nome}
                        onChange={this.changeNome}
                    />
                    <li>
                        2.Qual sua idade?
                    </li>
                    <input
                        placeholder='Idade'
                        value={this.state.idade}
                        onChange={this.changeidade}
                    />
                    <li>
                        3.Qual seu email?
                    </li>
                    <input
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.changeemail}
                    />
                    <li>
                        4.Qual a sua escolaridade?
                    </li>
                    <select name='escolaridade'>
                        {opcoesEtapa1.map((item) => {
                            return <option
                            value={item}
                            >{item}</option>
                        })}
                    </select>

                </ul>
                
            </div>
        )
    }
    
}