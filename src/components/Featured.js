import React from 'react';
import './Featured.css'; // Assuming you have a CSS file for styles
import { moviesData } from './mov.js';


const Featured = (moviesData) => {
    return (
      <div className="movie-card" key={moviesData.title}>
        <img src={moviesData.thumbnail} alt={moviesData.title} style={{ height: '250px', width: '200px' }} />
        <h3>{moviesData.title}</h3>
        <h2>{moviesData.year}</h2>
        <a href="#" className="btn">Watch Now</a>
      </div>
    );
  };

  export default Featured;