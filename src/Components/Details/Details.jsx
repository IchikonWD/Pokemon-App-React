import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const history = useHistory();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    history.push({
      pathname: window.location.pathname,
      search: "?name=pikachu",
    });
  }, [history]);


  return (
    <div>
      <h2>Details: {id}</h2>
      <p>Name:</p>
    </div>
  );
};

export default Details;
