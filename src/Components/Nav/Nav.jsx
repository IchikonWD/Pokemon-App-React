import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="links">
      <Link to="/">Home</Link>
      <Link to="/new">Add Pokemon</Link>
      <Link to="/search">Finder</Link>
      <Link to="mailto:info@ichicodes.com">Contact</Link>
    </div>
  );
};

export default Nav;
