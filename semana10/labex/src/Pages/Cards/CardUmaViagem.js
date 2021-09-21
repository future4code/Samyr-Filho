import React, { useState } from  "react";

export const CardUmaViagem = (props) => {
    
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.nome}</h5>
                <p class="card-text">{props.descricao}</p>
            </div>
            <ul class="list-group list-group-flush" >
                <li class="list-group-item">Planeta: {props.planeta}</li>
                <li class="list-group-item">Data: {props.data}</li>
                <li class="list-group-item">Duração: {props.duracao} dias</li>
            </ul>
      </div>
    )
}