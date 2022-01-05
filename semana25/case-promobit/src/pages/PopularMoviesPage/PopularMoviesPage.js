import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import MenuGeners from "../../components/menus/MenuGeners"
import { MovieCard } from "../../components/MovieCard/MovieCard"
import GlobalContext from "../../global/GlobalContext"

const PopularMoviesPage = () => {
    const history = useHistory()
    const {states, requests} = useContext(GlobalContext)
    const [pageAtual, setPage] = useState(1)

    const getList = (page) => {
        requests.getPopularMovies(page)
    }

    const changePage = (page) => {
        setPage(page)
        getList(page)
    }
    const ListMovies = states.moviesFiltered ? states.moviesFiltered.map((movie)=>{
        return(
            <div class="col-sm">
            <MovieCard
                    title={movie.title}
                    descrition={movie.overview}
                    rate={movie.vote_average}
                    movieId={movie.id}
                    onClickDetalhes={requests.changePage}
                />
            </div>
            
        )
    }) : <p>Nada</p>
    return (
        <div class="container" style={{padding: "20px 20px 20px 20px"}}>
            <MenuGeners />
                            <div class="row">
                                {ListMovies}
                                
                            </div>
            <div class="container" style={{textAlign: "center"}}>
                <nav aria-label="Navegação de página exemplo">
                    <button type="button" class="btn btn-primary" onClick={(pageAtual > 1) && (()=>changePage(pageAtual - 1))}>Anterior</button>
                    <button type="button" class="btn btn-light" onClick={()=>changePage(1)}>1</button>
                    <button type="button" class="btn btn-light" onClick={()=>changePage(2)}>2</button>
                    <button type="button" class="btn btn-light" onClick={()=>changePage(3)}>3</button>
                    <button type="button" class="btn btn-success" onClick={()=>changePage(pageAtual + 1)}>Próxima</button>
                </nav>
            </div>
                    
        </div>
    )
}
export default PopularMoviesPage