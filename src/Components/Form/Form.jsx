import React, { useEffect, useState, useContext } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";
import Swal from "sweetalert2";

import { PokemonContext } from "../../Contexts/pokemonContext";

export default function Form() {
  const { pokemon, setPokemon } = useContext(PokemonContext);
  const [text, setText] = useState("");
  const [debounced] = useDebounce(text, 2000);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (debounced !== "") {
        setBusqueda([...busqueda, debounced]);
        let exist = busqueda.includes(debounced);
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${debounced}`;
          if (exist === false) {
            const res = await axios.get(url);
            setPokemon([...pokemon, res.data]);
            setText("");
            Swal.fire("Nice!", `${res.data.name} was found!`, "warning");
            console.log(`${res.data.name} was found!`);
          } else {
            setText("");
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Pokemon Already Saved!`,
            });
            console.log("Pokemon Already Saved");
          }
        } catch (err) {
          console.log(`Axios Error:${err}`);
        }
      }
    }
    fetchData();
  }, [debounced]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          id="input"
          value={text}
          onChange={handleChange}
          type="text"
          className="searchTerm"
          placeholder="Find your Pokemon!"
        ></input>
        <button className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <ul></ul>
    </div>
  );
}
