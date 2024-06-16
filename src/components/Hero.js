import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to nila's Streaming Service</h1>
        <p>Enjoy a vast library of movies and TV shows anytime, anywhere.</p>
        <div className="search-bar">
          <input type="text" id="search-input" placeholder="Search for movies, TV shows, and more" />
          <button id="search-btn" className="button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
