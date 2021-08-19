import { useEffect, useState } from  "react";
import axios from "axios";


export const useRequestLogin = (url, body) => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.post(url, body)
            .then((res) => {
                // setData(res.data)
                console.log('login', res.data)
            })
            .catch((err) => {
                // alert('Ocorreu um erro ao carregar dados!')
                console.log('erro', err.response)
            });
    }, []);
    return data
}