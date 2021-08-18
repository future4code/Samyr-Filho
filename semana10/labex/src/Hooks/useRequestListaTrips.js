import { useEffect, useState } from  "react";
import axios from "axios";
export const useRequestData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data.trips)
            })
            .catch((err) => {
                alert('Ocorreu um erro ao carregar a lista de viagens!')
            });
    }, []);
    return data
}