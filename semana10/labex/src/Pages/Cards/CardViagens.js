import React, { useState } from  "react";


export const CardViagens = (props) => {
    
    
    const listagemPlanetas = props.listaPlanetas.map((planeta) => {
        return (
            <option value={planeta}>{planeta}</option>
        )
    })



    return (
        
            <div class="card" >
            <div class="card-body">

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nome</span>
                    <input 
                        value={props.nome}
                        onChange={props.onChangeNome}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                <select 
                    onClick={props.onClickPLaneta}
                    class="form-select" aria-label="Default select example">
                    <option selected>Planeta</option>
                    {listagemPlanetas}
                </select>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Data</span>
                    <input 
                        value={props.data} onChange={props.onChangeData()}
                        type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Descrição</span>
                    <input 
                        value={props.descricao} onChange={props.onChangeDescricao}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Duração em dias</span>
                    <input 
                        value={props.duracao} onChange={props.onChangeDuracao}
                        type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
            </div>
            
        
    )
}