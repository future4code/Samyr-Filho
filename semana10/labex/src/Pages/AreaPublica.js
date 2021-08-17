import React from  "react";
import { useHistory } from "react-router-dom";

export const AreaPublica =  () => {

    const history = useHistory();

    const irFazerInscricao = () => {
        history.push('/FazerInscricao')
    }

    const voltar = () => {
        history.goBack();
      };

    return (
        <div>
            <p>Área Pública</p>
            <button onClick={voltar}>Voltar</button>
            <button onClick={irFazerInscricao}>Fazer Inscrição</button>
        </div>
    )
}