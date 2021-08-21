import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardInscricao } from "./Cards/CardInscricao.js";
import { useRequestListaTrips } from "../Hooks/useRequestListaTrips.js";
import axios from "axios";

export const ApplicationFormPage =  () => {
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trips'
    
  const [trip, isLoading, error] = useRequestListaTrips(url);
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const [viagemSelecionada, setViagemSelecioanda] = useState('')
    const [inputNome, setInputNome] = useState('')
    const [inputIdade, setInputIdade] = useState(0)
    const [inputTexto, setInputTexto] = useState('')
    const [inputProfissao, setInputProfissao] = useState('')
    const [pais, setPais] = useState('')

    const enviar = () => {
      const body = {
        name: inputNome,
        age: inputIdade,
        applicationText: inputTexto,
        profession: inputProfissao,
        country: pais
      }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/trips/${viagemSelecionada}/apply`
        
        inputNome !== '' && inputIdade !== 0 && inputTexto !== '' && inputProfissao !== '' && pais !== '' ?
        axios.post(url, body)
            .then((res) => {
            })
            .catch((err) => {
            }) : alert('Preencha os campos Email e Senha!')

    }

    const onChangeViagem = () => {

      const select = document.getElementById("planeta");
      const idPlaneta = select.options[select.selectedIndex].id;
        {idPlaneta !== '' && setViagemSelecioanda(idPlaneta)}
    }
    const onChangePais = () => {
      const select = document.getElementById("paises");
      const namePais = select.options[select.selectedIndex].id;
      {namePais !== '' && setPais(namePais)}
    }
    const onChangeNome = (e) => {
        setInputNome(e.target.value)
    }
    const onChangeIdade = (e) => {
      setInputIdade(e.target.value)
    }
    const onChangeTexto = (e) => {
      setInputTexto(e.target.value)
    }
    const onChangeProfissao = (e) => {
      setInputProfissao(e.target.value)
    } 

    return (
        <div>
            <All.FazerInsc>
                <All.Titulos>Se candidate à uma das viagens</All.Titulos>
                <CardInscricao 
                    onChangeViagem={onChangeViagem}
                    lista={trip}
                    enviar={(e) => enviar(e)}
                    onChangePais={onChangePais}
                    onChangeNome={onChangeNome}
                    onChangeIdade={onChangeIdade}
                    onChangeTexto={onChangeTexto}
                    onChangeProfissao={onChangeProfissao}
                    pais={pais}
                    nome={inputNome}
                    idade={inputIdade}
                    texto={inputTexto}
                    profissao={inputProfissao}

                />
            </All.FazerInsc>
            <All.SessaoSuperior>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={enviar} type="button" class="btn btn-primary">Enviar</button>
            </All.SessaoSuperior>
        </div>
    )
}