import React from 'react';

const opcoesEtapa3 = ['Nenhum', 'Curso técnico',
'Curso de inglês'];

 export default class Etapa3 extends React.Component {
    state = {
        motivoNaoGraduacao: '',
        cursoComplementar: ''
    };

    changeMotivoNaoGraduacao = (event) => {
        this.setState({
            motivoNaoGraduacao: event.target.value
        })
    };
    


    render() {
        return (
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <ul>
                    <li>
                        5. POR QUE VOCÊ NÃO TERMINOU UM CURSO DE GRADUAÇÃO?
                    </li>
                    <input
                        placeholder='Motivo'
                        value={this.state.motivoNaoGraduacao}
                        onChange={this.changeMotivoNaoGraduacao}
                    />
                    <li>
                        6.Você fez algum curso complementar?
                    </li>
                    <select name='cursoComplementar'>
                        {opcoesEtapa3.map((item) => {
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