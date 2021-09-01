import React from 'react';
import {useHistory} from "react-router-dom";
import { goToCadastro, goToFeedPage } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import LoginForm from './LoginForm'

const HomePage = () => {
    const history = useHistory()
    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const [form, onChange, clear] = useForm({email:'', password:''})

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