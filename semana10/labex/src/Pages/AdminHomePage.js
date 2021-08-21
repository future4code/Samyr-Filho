import React from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { useRequestListaTrips } from "../Hooks/useRequestListaTrips.js";
import { CardViagens } from "./Cards/CardViagens.js";


export const AdminHomePage =  () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trips'
    
    const [trip, isLoading, error] = useRequestListaTrips(url);
    
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };
    
    const goToCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const goToTripDetail = (event) => {
        
        history.push(`/admin/trips/${event.target.id}`)
    }

    const goToLoginPage = () => {
        localStorage.setItem('token', '')
        history.replace('/login')
    }

    const listaViagem = trip && trip.map((viagem) => {
  
        return (
            
            <All.Lista key={viagem.id}><CardViagens
                            id={viagem.id}
                            nome={viagem.name}
                            planeta={viagem.planet}
                            descricao={viagem.description}
                            duracao={viagem.durationInDays}
                            data={viagem.date}
                            goToTripDetail={(e)=>goToTripDetail(e)}
                            tela='adminHomePage'
                        ></CardViagens>
                </All.Lista>
            
        )
    }) 
    return (
        <All.Centro>
            <All.PageHome>Área Administrativa</All.PageHome>
            <All.BotoesEmGrupo>
                <button onClick={goBack} type="button" class="btn btn-outline-primary">Voltar</button>
                <button onClick={goToCreateTrip} type="button" class="btn btn-outline-primary">Criar Viagem</button>
                {/* <button id='1' onClick={goToTripDetail} type="button" class="btn btn-outline-primary">Detalhe</button> */}
                <button onClick={goToLoginPage} type="button" class="btn btn-outline-primary">Logout</button>
            </All.BotoesEmGrupo>


            <All.Sombra class="list-group">
                {listaViagem}
                {/* <a onClick={goToTripDetail} id='1' href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item 1</a>
                <a onClick={goToTripDetail} id='2' href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item 2</a> */}
            </All.Sombra>
            


        </All.Centro>
    )
}