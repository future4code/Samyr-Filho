import { Inicial } from "../Pages/Inicial";
import { AreaPublica } from "../Pages/AreaPublica";
import { DetalheViagem } from "../Pages/DetalheViagem";
import { FazerInscricao } from "../Pages/FazerInscricao";
import { FazerLogin } from "../Pages/FazerLogin";
import { Administrativa } from "../Pages/Administrativa";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Inicial />
                </Route>

                <Route exact path={'/AreaPublica'}>
                    <AreaPublica />
                </Route>
                
                <Route exact path={'/FazerInscricao'}>
                    <FazerInscricao />
                </Route>
                
                <Route exact path={'/FazerLogin'}>
                    <FazerLogin />
                </Route>

                <Route exact path={'/Administrativa'}>
                    <Administrativa />
                </Route>

                <Route exact path={'/DetalheViagem'}>
                    <DetalheViagem />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}