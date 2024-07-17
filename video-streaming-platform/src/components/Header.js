import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Video Streaming Platform</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/series">Series</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
