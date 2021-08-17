import React from  "react";
import { useHistory } from "react-router-dom";

export const FazerInscricao =  () => {

    const history = useHistory();

    const voltar = () => {
        history.goBack();
      };

    return (
        <div>
            <p>Fazer Inscrição</p>
            <button onClick={voltar}>Voltar</button>
            <button >Enviar</button>
        </div>
    )
}