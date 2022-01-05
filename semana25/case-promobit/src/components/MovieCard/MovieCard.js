import { React } from "react"
import { useHistory } from "react-router"
import { goToDetailsMovies } from "../../routers/coordinator"


export const MovieCard = (props) => {
    const history = useHistory()
    // const {states, requests} = useContext(GlobalContext)
    return(
        <div class="card" style={{width: "15rem", borderRadius: "10px", marginBottom: "10px"}}> 
            <img class="card-img-top" 
                    src=".../100px180/" 
                    alt={props.title}
                    onClick={()=>goToDetailsMovies(history, props.movieId)} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    {(props.rate <= 6) ? <span class="badge badge-pill badge-danger" 
                                            style={{marginLeft:"5px"}}>{props.rate * 10}%</span> : 
                        <span class="badge badge-pill badge-success" 
                        style={{marginLeft:"5px"}}>{props.rate * 10}%</span>
                    }
                </div>
        </div>
    )
}