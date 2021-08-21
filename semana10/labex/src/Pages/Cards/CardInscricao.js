import React from  "react";
import * as All from '../Styles.js'
import { ComboPaises } from "../../Componentes/ComboPaises";





export const CardInscricao = (props) => {
    const ComboViagem = props.lista.map((trip) => {
        return (
                <option 
                    value={trip.name} 
                    id={trip.id}
                >{trip.name}</option>
        )
    })
    return (
        <All.Centro>
            <div class="card" >
            <div class="card-body">

                <select class="form-select" aria-label="Default select example" 
                onChange={(e) => props.onChangeViagem(e)} 
                id='planeta' name='planeta'
                >
                    <option value=''>Escolha uma Viagem</option>
                    {ComboViagem}
                </select>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nome</span>
                    <input 
                        value={props.nome} onChange={props.onChangeNome}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Idade</span>
                    <input 
                        value={props.idade} onChange={props.onChangeIdade}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Texto de Candidatura</span>
                    <input 
                        value={props.texto} onChange={props.onChangeTexto}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Profissão</span>
                    <input 
                        value={props.profissao} onChange={props.onChangeProfissao}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">País</span>
                    <ComboPaises
                        onChangePais={(e) => props.onChangePais(e)}
                    ></ComboPaises>
                </div>
            </div>
        </div>
        </All.Centro>
    )
}