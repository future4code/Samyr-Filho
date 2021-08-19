import React, { useEffect, useState }  from  "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardViagens } from "./Cards/CardViagens.js";
import { useRequestListaTrips } from "../Hooks/useRequestListaTrips.js";



export const ListTripsPage =  () => {

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:samyr-hissa-lovelace/trips'
    
  const trip = useRequestListaTrips(url);
    

  // const [trip, setTrip] = useState([])

  // useEffect(() => {
  //     getListTrip()
  //   },
  //   []);


  // const getListTrip = () => {
  //   axios.get(url)
  //         .then((res) => {
  //           console.log('lisssta', res.data.trips)
  //           setTrip(res.data.trips)
  //         })
  //         .catch((err) => {
  //             setTrip([])
  //             alert('Ocorreu um erro ao carregar a lista de viagens!')
  //         });
  // }

    const history = useHistory();
    const goBack = () => {
        history.goBack();
      };


    const irFazerInscricao = () => {
        history.push('/trips/application')
        // getListTrip()
    }

    const listaViagem = trip && trip.map((viagem) => {
  
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
                {/* <button onClick={irFazerInscricao}  type="button" class="btn btn-primary">Fazer Inscrição</button> */}
                {trip.length ? <button onClick={irFazerInscricao}  type="button" class="btn btn-primary">Fazer Inscrição</button> : <p></p>}
            </All.SessaoSuperior>
            {trip.length ? <All.Titulos>Se candidate à uma das viagens</All.Titulos> : <All.Titulos>Não há viagens cadastradas</All.Titulos>}
            <All.ListTrips>
                {listaViagem}
            </All.ListTrips>
        </div>
    )
}