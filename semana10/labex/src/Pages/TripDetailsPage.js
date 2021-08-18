import React from  "react";
import { useHistory, useParams } from "react-router-dom";

export const TripDetailsPage =  () => {
    const history = useHistory();
    const params = useParams();

    // const idTrip = params.id
    console.log('id', params)

    const goBack = () => {
        history.goBack();
      };

    return (
        <div>
            <p>Detalhe Viagem</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}