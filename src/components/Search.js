import React, { useState } from "react";
import Actor from "./Actor";
import Shows from "./Shows";
import "./Search.css";

const Search = () => {
  const [actor, setActor] = useState(false);
  const [show, setShow] = useState(false);

  const actorFilter = () => {
    setActor(true);
    setShow(false);
  };

  const showFilter = () => {
    setActor(false);
    setShow(true);
  };

  return (
    <>
      <div className="title">
        <h1 style={{ color: "black" }}>TVmaze Search your favourite shows</h1>
      </div>
      <div className="details">
        <label>
          <input type="radio" name="movie" onChange={() => actorFilter()} />
          Actor
        </label>
        <label>
          <input type="radio" name="movie" onChange={() => showFilter()} />
          Shows
        </label>
      </div>

      <div>
        {actor ? <Actor /> : ""}
        {show ? <Shows /> : ""}
      </div>
    </>
  );
};

export default Search;
