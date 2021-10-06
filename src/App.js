import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { PokemonContext } from "./Contexts/pokemonContext";
import Main from "./Components/Main";
import Header from "./Components/Header";
import "./Styles/styles.scss";

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <PokemonContext.Provider value={{ pokemon, setPokemon }}>
          <Header />
          <Main />
        </PokemonContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
