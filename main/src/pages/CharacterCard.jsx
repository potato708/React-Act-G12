import React from "react";
import "./Activity3.css";

const CharacterCard = ({ character }) => {
  const { name, images } = character;

  return (
    <div className="card">
      <div className="card-inner">
        <img 
          src={images?.[0] || "https://via.placeholder.com/300"} 
          alt={name} 
          className="character-img" 
        />
        <div className="name-bar">
          <p className="character-name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;