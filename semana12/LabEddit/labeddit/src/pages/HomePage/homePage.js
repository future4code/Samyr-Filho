import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
// import useForm from '../../hooks/useForm'
import LoginForm from './LoginForm'

const HomePage = () => {
    useUnProtectedPage()
    // const [form, onChange, clear] = useForm({email:'', password:''})

    return (
        <div    style={{display:'flex', 
                        flexDirection:'column',
                        textAlign: 'center',
                        margin:'20% auto',
                        border: '1px solid black',
                        width: '300px',
                        borderRadius: '15px'
                        }}
                >
            <LoginForm />
        </div>
    )
}
export default HomePage