import React from 'react';
import {useHistory} from "react-router-dom";
import { goToCadastro } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user';

const LoginForm = () => {
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    const [form, onChange, clear] = useForm({email:'', password:''})

    

    return (
        <form   onSubmit={onSubmitForm} 
                >
            <TextField    
                margin='normal'
                label="E-mail"
                variant="outlined"
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={'email'}
                />
            <TextField        
                margin='normal'
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name={"password"}
                value={form.password}
                onChange={onChange}
                required
                />
                <Button
                    type={'submit'}
                    style={{margin:'10px'}} 
                    variant="contained" color="primary"
                    // onClick={onSubmitForm}
                    >
                        Entrar 
                </Button>
                <Button 
                    style={{margin:'10px'}}
                    variant={'text'}
                    onClick={()=>goToCadastro(history)}
                    >
                        Não tem cadastro? Cadastre-se!</Button>
        </form>
    )
}
export default LoginForm