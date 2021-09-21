import React, { useEffect, useState } from  "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { CardViagens } from "./Cards/CardViagens";
import * as All from './Styles'
import { CardCandidatosPendentes } from "./Cards/CardCandidatosPendentes";


export const TripDetailsPage =  () => {
    useEffect(() => {
        getDetail()
    }, [])
    const history = useHistory();
    const params = useParams();

    const [viagem, setViagem] = useState({})
    const [candidatos, setCandidatos] = useState([])
    const [aprovados, setAprovados] = useState([])

    

    const getDetail = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trip/${params.id}`
        const headers = {
            headers: {
                auth: localStorage.getItem('token') 
            }
        }
        
        axios.get(url, headers)
            .then((res) => {
                
                setViagem(res.data.trip)
                setCandidatos(res.data.trip.candidates)
                setAprovados(res.data.trip.approved)
            })
            .catch((err) => {
                alert('Ocorreu um erro ao ler dados!')
            }) 
    }

    const goBack = () => {
        history.goBack();
      };

    const ListaPendentes = candidatos.map((candidato) => {
        return <div>
            <CardCandidatosPendentes
                id={candidato.id}
                texto={candidato.applicationText}
                profissao={candidato.profession}
                idade={candidato.age}
                nome={candidato.name}
                pais={candidato.country}
            >

            </CardCandidatosPendentes>
        </div>
    })

    return (
        
        <All.Centro>
            <All.Sombra>
            <h3>Detalhe Viagem</h3>
            <CardViagens
                id={viagem.id}
                nome={viagem.name}
                planeta={viagem.planet}
                descricao={viagem.description}
                duracao={viagem.durationInDays}
                data={viagem.date}
                goBack={goBack}
                tela='tripDetailPage'
            ></CardViagens>
            </All.Sombra>
            <All.Sombra>
                <h3>Candidatos Pendentes</h3>
                {ListaPendentes}
            </All.Sombra>
        </All.Centro>
    )
}