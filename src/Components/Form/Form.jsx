import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";

export default function Form({ childToParent }) {
  const [pokemons, setPokemons] = useState("");
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 2000);

  useEffect(() => {
    async function fetchData() {
      if (value !== "") {
        const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
        const response = await axios.get(url);
        const result = response.data;
        setPokemons(result);
        childToParent(result);
        setText("");
      } else {
        setPokemons("");
      }
    }
    fetchData();
  }, [value]);

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
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <ul></ul>
    </div>
  );
}
