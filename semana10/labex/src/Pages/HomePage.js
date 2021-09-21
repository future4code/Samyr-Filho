import React from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'



export const HomePage =  () => {

    const history = useHistory();

    const irParaListTripPage = () => {
        history.push('/trips/list')
    }
    const irParaLoginPage = () => {
        localStorage.getItem('token') === '' ? history.push('/login') : history.push('/admin/trips/list')
    }

    
    return (
        
        <div>
            <All.PageHome>LAbeX - Faça a viagem dos seus sonhos</All.PageHome>
            <All.SessaoMedial>
                <button onClick={irParaListTripPage} type="button" class="btn btn-primary">Ver viagens</button>
                <button onClick={irParaLoginPage} type="button" class="btn btn-secondary">Área Administrativa</button>
            </All.SessaoMedial>
        </div>
    )
}