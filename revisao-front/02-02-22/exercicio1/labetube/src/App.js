import React from "react";
import { CardVideo } from "./components/card-video/CardVideo";
import { ItemLista } from "./components/item-lista/ItemLista";
import "./styles.css";


export default function App() {
  const titulo = "Título do vídeo";


  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <ItemLista />
          <CardVideo reproduzVideo={reproduzVideo} titulo={titulo} />
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
