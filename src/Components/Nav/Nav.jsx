import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-element">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-element">
          <Link to="/new">Add Pokemon</Link>
        </li>
        <li className="nav-element">
          <Link to="/search">Finder</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
