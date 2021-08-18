import React from  "react";
import { useHistory } from "react-router-dom";

export const LoginPage =  () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const goToAdminHome = () => {
        history.replace('/admin/trips/list')
    }

    return (
        <div>
            <p>Fazer Login</p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdminHome}>Entrar</button>
        </div>
    )
}