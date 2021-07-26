import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now()+1,
          texto: 'Comprar leite',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Comprar pão',
          completa: true
        }
    ],
      inputValue: '',
      filtro: '',
      selecionada: 0
    }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas)  {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
    }

  };

  componentDidMount() {
    const novasTarefasString = localStorage.getItem('tarefas');
    const novasTarefasObjeto = JSON.parse(novasTarefasString);
    // console.log(novasTarefasObjeto)
    this.setState({tarefas: novasTarefasObjeto});
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {id: Date.now(),
                        texto: this.state.inputValue,
                        completa: false}
    const novasTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: novasTarefas})
  }

  removeTarefa = () => {
    const novasTarefas = this.state.tarefas.filter((tarefa) => {
      return this.state.selecionada !== tarefa.id
    })
    this.setState({tarefas: novasTarefas})
  }

  selectTarefa = (id) => {
    
    const novasTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    
    this.setState({tarefas: novasTarefas})
    this.setState({selecionada: id})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.removeTarefa}>
          Remover</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                
              </Tarefa>
              
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
