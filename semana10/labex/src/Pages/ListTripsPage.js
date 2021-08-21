import React, { useEffect, useState }  from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardUmaViagem } from "./Cards/CardUmaViagem.js";
import { useRequestListaTrips } from "../Hooks/useRequestListaTrips.js";



export const ListTripsPage =  () => {

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trips'
    
  const [trip, isLoading, error] = useRequestListaTrips(url);
    const history = useHistory();
    const goBack = () => {
        history.goBack();
      };

      const [viagemSelecionada, setViagemSelecioanda] = useState('')
    const irFazerInscricao = () => {
        history.push('/trips/application')
        
    }

    const selecionarViagem = (event) => {
        // {event.target.value !== '' && setViagemSelecioanda(event.target.value)}
    }

    const listaViagem = trip && trip.map((viagem) => {

  
        return (
                <li >
                    
                    <CardUmaViagem 
                            nome={viagem.name}
                            planeta={viagem.planet}
                            descricao={viagem.description}
                            duracao={viagem.durationInDays}
                            data={viagem.date}
                            Viagem = {(e) => selecionarViagem(e)}
                     />
                </li>
            
        )
    }
    ) 
    return (
        <div>
            <All.SessaoSuperior>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                {trip.length ? <button onClick={irFazerInscricao}  type="button" class="btn btn-primary">Fazer Inscrição</button> : <p></p>}
            </All.SessaoSuperior>
                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && trip && trip.length > 0 && 
                    <div>
                        <All.Titulos>Se candidate à uma das viagens</All.Titulos>
                        <All.ListTrips>
                            {listaViagem}
                        </All.ListTrips>
                    </div>}
                {!isLoading && trip && trip.length > 0 && <All.Titulos>Não há viagens cadastradas</All.Titulos>}
            
        </div>
    )
}