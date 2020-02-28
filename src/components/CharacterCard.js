import React from "react";

const CharacterCard = props => {
  return (
    <div className="CharacterCard" key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
    </div>
  )
}
export default CharacterCard;