import React from "react";
import "./Activity4.css";

const CharacterCard = ({ character }) => {
  const { name, images } = character;

  return (
    <div className="card">
      <div className="card-inner">
        <img 
          src={images?.[0] || "https://via.placeholder.com/300"} 
          alt={name} 
          className="character-img" 
          loading="lazy"
        />
        <div className="name-bar">
          <p className="character-name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;