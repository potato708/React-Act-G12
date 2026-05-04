import React from "react";

const CharacterCard = ({ character }) => {
  // Use the first image in the array, or a placeholder if empty
  const imageUrl = character.images && character.images.length > 0 
    ? character.images[0] 
    : "https://via.placeholder.com/300x400?text=No+Image";

  return (
    <div className="character-card">
      <img src={imageUrl} alt={character.name} />
      <div className="name-overlay">
        {character.name}
      </div>
    </div>
  );
};

export default CharacterCard;