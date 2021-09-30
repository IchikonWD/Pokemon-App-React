import React, { useState } from "react";

export default function Pokeball() {
  const [state, setState] = useState("");
  const theme = state;

  const togglePokeball = (e) => {
    e.preventDefault();
    state ? setState("") : setState("open");
  };

  return (
    <div id="pokeball-1" className={`pokeball ${theme}`}>
      <button id="toggle-button" onClick={togglePokeball}></button>
      <article>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          alt="Pokemon Seleccionado"
        />
        <h1>
          <span>Charizard</span>
          <span>#006</span>
        </h1>
        <div className="species">Flame Pokemon</div>
        <p>
          Flies around the sky in search of powerful opponents. It breathes fire
          of such great heat that it melts anything. However, it never turns its
          fiery breath on any opponent weaker than itself.
        </p>
        <ul>
          <li>
            <label>
              <span>HP</span>
              <span>330</span>
            </label>
            <meter
              min="266"
              low="293"
              high="333"
              optimum="360"
              max="360"
              value="330"
            >
              330/360
            </meter>
          </li>
          <li>
            <label>
              <span>Speed</span>
              <span>280</span>
            </label>
            <meter
              min="184"
              low="236"
              high="276"
              optimum="328"
              max="328"
              value="280"
            >
              280/328
            </meter>
          </li>
          <li>
            <label>
              <span>Attack</span>
              <span>280</span>
            </label>
            <meter
              min="155"
              low="204"
              high="244"
              optimum="293"
              max="293"
              value="270"
            >
              280/293
            </meter>
          </li>
          <li>
            <label>
              <span>Defense</span>
              <span>190</span>
            </label>
            <meter
              min="144"
              low="192"
              high="232"
              optimum="280"
              max="280"
              value="190"
            >
              190/280
            </meter>
          </li>
          <li>
            <label>
              <span>Sp. Atk</span>
              <span>340</span>
            </label>
            <meter
              min="200"
              low="254"
              high="294"
              optimum="348"
              max="348"
              value="340"
            >
              340/348
            </meter>
          </li>
          <li>
            <label>
              <span>Sp. Def:</span>
              <span>230</span>
            </label>
            <meter
              min="157"
              low="206"
              high="246"
              optimum="295"
              max="295"
              value="230"
            >
              230/295
            </meter>
          </li>
        </ul>
      </article>
    </div>
  );
}
