import axios from 'axios';
import { useRequestData } from '../hooks/useRequestData';

const axiosGet = async (url) => {
    let response;
    let error;
    try {
        const { data } = await axios.get(url);
        response = data;
    } catch(e) {
        error = e;
    }
    return {
        response,
        error
    }
}

export const getRestaurants = () => axiosGet('http://challange.goomer.com.br/restaurants');
export const getMenu = (id) => axiosGet(`http://challange.goomer.com.br/restaurants/${id}/menu`);