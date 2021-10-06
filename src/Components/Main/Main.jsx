import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "../Home";
import New from "../New";
import Search from "../Search";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new" component={New} />
        <Route path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default Main;
