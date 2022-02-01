import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import GlobalContext from "../../global/GlobalContext"
import { goToPopularMovies } from "../../routers/coordinator"
import PopularMoviesPage from "../PopularMoviesPage/PopularMoviesPage"


const HomePage = () => {
    const history = useHistory()
    const {setters, requests} = useContext(GlobalContext)
    // useEffect(()=>{
    //     getList()
    //     requests.getGenres()
    //     setters.resetMoviesFiltered()
    // },[])
    const getList = (page) => {
        requests.getPopularMovies(page)
        console.log("passei");
    }
    return (
        <div>
            {/* {goToPopularMovies(history)} */}
            <PopularMoviesPage />
        </div>
    )
}
export default HomePage