import React from "react";
import "./card-styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/1?set=set1&size=180x180`}
      alt="robotCharacter"
    />
    <h2>{props.robotCharacter.title}</h2>
    <p>{props.robotCharacter.description}</p>
  </div>
);
