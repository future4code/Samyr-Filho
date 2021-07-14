import React from "react";
import styled from 'styled-components';
import iconeEmail from '../../img/icone-email.png';

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
        margin-left: 3px;
    }
    p{
        margin-left: 3px;
    }
`;

const CardEmail = (props) => {
    return (
        <BordaCard>
            <img src={iconeEmail} />
        
        <div>
            <h4>E-mail:</h4>
            <p>{props.email}</p>
            
        </div>
        </BordaCard>
    );
};

export default CardEmail;