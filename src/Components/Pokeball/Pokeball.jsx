import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokeball(props) {
  const [state, setState] = useState("");
  const [isShaking, setIsShaking] = useState("shaking");
  const [pokemon, setPokemon] = useState("");
  const [pokemonSpecies, setPokemonSpecies] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonHp, setPokemonHp] = useState("");
  const [pokemonAttack, setPokemonAttack] = useState("");
  const [pokemonDefense, setPokemonDefense] = useState("");
  const [pokemonSpeed, setPokemonSpeed] = useState("");
  const [pokemonSpAttack, setPokeSpAttack] = useState("");
  const [pokemonSpDefense, setPokeSpDefense] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonFlavour, setPokemonFlavour] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (pokemonName !== "") {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
        const response = await axios.get(url);
        const result = response.data;
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
      setPokemon(props.value);
      setPokemonName(props.value.name);
      setPokemonImage(props.value.sprites.front_default);
      setPokemonType(props.value.types[0].type.name);
      setPokemonHp(props.value.stats[0].base_stat);
      setPokemonAttack(props.value.stats[1].base_stat);
      setPokemonDefense(props.value.stats[2].base_stat);
      setPokemonSpeed(props.value.stats[3].base_stat);
      setPokeSpAttack(props.value.stats[4].base_stat);
      setPokeSpDefense(props.value.stats[5].base_stat);
      setPokemonId(props.value.id);
    }
  }, [props.value]);

  const togglePokeball = (e) => {
    e.preventDefault();
    state ? setState("") : setState("open");
    isShaking ? setIsShaking("") : setIsShaking("shaking");
  };

  const theme = state;
  const themeShake = isShaking;

  return pokemonName !== "" ? (
    <div id="pokeball-1" className={`pokeball ${theme} ${themeShake}`}>
      <button id="toggle-button" onClick={togglePokeball}></button>
      <article>
        <img className="pokeball__img" src={pokemonImage} alt={pokemonName} />
        <h1>
          <span>{pokemonName}</span>
          <span>Pokedex: #{pokemonId}</span>
        </h1>
        <div className="species">{pokemonType}</div>
        <p>{pokemonFlavour}</p>
        <ul>
          <li>
            <label>
              <span>HP</span>
              <span>{pokemonHp}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="95"
              optimum="150"
              max="255"
              value={pokemonHp}
            ></meter>
          </li>
          <li>
            <label>
              <span>Speed</span>
              <span>{pokemonSpeed}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="50"
              optimum="100"
              max="180"
              value={pokemonSpeed}
            ></meter>
          </li>
          <li>
            <label>
              <span>Attack</span>
              <span>{pokemonAttack}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="45"
              optimum="90"
              max="190"
              value={pokemonAttack}
            ></meter>
          </li>
          <li>
            <label>
              <span>Defense</span>
              <span>{pokemonDefense}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="55"
              optimum="110"
              max="230"
              value={pokemonDefense}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Atk</span>
              <span>{pokemonSpAttack}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="90"
              optimum="130"
              max="173"
              value={pokemonSpAttack}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Def:</span>
              <span>{pokemonSpDefense}</span>
            </label>
            <meter
              min="20"
              low="55"
              high="100"
              optimum="150"
              max="230"
              value={pokemonSpDefense}
            ></meter>
          </li>
        </ul>
      </article>
    </div>
  ) : (
    <div></div>
  );
}
