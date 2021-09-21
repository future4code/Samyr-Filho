import { useEffect, useState } from  "react";
import axios from "axios";
export const useRequestListaTrips = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                setData(res.data.trips)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            });
    }
    , [url]);
    return [data, isLoading, error]
}