import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import { CardInscricao } from "./Cards/CardInscricao.js";

export const ApplicationFormPage =  () => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const [selectViagem, setSelectViagem] = useState('')
    const [inputNome, setInputNome] = useState('')
    const [inputIdade, setInputIdade] = useState('')
    const [inputTexto, setInputTexto] = useState('')
    const [inputProfissao, setInputProfissao] = useState('')
    const [selectPais, setSelectPais] = useState('')
    const enviar = () => {

    }

    return (
        <div>
            <All.FazerInsc>
                <All.Titulos>Se candidate à uma das viagens</All.Titulos>
                <CardInscricao 
                    viagem={selectViagem}
                />
            </All.FazerInsc>
            <All.SessaoSuperior>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={enviar} type="button" class="btn btn-primary">Enviar</button>
            </All.SessaoSuperior>
        </div>
    )
}