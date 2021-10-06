import React, { useState, useEffect } from "react";
import Form from "../Form";
import Card from "../Card";

const Search = () => {
  const [pokemon, setPokemon] = useState([]);

  const childToParent = async (childdata) => {
    await setPokemon(childdata);
  };

  return (
    <div className="home">
      <Form childToParent={childToParent} />
      <div className="home__cards">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
