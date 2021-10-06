import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import New from "../New";
import Search from "../Search";
import Details from "../Details";
import { PokemonContext } from "../../Contexts/pokemonContext";

const Main = () => {
  const { pokemon } = React.useContext(PokemonContext);
  const pokeID = pokemon.id;
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new" component={New} />
        <Route path="/search" component={Search} />
        <Route path={`/pokemon/:${pokeID}`} component={Details} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
