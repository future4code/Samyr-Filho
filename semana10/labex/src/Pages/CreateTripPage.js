import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CardViagens } from "./Cards/CardViagens.js";
import * as All from './Styles.js'

const listaPlanetas = [
    'Mercurio', 'Vênus', 'Terra', 'Marte', 'Júpter',
    'Saturno', 'Urano', 'Netuno', 'Plutão'
]

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

    const onChangeNome = () => {
        setNome(nome)
    }
    const onClickPLaneta = (event) => {
        setPlaneta(event.target.value)
    }
    const onChangeData = () => {
        setData(data)
    }
    const onChangeDescricao = () => {
        setDescricao(descricao)
    }
    const onChangeDuracao = () => {
        setDuracao(duracao)
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
        axios.post(url)
            .then((res) => {
                console.log('lisssta', res.data)
                // setTrip(res.data.trips)
            })
            .catch((err) => {
                // setTrip([])
                alert('Ocorreu um erro ao carregar a lista de viagens!')
            });
        }


        const listagemPlanetas = listaPlanetas.map((planeta) => {
            return (
                <option value={planeta}>{planeta}</option>
            )
        })
    return (
        <All.Centro>
            <All.PageHome>Criar uma nova viagem</All.PageHome>
            {/* <CardViagens
                nome={nome}
                listaPlanetas={listaPlanetas}
                data={data}
                descricao={descricao}
                duracao={duracao}
                onChangeNome={onChangeNome}
                onClickPLaneta={(e) => onClickPLaneta(e)}
                onChangeData={onChangeData}
                onChangeDescricao={onChangeDescricao}
                onChangeDuracao={onChangeDuracao}
            >
            </CardViagens> */}


            <div class="card" >
            <div class="card-body">

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nome</span>
                    <input 
                        value={nome}
                        onChange={onChangeNome}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                <select 
                    onClick={onClickPLaneta}
                    class="form-select" aria-label="Default select example">
                    <option selected>Planeta</option>
                    {listagemPlanetas}
                </select>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Data</span>
                    <input 
                        value={data} onChange={onChangeData}
                        type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Descrição</span>
                    <input 
                        value={descricao} onChange={onChangeDescricao}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Duração em dias</span>
                    <input 
                        value={duracao} onChange={onChangeDuracao}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
            </div>

            <All.SessaoMedial>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={onSubmitCriar} type="button" class="btn btn-primary">Criar</button>
            </All.SessaoMedial>
        </All.Centro>
    )
}