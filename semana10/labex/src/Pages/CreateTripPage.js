import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CardViagens } from "./Cards/CardViagens.js";
import * as All from './Styles.js'



export const CreateTripPage =  () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const [nome, setNome] = useState('')
    const [planeta, setPlaneta] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [duracao, setDuracao] = useState(0)

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }
    const onClickPLaneta = (event) => {
        setPlaneta(event.target.value)
    }

    const onChangeData = (event) => {
        setData(event.target.value)
    }
    
    const onChangeDescricao = (event) => {
        setDescricao(event.target.value)
    }
    const onChangeDuracao = (event) => {
        setDuracao(event.target.value)
    }

    const onSubmitCriar = () => {
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trips`
        const headers = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }
        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: duracao
        }
        axios.post(url, body, headers)
            .then((res) => {
                // setTrip(res.data.trips)
            })
            .catch((err) => {
                alert('Ocorreu um erro ao carregar a lista de viagens!')
            });
        }
    return (
        <All.Centro>
            <All.PageHome>Criar uma nova viagem</All.PageHome>
            <CardViagens
                nome={nome}
                data={data}
                descricao={descricao}
                duracao={duracao}
                onChangeNome={(e) => onChangeNome(e)}
                onClickPLaneta={(e) => onClickPLaneta(e)}
                onChangeData={(e) => onChangeData(e)}
                onChangeDescricao={(e) => onChangeDescricao(e)}
                onChangeDuracao={(e) => onChangeDuracao(e)}
            >
            </CardViagens>

            <All.SessaoMedial>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={onSubmitCriar} type="button" class="btn btn-primary">Criar</button>
            </All.SessaoMedial>
        </All.Centro>
    )
}