import React, { useContext } from "react";
import Form from "../Form";
import Card from "../Card";
import { PokemonContext } from "../../Contexts/pokemonContext";

const Search = () => {
  const { pokemon } = useContext(PokemonContext);

  return (
    <div className="home">
      <Form />
      <div className="home__cards">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
