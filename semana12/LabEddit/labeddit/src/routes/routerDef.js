import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Header from "../components/header.js";
import Cadastro from "../pages/CadastroPage/cadstroPage.js";
import ErrorPage from "../pages/ErrorPage/errorPage.js";
import FeedPage from "../pages/FeedPage/feedPage.js";
import HomePage from "../pages/HomePage/homePage.js";
import PostPage from "../pages/PostPage/postPage.js";


const RouterDef = () => {
    return (
        <BrowserRouter>
            <Header title={useLocation}/>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>
                <Route exact path={'/cadastro'}>
                    <Cadastro />
                </Route>
                <Route exact path={'/feedPage'}>
                    <FeedPage />
                </Route>
                <Route exact path={'/postPage/:idPost'}>
                    <PostPage />
                </Route>
                    <ErrorPage />
                <Route>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default RouterDef