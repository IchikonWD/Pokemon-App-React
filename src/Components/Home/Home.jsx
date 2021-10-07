import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../Form";
import Card from "../Card";
import { PokemonContext } from "../../Contexts/pokemonContext";

const Home = () => {
  const { pokemon } = useContext(PokemonContext);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__top">
          <h1 className="home__title">Pokedex</h1>
          <p>Welcome to PokeApp!</p>
          <span>Find the info of your favorite pokemon in our app</span>
          <p>Simply type the name or the Pokedex index</p>
          <Form />
        </div>
        <div className="home__container__bottom">
          <p>Your new Pokemon is waiting for you!!</p>
        </div>
      </div>
      <div className="home__cards">
        {/* Select only the last pokemon in the array */}
        {pokemon.slice(-1).map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {pokemon.length > 0 ? (
        <div className="text__bottom">
          <span>Take a look at all your Pokemons: &nbsp;</span>
          <Link to="/pokepc">
            <i className="fa fa-desktop icon"></i>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
