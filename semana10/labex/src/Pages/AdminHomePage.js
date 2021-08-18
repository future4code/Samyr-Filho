import React from  "react";
import { useHistory } from "react-router-dom";


export const AdminHomePage =  () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };
    
    const goToCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const goToTripDetail = (event) => {
        console.log('env', event.target.id)
        history.push(`/admin/trips/${event.target.id}`)
    }

    const goToLoginPage = () => {
        history.replace('/login')
    }

    return (
        <div>
            <p>Área Administrativa</p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button id='1' onClick={goToTripDetail}>Detalhe</button>
            <button onClick={goToLoginPage}>Logout</button>
        </div>
    )
}