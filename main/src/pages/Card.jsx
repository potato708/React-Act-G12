import React from 'react';

const Card = ({ name, price, desc }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <span className="price-tag">{price}</span>
      </div>
      <p>{desc}</p>
      <button className="card-btn">View Details</button>
    </div>
  );
};

export default Card;