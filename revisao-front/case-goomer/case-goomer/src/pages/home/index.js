import { useEffect, useState } from "react"
import { useRequestData } from "../../hooks/useRequestData";
import { getRestaurants } from "../../utils/api";

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        // const fetch = async () => { 
        //     const {response, error} = await getRestaurants();
        //     if(!error){
        //         setRestaurants(response)
        //     } else {
        //         console.log('error', error);
        //     }
        // }
        // fetch()
        const {data} = getRestaurants()
        console.log('data', data);
    }, [])
    return (
        <h1>HomePage</h1>
    )
}