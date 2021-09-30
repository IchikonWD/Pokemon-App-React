import React, { useState } from "react";
import { useDebounce } from "use-debounce";

export default function Form() {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 2000);

  return (
    <div className="wrap">
      <p>Tu busqueda: {value}</p>
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
    </div>
  );
}
