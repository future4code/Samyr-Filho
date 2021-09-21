import React, { useEffect, useState } from "react"
import axios from "axios"


export const ComboViagens = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all/')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
            });
    }, []);

    const ListaPaises = data.map((pais) => {
        return <option value={pais.name}>{pais.name}</option>
    })
    return (
        <select class="form-select" aria-label="Default select example">
            {ListaPaises}
        </select>
    )
}