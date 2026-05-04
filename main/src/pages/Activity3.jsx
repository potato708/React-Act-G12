import React, { useState, useEffect } from 'react';
import Card from './Card';
import product from './product.json';
import './Activity3.css';

const Activity3 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Setting the product data from your JSON file
    setItems(product);
  }, []);

  return (
    <div className="activity-container">
      <header className="activity-header">
        <h1>Activity 3: JSON Data Display</h1>
        <p>Using React Hooks, Props, and Reusable Components</p>
      </header>

      <div className="card-grid">
        {items.map((item) => (
          <Card 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            desc={item.desc} 
          />
        ))}
      </div>
    </div>
  );
};

export default Activity3;