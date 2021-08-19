import React from  "react";
// import * as All from './Styles.js'
import { ComboPaises } from "../../Componentes/ComboPaises";





export const CardInscricao = (props) => {
    const ComboViagem = props.lista.map((trip) => {
        return (
                <option value={trip.id} 
                >{trip.name}</option>
        )
    })
    return (
        <div>
            <select class="form-select" aria-label="Default select example" 
            onChange={(e) => props.selecionarViagem(e)} 
            >
                <option value=''>Escolha uma Viagem</option>
                {ComboViagem}
            </select>
            <input placeholder='Nome'></input>
            <input placeholder='Idade'></input>
            <input placeholder='Texto de candidatura'></input>
            <input placeholder='Profissão'></input>
            <ComboPaises></ComboPaises>
        </div>
    )
}