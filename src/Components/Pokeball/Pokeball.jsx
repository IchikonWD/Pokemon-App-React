import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Pokeball(props) {
  const [state, setState] = useState("");
  const [isShaking, setIsShaking] = useState("shaking");
  const [isPokemonShaking, setIsPokemonShaking] = useState("");
  const [pokemonSpecies, setPokemonSpecies] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonFlavour, setPokemonFlavour] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (pokemonName !== "") {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
        const response = await axios.get(url);
        const result = await response.data;
        setPokemonSpecies(result);
      }
    }
    fetchData();
  }, [pokemonName]);

  useEffect(() => {
    if (pokemonSpecies) {
      setPokemonSpecies(pokemonSpecies);
      setPokemonFlavour(pokemonSpecies.flavor_text_entries[9].flavor_text);
    }
  }, [pokemonSpecies]);

  useEffect(() => {
    if (props.value) {
      setPokemonName(props.value.name);
    }
  }, [props.value]);

  const togglePokeball = (e) => {
    e.preventDefault();
    state ? setState("") : setState("open");
    isShaking ? setIsShaking("") : setIsShaking("shaking");
    isPokemonShaking ? setIsPokemonShaking("") : setIsPokemonShaking("shaking");
  };

  const theme = state;
  const themeShake = isShaking;
  const themePokemonShake = isPokemonShaking;

  return pokemonName !== "" ? (
    <div id="pokeball-1" className={`pokeball ${theme} ${themeShake}`}>
      <button id="toggle-button" onClick={togglePokeball}></button>
      <article>
        <img
          className={`pokeball__img ${themePokemonShake}`} 
          src={props.value.sprites.front_default}
          alt={props.value.name}
        />
        <h1>
          <span><Link to={`/pokemon/${props.value.id}`}>{props.value.name}</Link></span>
          <span>Pokedex: #{props.value.id}</span>
        </h1>
        <div className="species">Type: {props.value.types[0].type.name}  {props.value.types.length > 1 ? <span>/ {props.value.types[1].type.name}</span> : null }</div>
        

         <p>{pokemonFlavour}</p>
        <ul>
          <li>
            <label>
              <span>HP</span>
              <span>{props.value.stats[0].base_stat}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="95"
              optimum="150"
              max="255"
              value={props.value.stats[0].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Speed</span>
              <span>{props.value.stats[3].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="50"
              optimum="100"
              max="180"
              value={props.value.stats[3].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Attack</span>
              <span>{props.value.stats[1].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="45"
              optimum="90"
              max="190"
              value={props.value.stats[1].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Defense</span>
              <span>{props.value.stats[2].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="55"
              optimum="110"
              max="230"
              value={props.value.stats[2].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Atk</span>
              <span>{props.value.stats[4].base_stat}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="90"
              optimum="130"
              max="173"
              value={props.value.stats[4].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Def:</span>
              <span>{props.value.stats[5].base_stat}</span>
            </label>
            <meter
              min="20"
              low="55"
              high="100"
              optimum="150"
              max="230"
              value={props.value.stats[5].base_stat}
            ></meter>
          </li>
        </ul>
      </article>
    </div>
  ) : (
    <div></div>
  );
}
