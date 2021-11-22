import { useEffect, useState } from 'react'
import axios from 'axios';

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        // const token = localStorage.getItem("token")
        // const headers = {
        //     headers: {
        //         auth: token
        //     }
        // }

        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                if(error.response){
                    alert(error.response.data.message)
                }
                else{
                    alert('Sem dados iniciais no formulário')
                }
            })

    }, [url])

    return [data, setData]
}
