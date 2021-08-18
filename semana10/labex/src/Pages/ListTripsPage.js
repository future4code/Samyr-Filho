import React  from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardViagens } from "./Cards/CardViagens.js";
import { useRequestData } from "../Hooks/useRequestListaTrips.js";



export const ListTripsPage =  () => {

    const listaViagens = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:samyr-hissa-lovelace/trips');
    const history = useHistory();
    const goBack = () => {
        history.goBack();
      };


    const irFazerInscricao = () => {
        history.push('/trips/application')
    }

    const listaViagem = listaViagens && listaViagens.map((viagem) => {
        return (
            
                
                <li key={viagem.id}><CardViagens 
                            nome={viagem.name}
                            planeta={viagem.planet}
                            descricao={viagem.description}
                            duracao={viagem.durationInDays}
                            data={viagem.date}
                        ></CardViagens>
                </li>
            
        )
    }) 
    
    return (
        <div>
            
            <All.SessaoSuperior>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                {listaViagens.length !== 0 && <button onClick={irFazerInscricao}  type="button" class="btn btn-primary">Fazer Inscrição</button>}
            </All.SessaoSuperior>
            {listaViagens.length !== 0 ? <All.Titulos>Se candidate à uma das viagens</All.Titulos> : <All.Titulos>Não há viagens cadastradas</All.Titulos>}
            <All.ListTrips>
                {listaViagem}
            </All.ListTrips>
        </div>
    )
}