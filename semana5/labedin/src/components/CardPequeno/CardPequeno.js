import React from "react";
import styled from 'styled-components';
import CardEndereco from "./CardEndereco";
import CardEmail from "./CardEmail";



const BordaCard = styled.div`
    align-items: center;
    border: 1px solid black;
    padding: 10px 5px;
    margin-bottom: 10px;

`;

const CardPequeno = (props) => {
    
    
    return (
      <BordaCard>
            <CardEmail
                email={props.email}
              />
            <CardEndereco
                endereco={props.endereco}
              />
      </BordaCard>
    );
  };

export default CardPequeno;