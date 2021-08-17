import React from  "react";
import { useHistory } from "react-router-dom";

export const Inicial =  () => {

    const history = useHistory();

    const irParaAreaPublica = () => {
        history.push('/AreaPublica')
    }
    const irParaFazerLogin = () => {
        history.push('/FazerLogin')
    }

    return (
        <div>
            <p>Inicial</p>
            <button onClick={irParaAreaPublica}>Ir para a Área Pública</button>
            <button onClick={irParaFazerLogin}>Ir para área Administrativa</button>
        </div>
    )
}