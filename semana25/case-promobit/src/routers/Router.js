import React from "react"
import {BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/hedaer/Header"
import DetailsMoviePage from "../pages/DetailsMoviePage/DetailsMoviePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import PopularMoviesPage from "../pages/PopularMoviesPage/PopularMoviesPage"

const Router = () => {
    return(
        <BrowserRouter>
            <link rel="stylesheet" 
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
              crossorigin="anonymous"></link>
              <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'/>
              
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/movies">
                    <PopularMoviesPage />
                </Route>
                <Route exact path="/movies/details/:movieId">
                    <DetailsMoviePage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router