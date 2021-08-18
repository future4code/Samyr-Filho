import { HomePage } from "../Pages/HomePage";
import { ListTripsPage } from "../Pages/ListTripsPage";
import { TripDetailsPage } from "../Pages/TripDetailsPage";
import { ApplicationFormPage } from "../Pages/ApplicationFormPage";
import { LoginPage } from "../Pages/LoginPage";
import { AdminHomePage } from "../Pages/AdminHomePage";
import { CreateTripPage } from "../Pages/CreateTripPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/trips/list'}>
                    <ListTripsPage />
                </Route>
                
                <Route exact path={'/trips/application'}>
                    <ApplicationFormPage />
                </Route>
                
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/admin/trips/list'}>
                    <AdminHomePage />
                </Route>

                <Route exact path={'/admin/trips/create'}>
                    <CreateTripPage />
                </Route>

                <Route exact path={'/admin/trips/:id'}>
                    <TripDetailsPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}