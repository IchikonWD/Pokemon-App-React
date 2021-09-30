import React from "react";
import Logo from '../../assets/img/pokeappLogo.png'
import '../../Styles/Components/_header.scss'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="PokeApp Logo" />
    </header>
  );
};

export default Header;
