import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles.css"
import PokeCard from './components/PokeCard/index';


export default function App() {
  
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState('');
  
  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  },[])
  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}


