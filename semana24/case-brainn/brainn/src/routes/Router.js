import ResultGames from "../pages/ResultGames"
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path={"/"}>
                    <ResultGames />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router