import React, { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid'
import { Paper } from "@material-ui/core"
import { ListCardsContainer, MainContainer, useStyles } from "../HomePage/Styled"
import { CardCardBack } from "../../Components/CardCardBack"

const SelectCardsPage = (props) => {
  const [cartas, setCartas] = useState([])

  useEffect(()=>{
    embaralhaCartas()
    }, []
  )

  const embaralhaCartas = () => {
    let novaListaDesOrdenada = []
    let novaLista = []
    for(let carta of props.cards){
        let novaCarta = {...carta, selected: false}
        novaLista.push(novaCarta)
      }
    while(novaListaDesOrdenada.length < novaLista.length){
      let novaCarta = novaLista[Math.floor(Math.random()*78)]
      if(!novaListaDesOrdenada.includes(novaCarta)){
        novaListaDesOrdenada.push(novaCarta)
      }
    }
    setCartas(novaListaDesOrdenada)
  }
  const viraCard = (e) => {
    const novaLista = cartas.map((card)=>{
      if(card.name === e.target.id && !card.selected){
        const newCard = {...card, selected: !card.selected}
        return newCard
      } else {
        return card
      }
    })
    setCartas(novaLista)
  }
  const classes = useStyles()
  const cardsList = cartas && cartas.map((card)=>{
    return ( 
    <Grid key={card.name} item> 
      <Paper
        className={classes.paper} >
        <CardCardBack
          url={card.selected === false ? props.imageBackCard : props.imagesUrl + card.image}
          name={!card.selected && card.name}
          id={card.name}
          onClick={(e)=>viraCard(e)}
        />
      </Paper>
    </Grid>)
  })
  
  return (
    <MainContainer>
      <ListCardsContainer container >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing='2'>
            {cardsList}
          </Grid>
        </Grid>
      </ListCardsContainer>
    </MainContainer>
  )
}
export default SelectCardsPage

