import React, { useState } from "react";
import logo from '../img/logo.png'
import matchs from '../img/Matchs.png'
import styled from 'styled-components'
import voltar from '../img/Voltar2.png'



const StyleCabecalho = styled.div `
    background-color: bisque;
    height: 5vh;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
    >div{
        cursor: pointer;
        transition: all 0.2s ease 0s;
    }
`
const StyleLogo = styled.img `
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const StyleLista = styled.img `
    height: 40px;
    display: block;
    fill: rgb(117, 49, 146);
`
const CabecalhoPrincipal = (props) => {
    
    return (
        <StyleCabecalho>
            <div>
                {(props.telaAtual === 'Matchs') && <StyleLista src={voltar} onClick={props.mudarTela}></StyleLista>}
            </div>
            <StyleLogo src={logo}></StyleLogo>
            <div>
            {(props.telaAtual === 'Principal') && <StyleLista src={matchs} onClick={props.mudarTela}></StyleLista>}
            </div>
        </StyleCabecalho>
    )
}

export default CabecalhoPrincipal