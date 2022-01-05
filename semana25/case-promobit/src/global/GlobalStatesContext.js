import GlobalContext from "./GlobalContext"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { API_KEY } from "../constants/API_KEY"
import { useState } from "react"


const GlobalStateContext = (props) => {
    const [popularMovies, setPopularMovies] = useState([])
    const [moviesFiltered, setMoviesFiltered] = useState([])
    const [movieDatails, setMovieDetails] = useState({})
    const [genres, setGenres] = useState([])

    const getPopularMovies = (page) => {
        
        axios
            .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
            .then((res) => {
                setPopularMovies(res.data.results)
            })
            .catch((err)=>{
                console.log(err.response)
            })
    }
    const getMovieDatails = (move_id) => {
        axios
            .get(`${BASE_URL}/movie/${move_id}?api_key=${API_KEY}`)
            .then((res) => {
                setMovieDetails(res.data)
            })
            .catch((err) => {
                console.log('erro', err.response)
            })
    }

    const getGenres = ()=>{
        
        axios
            .get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
            .then((res)=>{
                setGenres(res.data.genres)
            })
            .catch((err)=>{
                console.log('erro generos', err.response)
            })
    }
    const resetMoviesFiltered = () => {
        setMoviesFiltered(popularMovies)
    }
    const setFilterMoviesByGenres = (genres)=>{
        const newMoviesFiltered = popularMovies.filter((movie)=>{
            let achei = false
            let index = 0
            while((index < genres.length) && !achei){
                for(let genre2 of movie.genre_ids){
                    if(genres[index].id === genre2){
                        achei = true
                    }
                }
                index++
            }
            
            return achei
            
        })
        setMoviesFiltered(newMoviesFiltered)
        
    }

    const states = { popularMovies, movieDatails, genres, moviesFiltered }
    const setters = { setPopularMovies, 
                      setMovieDetails, 
                      setGenres, 
                      setFilterMoviesByGenres, 
                      resetMoviesFiltered }
    const requests = { getPopularMovies, getMovieDatails, getGenres }

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalStateContext