import React, { useState, useEffect } from "react";
import Pokeball from "../Pokeball";

export default function Card(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (props.value) {
      setData(props.value);
    }
  }, [props.value]);

  return (
    <div className="card">
      <Pokeball value={data} />
    </div>
  );
}
