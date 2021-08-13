import React from "react";
import styled from "styled-components";
import Dispensar from '../img/delete.png'
import Matchar from '../img/heart.png'



const StylePrincipal = styled.div `
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: flex-end;
`
const StyleRodape = styled.div `
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
`
const StyleBotoes = styled.img `
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 5px;
    border: 1px solid red;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    cursor: pointer;
`
const StyleCard = styled.div `
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 400px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
    }
`
const StyleDescricao = styled.div `
    position: fixed;
    top: 60%;
    width: 80%;
    margin: 0 5px 0 5px;
    
    h2{
        display: inline;
    }
    h3{
        display: inline;
    }
`
const PaginaMatch = (props) => {
    return (
        <StylePrincipal>
            <StyleCard>
                <img src={props.person.photo} />
                <StyleDescricao>
                    <h2>{props.person.name}, </h2>
                    <h3>{props.person.age}</h3>
                    <h5>{props.person.bio}</h5>
                </StyleDescricao>
            </StyleCard>
            <StyleRodape>
                <StyleBotoes src={Dispensar} onClick={props.naoFazerMatch} />
                <StyleBotoes src={Matchar} onClick={props.fazerMatch} />
            </StyleRodape>
        </StylePrincipal>
    )
}

export default PaginaMatch