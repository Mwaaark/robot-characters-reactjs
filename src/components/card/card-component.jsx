import React from "react";
import "./card-styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.robotCharacter.id}?set=set1&size=180x180`}
      alt="robotCharacter"
    />
    <h2>{props.robotCharacter.name}</h2>
    <p>{props.robotCharacter.phone}</p>
  </div>
);
