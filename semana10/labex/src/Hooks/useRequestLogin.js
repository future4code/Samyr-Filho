import { useEffect, useState } from  "react";
import axios from "axios";


export const useRequestLogin = (url, body) => {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.post(url, body)
            .then((res) => {
            })
            .catch((err) => {
            });
    }, []);
    return data
}