import React, { useState } from  "react";
import { useHistory } from "react-router-dom";
import * as All from './Styles.js'
import axios from "axios";

export const LoginPage =  () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
      };

    const goToAdminHome = () => {
        history.replace('/admin/trips/list')
    }

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }
    const onSubmitLogin = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/samyr-hissa-lovelace/login'
        const body = {
            email: email,
            password: senha
        }
        email !== '' && senha !== '' ?
        axios.post(url, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.replace('/admin/trips/list')
            })
            .catch((err) => {
                
                // alert('Ocorreu um erro ao carregar dados!')
            }) : alert('Preencha os campos Email e Senha!')
    }

    return (
        <All.TelaLogin>
            <All.Titulos>Faça o Login</All.Titulos>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
                    onChange={onChangeEmail}
                    value={email}
                />
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                    onChange={onChangeSenha}
                    value={senha}
                />
                <label for="floatingPassword">Senha</label>
            </div>

            <All.SessaoMedial>
                <button onClick={goBack} type="button" class="btn btn-secondary">Voltar</button>
                <button onClick={onSubmitLogin} type="button" class="btn btn-primary">Entrar</button>
            </All.SessaoMedial>
        </All.TelaLogin>
    )
}