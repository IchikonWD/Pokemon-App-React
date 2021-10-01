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
      } else {
        setPokemons("");
      }
    }
    fetchData();
  }, [value]);

  return (
    <div className="wrap">
      <div className="search">
        <input
          defaultValue={""}
          onChange={(e) => {
            setText(e.target.value);
          }}
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
