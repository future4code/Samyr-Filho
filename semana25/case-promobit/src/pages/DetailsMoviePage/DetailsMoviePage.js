import React, { useContext, useEffect } from "react"
import GlobalContext from "../../global/GlobalContext"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 10
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const DetailsMoviePage = (props) => {
    const {states, requests} = useContext(GlobalContext)
    const params = useParams();
    useEffect(()=>{
        requests.getMovieDatails(params.movieId)
    },[])
    
    const classes = useStyles();
    const ListProdutionCompanies = states.movieDatails.production_companies ? states.movieDatails.production_companies.map((company)=>{
        return (
            <Paper className={classes.paper}>{company.name}</Paper>
            
        )
    }) : <></>
    return (
        <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{states.movieDatails.original_title}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Home Page: {states.movieDatails.homepage}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{states.movieDatails.overview}</Paper>
        </Grid>
        <Grid item xs={12}>
          <p>Produções</p>  
          {ListProdutionCompanies}
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    )
}
export default DetailsMoviePage