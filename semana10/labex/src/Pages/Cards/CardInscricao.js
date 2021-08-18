import React from  "react";
// import * as All from './Styles.js'
import { ComboPaises } from "../../Componentes/ComboPaises";


const ComboViagem = () => {
    return (
        <select class="form-select" aria-label="Default select example">
            <option selected>Escolha uma Viagem</option>
            <option value="1">Viagem 1</option>
            <option value="2">Viagem 2</option>
            <option value="3">Viagem 3</option>
        </select>
    )
}


export const CardInscricao = () => {
    return (
        <div>
            <ComboViagem></ComboViagem>
            <input placeholder='Nome'></input>
            <input placeholder='Idade'></input>
            <input placeholder='Texto de candidatura'></input>
            <input placeholder='Profissão'></input>
            <ComboPaises></ComboPaises>
        </div>
    )
}