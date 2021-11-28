import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 97vw;
    height: 97vh;
    margin: auto auto;
`

export const BackImgContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
`
export const SelectContainers = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    width: 450px;
    padding: 50px;
`
export const Select = styled.select`
    padding: 5px;
    border: none;
    height: 40px;
    outline: 0;
    border-radius: 5px;
    background-color: #fff;
    font-size: 1em;
`
export const TrevoStyle = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50px;
`
export const TextoTrevoStyle = styled.h1`
    color: white;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 100px;
    
`
export const textoStyle = styled.h1`
    width: 200px;
    height: 50px;

`;

export const ResultMainContainer = styled.div`
    
    position: absolute;
    left: 50%; 
    top: 40%;
    height: 300px;
    
`
export const BallStyle = styled.p`
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 20px;
        
    >p{
        display: flex;
        margin-right: 20px;
        border-radius: 50%;
        background-color: white;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    

`
export const ConcursoStyle = styled.div`
    position: absolute;
    top: 80%;
    left: 50px;
    width: 200px;
    color: white;
    text-align: left;
`