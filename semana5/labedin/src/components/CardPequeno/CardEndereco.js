import React from "react";
import styled from 'styled-components';
import iconeEndereco from '../../img/icone-endereco.png';

const BordaCard = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid black; */
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
    img{
        width: 50px;
        height: 50px;
        
    }
    div {
        display: flex;
        align-items: center;
    }
    p{
        margin-left: 3px;
    }
`;

const CardEndereco = (props) => {
    return (
        <BordaCard>
            <img src={iconeEndereco} />
        
            <div>
                <h4>Endereço:</h4>
                <p>{props.endereco}</p>
                
            </div>
        </BordaCard>
    );
};

export default CardEndereco;