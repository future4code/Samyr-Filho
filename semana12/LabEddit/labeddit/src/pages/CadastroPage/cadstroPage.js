import React from "react"
import {useHistory} from "react-router-dom";
import { goToHomePage } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
const Cadastro = () => {
    const history = useHistory()
    const onSubmitForm = (event) => {
        console.log(form);
        event.preventDefault()
    }
    const [form, onChange, clear] = useForm({username: '', email:'', password:''})

    return (
        <form   onSubmit={onSubmitForm}
                style={{display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    margin:'20% auto',
                    border: '1px solid black',
                    width: '300px',
                    borderRadius: '15px'
                    }}
        >
           <TextField
                style={{margin:'10px', width:'200px'}}
                id="filled-disabled"
                label="Usuário"
                defaultValue=""
                variant="outlined"
                name={"username"}
                value={form.username}
                onChange={onChange}
                required
            />
            <TextField
                style={{margin:'10px', width:'200px'}}
                id="filled-disabled"
                label="E-mail"
                defaultValue=""
                variant="outlined"
                name={"email"}
                value={form.email}
                onChange={onChange}
                required
                type={'email'}
            />
            <TextField
                style={{margin:'10px', width:'200px'}}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name={"password"}
                value={form.password}
                onChange={onChange}
                required
                type={'password'}
            />
                <Button 
                    type={'submit'}
                    style={{margin:'10px'}}
                    variant="contained" color="primary"
                    // onClick={}
                >Criar</Button>
                <Button style={{margin:'10px'}} 
                    variant={'text'}
                    onClick={()=>goToHomePage(history)}
                >Já tem conta. Faça Login!</Button>
        </form>
    )
}
export default Cadastro