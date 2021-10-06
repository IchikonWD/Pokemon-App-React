import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <header>
      <nav>
        <div id="navbar">
          <div id="logo" className="reverse">
            <div
              className="mobile-btn"
              onclick="openNav()"
            >
              &#9776;
            </div>
            <div className="logo">
              Gr<span>id</span> CSS
            </div>
          </div>
          <Nav />
        </div>
      </nav>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onclick="closeNav()">
          &times;
        </button>
        <Nav />
      </div>
    </header>
  );
};

export default Header;