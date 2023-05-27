import React from 'react';
import './Style.css'; // Import the CSS file for styling

const Card = ({ image, title,desc }) => {
  return (
    <div className="cardBox">
      <h3>{title}</h3>
    <img alt='cat-robot' src={image}/>
  <div className="card">
    
  
    <div className="content">
      
      <p>{desc}</p>
    </div>
  </div>
</div>
  );
};

export default Card;

