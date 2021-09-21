
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToFeedPage } from '../routes/coordinator';

export const postPost = (title, history) => {
   const body = {
       title: title,
       body: 'post'
   }
    axios.post(`${BASE_URL}posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res)=>{
            // clear()
            alert(res.data)
            goToFeedPage(history)
        })
        .catch((err)=>{
            alert('Erro na postagem')
            console.log(err)
        })
};
export const postVoteUp = (id, history) => {
    const body =  {
        direction: 1
        }
     axios.post(`${BASE_URL}posts/${id}/votes`, body, {
         headers: {
             Authorization: localStorage.getItem('token')
         }
     })
         .then((res)=>{
            goToFeedPage(history)
         })
         .catch((err)=>{
             alert('Erro no voto posts', err.response)
         })
};

export const postVoteDown = (id, history) => {
    const body =  {
        direction: -1
        }
     axios.put(`${BASE_URL}posts/${id}/votes`, body, {
         headers: {
             Authorization: localStorage.getItem('token')
         }
     })
         .then((res)=>{
            goToFeedPage(history)
         })
         .catch((err)=>{
             alert('Erro no voto posts', err.response)
         })
};
