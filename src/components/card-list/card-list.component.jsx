import React from "react";
import { Card } from "../card/card-component";
import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.robotCharacters.map((robotCharacter) => (
      <Card key={robotCharacter._id} robotCharacter={robotCharacter} />
    ))}
  </div>
);
