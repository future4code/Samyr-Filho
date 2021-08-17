import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CabecalhoPrincipal from './Componentes/CabecalhoPrincipal';
import PaginaMatch from './Componentes/PaginaMatch';
import PaginaListaMatch from './Componentes/PaginaListaMatch';
import styled from 'styled-components';



const urlPrincipal='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Samyr-Hissa-lovelace/'
const StylePrinicpal = styled.div `
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
  
`
const StyleSecund = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
`
const App = () => {
  const [telaAtual, setTelaAtual] = useState('Principal');
  const [person, setPerson] = useState({})
  const [listaMatch, setListaMatch] = useState([])

  useEffect(() => {
    pegaPerson()
  }, [])
  useEffect(() => {
    pegarMatchs()
  }, [])

  const mudarTela = () => {
    if (telaAtual === 'Principal') {
      setTelaAtual('Matchs')
    } else {
      setTelaAtual('Principal')
    }
  }

  const pegaPerson = async() => {

    try{
      const res = await axios.get(`${urlPrincipal}person`)
      setPerson( res.data.profile)
    }
    catch(err) {
      alert('Ocorreu um erro ao requisitar perfil!')
    }
  }

  const pegarMatchs = async() => {
    try{
      const res = await axios.get(`${urlPrincipal}matches`)
      setListaMatch(res.data.matches)
    }
    catch(err){

    }
  }

  const fazerMatch = async() => {
    const body = {
      id: person.id,
      choice: true
    };
    try {
      const res = await axios.post(`${urlPrincipal}choose-person`, body)
      pegaPerson()
      const novoMatch = [...listaMatch]
      novoMatch.push(person)
      setListaMatch(novoMatch)
    }
    catch(err) {
      alert('Ocorreu um erro ao fazer o Match')
    }
  }

  const naoFazerMatch = async() => {
    const body = {
      id: person.id,
      choice: false
    }
    try {
      const res = await axios.post(`${urlPrincipal}choose-person`, body)
      pegaPerson()
    }
    catch(err) {
      alert('Ocorreu um erro ao fazer o Match')
    }
  }
  const limpar = async() => {
    try {
    const res = await axios.put(`${urlPrincipal}clear`)
    const listaVazia = []
    setListaMatch(listaVazia)
    setTelaAtual('Principal')
    }
    catch(err) {
      alert('Ocorreu um erro ao limpar os Matchs')
    }
  }

  return (
    
    <StylePrinicpal>
      <StyleSecund>
        <CabecalhoPrincipal 
          telaAtual={telaAtual} 
          mudarTela={mudarTela}
          
          />
        {(telaAtual === 'Principal') ? <PaginaMatch 
                                          person={person} 
                                          fazerMatch = {fazerMatch}
                                          naoFazerMatch = {naoFazerMatch}
                                        /> :
        <PaginaListaMatch lista={listaMatch} limpar={limpar}/>}
      </StyleSecund>
    </StylePrinicpal>
  );
}

export default App;
