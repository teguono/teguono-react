import React from 'react';
import Navbar from '../Navbar/Navbar';
import './ElliottSmith.css';

function ElliottSmith() {
  return (
    <div className="elliott-smith-container">
        <Navbar />
      <h1 className="elliott-smith-title">Elliott Smith</h1>
      <p className="elliott-smith-description">
        Elliott Smith was an American singer-songwriter known for his
        introspective and heartfelt music. He rose to prominence in the 1990s with
        albums like "Either/Or" and "XO." His delicate and melancholic songs touched
        the hearts of many, and his talent left a lasting impact on the music world.
      </p>
    </div>
  );
}

export default ElliottSmith;
