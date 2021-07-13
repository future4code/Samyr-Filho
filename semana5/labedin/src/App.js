import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './img/perfil2.jpg';
import logo1 from './img/logo-UGF.PNG';
import logo2 from './img/logo-carioca.PNG';
import logo3 from './img/logo-encol.PNG';
import logo4 from './img/logo-RJR.PNG';
import logo5 from './img/logo-candido.PNG';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Samyr Chiade Hissa Filho" 
          descricao="Olá! Eu sou Samyr, sou estudante da Labenu no curso Full Stack e com pretensões de pertencer a uma grande empresa no ramao de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          
          email={"samyr@schissa.com.br"}
          endereco={"Rua Cel.Francisco Manhães, 50, 701 - Campos - RJ"}
        />

        <CardPequeno 
          
          email={"samyr@gmail.com.br"}
          endereco={"Rua Ouvidor, 450 - Campos - RJ"}
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logo1} 
          nome="Universidade Gama Filho" 
          descricao="Formado em Engenharia Civil no ano de 1990" 
        />

        <CardGrande 
          imagem={logo5} 
          nome="Universidade Candido Mendes" 
          descricao="Pós graduação Lato-Senso em análise de sistemas no ano de 2000" 
        />

        <CardGrande 
          imagem={logo2} 
          nome="Carioca Engenharia" 
          descricao="Estagiário atuando na urbanização de diversos morros cariocas entre os anos de 1988 e 1990" 
        />
        
        <CardGrande 
          imagem={logo3} 
          nome="Encol Engenharia" 
          descricao="Engenheiro Junior atuando no planejamento e acompanhamento das obras de construção em três torres de apartamentos entre os anos 1990 e 1991" 
        />

        <CardGrande 
          imagem={logo4} 
          nome="RJR Engenharia  e Construções Ltda." 
          descricao="Diretor Técnico entre os anos de 1992 e 2003" 
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
