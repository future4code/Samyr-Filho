import React, { useContext, useEffect } from "react"
import GlobalContext from "../../global/GlobalContext"

import { useParams } from "react-router";



const DetailsMoviePage = (props) => {
    const {states, requests} = useContext(GlobalContext)
    const params = useParams();
    useEffect(()=>{
        requests.getMovieDatails(params.movieId)
    },[])
    
    

    return (
        <div  >
          aqui detalhe
    </div>
    )
}
export default DetailsMoviePage