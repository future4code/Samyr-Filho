import React from 'react';
import Header from '../../components/header';
import {useHistory} from "react-router-dom";
import { goToCadastro, goToFeedPage } from '../../routes/coordinator';

const HomePage = () => {
    const history = useHistory()


    return (
        <div>
            <Header></Header>
            <div>
                <p>Home</p>
                <div>
                    <p>Email</p>
                    <input>
                    </input>
                </div>
                <div>
                    <p>senha</p>
                    <input>
                    </input>
                </div>
                <button onClick={() => goToFeedPage(history)}>
                    Entrar
                </button>
                <a onClick={() => goToCadastro(history)}>Criar Conta</a>
            </div>
        </div>
    )
}
export default HomePage