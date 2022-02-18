import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import { CardPeople } from "./components/CardPeople/CardPeople";
import { CardName } from "./components/CardName";

export default function App() {
  const [people, setPeople] = useState([]);
  const [peopleSelected, setPeopleSelected] = useState()
 
  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return(
      <CardName people={item} key={item.name} onClick={(people)=>selectPeople(people)} />
    )
  });

  const selectPeople = (people) => {
    setPeopleSelected(people)
  }

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>
          {lista}
        </ul>
      </div>
      {peopleSelected ? <CardPeople people={peopleSelected}/> : <></>}
    </div>
  );
}
