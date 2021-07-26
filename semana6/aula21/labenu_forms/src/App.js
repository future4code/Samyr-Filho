import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './Componentes/Etapa1'
import Etapa2 from './Componentes/Etapa2'
import Etapa3 from './Componentes/Etapa3'
import EtapaFinal from './Componentes/EtapaFinal'

export default class App extends React.Component {
  state = {
    etapa: 1
  }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <EtapaFinal />;

    }
  }

  irParaProximaEtapa = () => {
    if (this.state.etapa < 3) {
    this.setState({etapa: this.state.etapa + 1})
    } else {
      this.setState({etapa: 0})
    }
  }

  render() {
  return (
      <div className="App">
        {this.renderizaEtapa()}
        {this.state.etapa && 
         (<button onClick={this.irParaProximaEtapa} >Próxima Etapa</button>)}
      </div>
      
    );
  }
}

