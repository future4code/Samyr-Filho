import React from 'react'
import styled from 'styled-components'

const StylePrincipal = styled.div `
    padding: 20px 20px 0px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
`

const StyleLista = styled.ul `
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style-type: none;
    li{
        display: flex;
        align-items: center;
        margin: 5px
    }
    img{
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }
    div{
        display: inline;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

const StyleLimpar = styled.button `
    position: fixed;
    bottom: 5px;
    right: 5px;
    width: 100px;
    height: 35px;
    :hover{
        background-color: azure;
        color: blue;
        border-color: black;
        flood-color: coral;
        stop-color: coral;
        caret-color: coral;
        outline-color: coral;
        lighting-color: coral;
    }
    :active{
        color: coral;
    }
`

const PaginaListaMatch = (props) => {
    const listaMatchs = props.lista.map((person) => {
        return (
            <li key={props.id}>
                <img src={person.photo} alt='Foto da Persona' />
                <div>{person.name}</div>
            </li>
        )
    })
    return (
        <StylePrincipal>
            <StyleLista>
                {listaMatchs}
            </StyleLista>

            <StyleLimpar onClick={props.limpar}>
                Limpar
            </StyleLimpar>
        </StylePrincipal>
    )
}

export default PaginaListaMatch