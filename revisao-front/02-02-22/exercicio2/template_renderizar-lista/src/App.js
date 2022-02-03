import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import CardName from "./components/CardName/index.jsx"

export default function App() {
  const [people, setPeople] = useState([]);
 
  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <CardName name= {item.name} />
    )
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>
    </div>
  );
}
