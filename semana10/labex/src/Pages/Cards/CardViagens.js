import React, { useState } from  "react";
import * as All from '../Styles.js'

// const listaPlanetas = [
//     'Mercurio', 'Vênus', 'Terra', 'Marte', 'Júpter',
//     'Saturno', 'Urano', 'Netuno', 'Plutão'
// ]
export const CardViagens = (props) => {



    return (

 <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.nome}</h5>
                <p class="card-text">{props.descricao}</p>
            </div>
            <ui class="list-group list-group-flush" >
                <li class="list-group-item">Planeta: {props.planeta}</li>
                <li class="list-group-item">Data: {props.data}</li>
                <li class="list-group-item">Duração: {props.duracao} dias</li>
            </ui>
            {props.tela === 'adminHomePage' ?
                <All.BotoesEmGrupo class="form-check">
                    <button id={props.id} onClick={props.goToTripDetail}  href="#" class="btn btn-primary">Detalhe</button>
                    <button id={props.id} href="#" class="btn btn-danger">Excluir</button>
                </All.BotoesEmGrupo> :
                <All.BotoesEmGrupo class="form-check">
                    <button id={props.id} onClick={props.goBack} href="#" class="btn btn-danger">Voltar</button>
            </All.BotoesEmGrupo>
            }
      </div> 





            
        
    )
}