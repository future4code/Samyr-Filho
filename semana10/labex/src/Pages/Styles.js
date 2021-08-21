import styled from "styled-components"

export const Titulos = styled.div `
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const PageHome = styled.div `
    font-size: 30px;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 20px;
`

export const SessaoMedial = styled.div `
    display: flex;
    justify-content: center;
    margin: 10px;
    button{
        margin: 0 20px;
    }
`
export const SessaoSuperior = styled.div `
    display: flex;
    justify-content: center;
    margin: 30px 0 0 0;
    button{
        margin: 0 20px;
    }
`
export const ListTrips = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    li{
        list-style: none;
    margin: 5px 10px;
    width: 60%;
    }
`
export const FazerInsc = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    input{
        display: block;
        margin: 10px;
        width: 400px;
    }
    ;
`

export const TelaLogin = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
`
export const BotoesEmGrupo = styled.div `
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
`
export const Sombra = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 80%;
    a{
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px 0px;
    }
`
export const Centro = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const Lista = styled.ul `
    li{
        list-style: none;
    }
`