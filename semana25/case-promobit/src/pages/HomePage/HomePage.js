import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import GlobalContext from "../../global/GlobalContext"
import { goToPopularMovies } from "../../routers/coordinator"


const HomePage = () => {
    const history = useHistory()
    const {setters, requests} = useContext(GlobalContext)
    useEffect(()=>{
        getList()
        requests.getGenres()
        setters.resetMoviesFiltered()
    },[])
    const getList = (page) => {
        requests.getPopularMovies(page)
    }
    return (
        <div>
            {goToPopularMovies(history)}
        </div>
    )
}
export default HomePage