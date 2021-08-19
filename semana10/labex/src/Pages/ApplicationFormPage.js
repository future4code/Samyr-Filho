import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardInscricao } from "./Cards/CardInscricao.js";

export const ApplicationFormPage =  () => {
    // const listaViagens = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:samyr-hissa-lovelace/trips');
    const listaViagens = [
        {
          "id": "0aQ9retlt9zxpeo40G2M",
          "name": "Multi luau em Jupiter",
          "description": "Noite mágica, com vista para as 69 luas de Jupiter",
          "planet": "Jupiter",
          "durationInDays": 540,
          "date": "21/12/20"
        },
        {
          "id": "HF3V6C2VFWoQ3QUOVJON",
          "name": "Picnic de Inverno em Plutão",
          "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
          "planet": "Plutão",
          "durationInDays": 980,
          "date": "21/12/20"
        },
        {
          "id": "NoIFVcOiSgTKTIPVZwXS",
          "name": "Ano novo em Mercúrio",
          "description": "Venha passar a virada pertinho do Sol!",
          "planet": "Mercúrio",
          "durationInDays": 7,
          "date": "31/12/2019"
        },
        {
          "id": "QuWBcnjEQXAlxjLtAjLS",
          "name": "Surfando em Netuno",
          "description": "Nenhum surfista intergalático pode ficar fora dessa!",
          "planet": "Netuno",
          "durationInDays": 540,
          "date": "21/12/20"
        },
        {
          "id": "vX4GWQtFDENjFEo7EAF1",
          "name": "Festança Marciana",
          "description": "Uma viagem bem legal, na melhor época de marte",
          "planet": "Marte",
          "durationInDays": 228,
          "date": "21/12/21"
        }
      ]
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const [viagemSelecionada, setViagemSelecioanda] = useState('')
    const [inputNome, setInputNome] = useState('')
    const [inputIdade, setInputIdade] = useState('')
    const [inputTexto, setInputTexto] = useState('')
    const [inputProfissao, setInputProfissao] = useState('')
    const [selectPais, setSelectPais] = useState('')
    const enviar = () => {
        console.log('viagem', viagemSelecionada)
    }

    const selecionarViagem = (event) => {
        
        {event.target.value !== '' && setViagemSelecioanda(event.target.value)}
    }

    return (
        <div>
            <All.FazerInsc>
                <All.Titulos>Se candidate à uma das viagens</All.Titulos>
                <CardInscricao 
                    selecionarViagem={(e) => selecionarViagem(e)}
                    lista={listaViagens}
                />
            </All.FazerInsc>
            <All.SessaoSuperior>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={enviar} type="button" class="btn btn-primary">Enviar</button>
            </All.SessaoSuperior>
        </div>
    )
}