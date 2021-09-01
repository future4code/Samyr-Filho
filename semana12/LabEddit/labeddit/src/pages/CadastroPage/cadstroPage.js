import React from "react"
import {useHistory} from "react-router-dom";
import { goToCadastro, goToFeedPage, goToPostPage } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
const Cadastro = () => {
    const history = useHistory()


    return (
        <Box style={{display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    margin:'20% auto',
                    border: '1px solid black',
                    width: '300px',
                    borderRadius: '15px'
                    }}
        >   
            <Box style={{display:'flex', flexDirection:'column'}}>
           <TextField
                style={{margin:'10px', width:'200px'}}
                // disabled
                id="filled-disabled"
                label="Usuário"
                defaultValue=""
                variant="filled"
            />
            <TextField
                style={{margin:'10px', width:'200px'}}
                // disabled
                id="filled-disabled"
                label="E-mail"
                defaultValue=""
                variant="filled"
            />
            <TextField
                style={{margin:'10px', width:'200px'}}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
            </Box>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button style={{margin:'10px'}} 
                    onClick={()=>goToFeedPage(history)}
                >Entrar</Button>
                <Button style={{margin:'10px'}}
                    onClick={()=>goToCadastro(history)}
                >Criar Conta</Button>
            </ButtonGroup>   
        </Box>
    )
}
export default Cadastro