import { useEffect, useState } from "react"
import { RestaurantCard } from "../../components";
import { useRequestData } from "../../hooks/useRequestData";
import { getRestaurants } from "../../utils/api";

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        const fetch = async () => { 
            const {result, error} = await getRestaurants();
            if(!error){
                setRestaurants(result)
            } else {
                console.log('error', error);
            }
        }
        fetch()
    }, [])

    return (
        <>
            <h1>HomePage</h1>
            {restaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} 
                                name={restaurant.name}
                                address={restaurant.address} />
                                ))
            }
    
        
        </>
        
    )
}