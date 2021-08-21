import React, { useState } from  "react";
import * as All from '../Styles.js'

export const CardCandidatosPendentes = (props) => {



    return (

 <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.nome}</h5>
                <p class="card-text">{props.texto}</p>
            </div>
            <ui class="list-group list-group-flush" >
                <li class="list-group-item">Profissão: {props.profissao}</li>
                <li class="list-group-item">Idade: {props.idade} anos</li>
                <li class="list-group-item">Pais: {props.pais}</li>
            </ui>
            {props.tela === 'adminHomePage' ?
                <All.BotoesEmGrupo class="form-check">
                    <button id={props.id} onClick={props.goToTripDetail}  href="#" class="btn btn-primary">Detalhe</button>
                    <button id={props.id} href="#" class="btn btn-danger">Excluir</button>
                </All.BotoesEmGrupo> :
                <All.BotoesEmGrupo class="form-check">
                    <button id={props.id} onClick={props.goBack} href="#" class="btn btn-success">Aprovar</button>
            </All.BotoesEmGrupo>
            }
      </div>             
        
    )
}