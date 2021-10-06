import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState("");
  const [details2, setDetails2] = useState("");

  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    async function fetchData() {
      if (id !== "") {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => {
            setDetails(res.data);
            history.push({
              pathname: window.location.pathname,
              search: `?name=${res.data.name}&image=${res.data.sprites.front_default}&typeOne=${res.data.types[0].type.name}`,
            });
          })
          .catch((err) => {
            console.log(err);
          });
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
          .then((res) => {
            setDetails2(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    fetchData();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return details !== "" ? (
    <div id="pokeball-2" className="pokeball2 open">
      <button id="toggle-button"></button>
      <article>
        <img
          className="pokeball__img"
          src={details.sprites.front_default}
          alt={details.name}
        />
        <h1>
          <span>{details.name}</span>
          <span>Pokedex: #{details.id}</span>
        </h1>
        <div className="species">
          Type: {details.types[0].type.name}{" "}
          {details.types > 1 ? "" : <span>/ {details.types[1].type.name}</span>}
        </div>
        {details2 !== "" ? (
          <p>{details2.flavor_text_entries[9].flavor_text}</p>
        ) : null}
        <ul>
          <li>
            <label>
              <span>HP</span>
              <span>{details.stats[0].base_stat}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="95"
              optimum="150"
              max="255"
              value={details.stats[0].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Speed</span>
              <span>{details.stats[3].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="50"
              optimum="100"
              max="180"
              value={details.stats[3].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Attack</span>
              <span>{details.stats[1].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="45"
              optimum="90"
              max="190"
              value={details.stats[1].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Defense</span>
              <span>{details.stats[2].base_stat}</span>
            </label>
            <meter
              min="5"
              low="15"
              high="55"
              optimum="110"
              max="230"
              value={details.stats[2].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Atk</span>
              <span>{details.stats[4].base_stat}</span>
            </label>
            <meter
              min="10"
              low="30"
              high="90"
              optimum="130"
              max="173"
              value={details.stats[4].base_stat}
            ></meter>
          </li>
          <li>
            <label>
              <span>Sp. Def:</span>
              <span>{details.stats[5].base_stat}</span>
            </label>
            <meter
              min="20"
              low="55"
              high="100"
              optimum="150"
              max="230"
              value={details.stats[5].base_stat}
            ></meter>
          </li>
        </ul>
        <div className="extra_data">
          <p>Base Exp: {details.base_experience}</p>
          <p>Height: {details.height}</p>
          <p>Weight: {details.weight}</p>
        </div>
      </article>
    </div>
  ) : (
    <div></div>
  );
};

export default Details;
