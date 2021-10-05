import React from "react";
import Home from "../Home";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </main>
  );
};

export default Main;
