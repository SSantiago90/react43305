import React, { useState, useEffect } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [searchId, setSearchId] = useState(null);

  console.log(searchId);

  // 1. fetch a la API -> recibir los datos
  // 1.1 llamar a Fetch dentro de un useEffect()
  // 2. Almacenar la respuesta de la API -> estado
  // 3. Iterar y mostrar el contenido del array con .map

  useEffect(() => {
    async function readAPI() {
      try {
        if (searchId) {
          const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${searchId - 1}`
          );
          const jsonData = await respuesta.json();
          const pokemonsData = jsonData.results;
          setPokemons(pokemonsData);
          console.log(pokemonsData);
        } else {
          const respuesta = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=50"
          );
          const jsonData = await respuesta.json();
          const pokemonsData = jsonData.results;
          setPokemons(pokemonsData);
          console.log(pokemonsData);
        }
      } catch (err) {
        console.log("ERROR de id", err);
      }
    }

    if (isNaN(searchId) || searchId > 1240) {
      setSearchId(1);
      alert("Error buscando ese id");
    }

    readAPI();
  }, [searchId]);

  function handleSearch(event) {
    setSearchId(parseInt(event.target.value));
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input
        onChange={handleSearch}
        type="number"
        min={1}
        max={1200}
        placeholder="pokemon num"
      />
      <div className="pokegallery">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div>
        <h3>{props.name}</h3>
        <a href={props.url}>Ver Detalles</a>
      </div>
    </div>
  );
}

export default Pokedex;
