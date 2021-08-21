import React, { useEffect, useState } from "react"
import axios from "axios"


export const ComboPaises = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all/')
            .then((res) => {
                setIsLoading(false)
                setData(res.data)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            });
    }, ['https://restcountries.eu/rest/v2/all/']);

    const ListaPaises = data.map((pais) => {
        return <option 
                    value={pais.name}
                    id={pais.name}
                >
                {pais.name}</option>
    })
    return (
        <select 
            onChange={(e) => props.onChangePais(e)}
            name='paises'
            id='paises'
            class="form-select" aria-label="Default select example" >
                 <option value=''>Escolha um país</option>
                {ListaPaises}
        </select>
    )
}