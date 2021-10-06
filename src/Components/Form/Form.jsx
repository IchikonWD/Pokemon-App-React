import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";

export default function Form({childToParent}) {
  const [pokemons, setPokemons] = useState([]);
  const [text, setText] = useState("");
  const [debounced] = useDebounce(text, 2000);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(async () => {
    try {
      if (debounced !== "") {
        setBusqueda([...busqueda, debounced]);
        let exist = busqueda.includes(debounced);

        const url = `https://pokeapi.co/api/v2/pokemon/${debounced}`;
        if (exist === false) {
          const res = await axios.get(url);
          setPokemons([...pokemons, res.data]);
          childToParent([...pokemons, res.data]);
          setText("");
        } else {
          setText("");
          console.log("Pokemon Already Found");
        }
      }
    } catch (err) {
      console.log(`Axios Error:${err}`);
    }
  }, [debounced]);

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
