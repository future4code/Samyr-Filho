import { useLayoutEffect } from 'react'
import {useHistory} from "react-router-dom"
import { goToHomePage } from '../routes/coordinator'

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token){
            goToHomePage(history)

        }
    }, [history])
}
export default useProtectedPage