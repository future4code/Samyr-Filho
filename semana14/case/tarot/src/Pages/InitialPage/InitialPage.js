import React from "react"
import Grid from '@material-ui/core/Grid'
import { Paper } from "@material-ui/core"
import { ListCardsContainer, MainContainer, useStyles } from "./Styled"
import { CardCardFront } from "../../Components/CardCardFront"

const InitialPage = (props) => {
  const classes = useStyles()
  const cardsList = props.cards.map((card)=>{
    return  <Grid key={card.name} item> 
      <Paper
        className={classes.paper} 
      >
      <CardCardFront
        url={props.imagesUrl + card.image}
        name={card.name}
      />
    </Paper>
    </Grid>
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
  );
}
export default InitialPage