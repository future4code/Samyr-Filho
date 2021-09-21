
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeedPage } from '../routes/coordinator';

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}users/login`, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err)=>{
            alert('Erro no Login')
        })
}

export const signup = (body, clear, history) => {
    axios.post(`${BASE_URL}users/signup`, body)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err)=>{
            alert('Erro no Login')
        })
}