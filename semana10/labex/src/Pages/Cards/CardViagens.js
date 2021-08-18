import React from  "react";


export const CardViagens = (props) => {
    return (
        
            <div class="card" >
            <div class="card-body">
                <h5 class="card-title">Nome: {props.nome}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Planeta: {props.planeta}</h6>
                <p class="card-text">Descrição: {props.descricao}</p>
                <p class="card-text">Duração: {props.duracao}</p>
                <p class="card-text">Data: {props.data}</p>
                {/* <a href="#" class="card-link">Card link</a> */}
                {/* <a href="#" class="card-link">Another link</a> */}
            </div>
            </div>
            
        
    )
}