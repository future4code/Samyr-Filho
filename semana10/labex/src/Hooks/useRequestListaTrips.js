import { useEffect, useState } from  "react";
import axios from "axios";
export const useRequestListaTrips = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data.trips)
            })
            .catch((err) => {
                // console.log('erros', err)
                alert('Ocorreu um erro ao carregar a lista de viagens!')
            });
    }
    , []);
    return data
}