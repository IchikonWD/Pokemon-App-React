import React, { useState, useEffect } from "react";
import Form from "../Form";
import Card from "../Card";

const Search = () => {
  const [data, setData] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const childToParent = async (childdata) => {
    await setData(childdata);
  };

  useEffect(() => {
    if (data) {
      setPokemon([...pokemon, data]);
    }
  }, [data]);

  useEffect(() => {
    if (pokemon) {
      const uniqueArray = Array.from(new Set(pokemon.map((a) => a.id))).map(
        (id) => {
          return pokemon.find((a) => a.id === id);
        }
      );
      setFilteredPokemon(uniqueArray);
    }
  }, [pokemon]);

  return (
    <div className="home">
      <Form childToParent={childToParent} />
      <div className="home__cards">
        {filteredPokemon.map((filteredPokemon) => (
          <Card key={filteredPokemon.name} pokemon={filteredPokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
