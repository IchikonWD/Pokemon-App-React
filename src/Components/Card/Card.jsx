import React, { useState, useEffect } from "react";
import Pokeball from "../Pokeball";

export default function Card(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (props.pokemon) {
      setData(props.pokemon);
    }
  }, [props.pokemon]);

// Paint each card with the data saved from searchs



  return (
    <div className="card">
      <Pokeball value={data} />
    </div>
  );
}
