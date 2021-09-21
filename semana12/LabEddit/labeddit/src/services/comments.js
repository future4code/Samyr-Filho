
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const postCommnet = (comment, clear, id) => {
    const body = {
        body: comment
    }
     axios.post(`${BASE_URL}posts/${id}/comments`, body, {
         headers: {
             Authorization: localStorage.getItem('token')
         }
     })
         .then((res)=>{
            //  clear()
         })
         .catch((err)=>{
             alert('Erro na postagem', err.response)
         })
};

export const commentVoteUp = (id) => {
    const body =  {
        direction: 1
        }
    
     axios.post(`${BASE_URL}comments/${id}/votes`, body, {
         headers: {
             Authorization: localStorage.getItem('token')
         }
     })
         .then((res)=>{
         })
         .catch((err)=>{
             alert('Erro no voto coments', err.response)
         })
};

export const commentVoteDown = (id) => {
    const body =  {
        direction: -1
        }
    
     axios.put(`${BASE_URL}comments/${id}/votes`, body, {
         headers: {
             Authorization: localStorage.getItem('token')
         }
     })
         .then((res)=>{
         })
         .catch((err)=>{
             alert('Erro no voto coments', err.response)
         })
};