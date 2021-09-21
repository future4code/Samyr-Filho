import { useLayoutEffect } from 'react'
import {useHistory} from "react-router-dom"
import { goToFeedPage } from '../routes/coordinator'

const useUnProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            goToFeedPage(history)
        }
    }, [history])
}
export default useUnProtectedPage