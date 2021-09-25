import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@material-ui/core"
import { MainContainer } from "./Styled"
import SelectCardsPage from "../SelectCardsPage/SelectCardsPage"
import InitialPage from "../InitialPage/InitialPage"

const HomePage = () => {
  const [telaAtual, setTelaAtual] = useState('Initial')
  const [tarotObject, setTarotObject] = useState()
  const changeTelaAtual = ()=>{
    if(telaAtual === 'Initial'){
      setTelaAtual('SelectPage')
    } else {
      setTelaAtual('Initial')
    }
  }

  useEffect(()=>{
    getCartas()
  }, [])

  const getCartas = () => {
    axios.get('tarot.json')
      .then((response)=>{
        setTarotObject(response.data)
        
      })
      .catch((err)=>{
        alert(err.response)
      }) 
  }
  
  return (
    <MainContainer>
      {tarotObject && ( telaAtual === 'Initial' ? 
        <InitialPage 
          cards={tarotObject.cards}
          imagesUrl={tarotObject.imagesUrl}/> : 
        <SelectCardsPage 
          cards={tarotObject.cards}
          imagesUrl={tarotObject.imagesUrl}
          imageBackCard={tarotObject.imageBackCard}/>
      )}
      <Button 
          variant="contained" 
          color="primary"
          onClick={changeTelaAtual}>
        { telaAtual === 'Initial' ? 'Iniciar' : 'Resetar'}
      </Button>
    </MainContainer>
  );
}
export default HomePage