import React from "react";
import logo from "../../assets/img/404-Page-Not-Found.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">Error 404</h1>
      <p className="error__text">Something went wrong</p>
      <img className="error__image" src={logo} alt="Page not Found" />
      <button className="error__homeButton">
        <Link to="/">
          <i className="fa fa-arrow-left"></i>&nbsp; Go Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
