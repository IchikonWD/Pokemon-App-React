import React, { useContext } from "react";
import Card from "../Card";
import { PokemonContext } from "../../Contexts/pokemonContext";

const Search = () => {
  const { pokemon } = useContext(PokemonContext);

  const saveContext = () => {
    localStorage.setItem("pokemonContext", JSON.stringify(pokemon));
  };

  return (
    <div className="home">
      <div className="home__container__top">
        <h1 className="home__title">PokePC</h1>
        <span>Here we save the Pokemons you found.</span>
      </div>
      <div className="home__container__bottom">
        <p>Open the Pokeballs to look at them.</p>
      </div>
      <div className="home__cards">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {pokemon.length > 0 ? (
        <div className="text__bottom">
          <span>Save your pokemons for later &nbsp;</span>
          <button onClick={saveContext}>
            <i className="fa fa-save icon"></i>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
