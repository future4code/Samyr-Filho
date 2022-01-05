import React from "react";
import { MainContainer } from "./styles";

const Header =()=>{
    return (
        <MainContainer>
            <link rel="stylesheet" type="text/css"  href="estilo.css" />
           <nav class="navbar navbar-expand-lg navbar-light bg-info" style={{justifyContent: "space-around"}}>
                
                    <h3>Promobit</h3>
                    
            </nav>
            
        </MainContainer>

    )
}
export default Header