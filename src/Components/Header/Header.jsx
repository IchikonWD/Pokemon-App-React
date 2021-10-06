import React, { useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo128.png";

const Header = () => {
  const [state, setState] = useState("");

  const toggleNav = (e) => {
    state ? setState("") : setState("open");
  };
  const theme = state;
  return (
    <header>
      <nav>
        <div id="navbar">
          <div id="logo" className="reverse">
            <img className='logo' src={logo} alt="PokeApp Logo" />
            <div className="mobile-btn" onClick={toggleNav}>
              &#9776;
            </div>
          </div>
          <Nav />
        </div>
      </nav>
      <div id="mySidenav" className={`sidenav ${theme}`}>
        <button className="closebtn" onClick={toggleNav}>
          &times;
        </button>
        <Link to="/" onClick={toggleNav}>Home</Link>
        <Link to="/new" onClick={toggleNav}>Add Pokemon</Link>
        <Link to="/search" onClick={toggleNav}>Finder</Link>
      </div>
    </header>
  );
};

export default Header;
