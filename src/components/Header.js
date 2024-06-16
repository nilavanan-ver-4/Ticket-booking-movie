import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='header'>
        <div className="logo">nila's Streaming Service</div>

        <ul className="nav-links">
        
          <li><a href="#">Home</a></li>
          <li className="dropdown">
            <a href="#">Movies</a>
            <div className="dropdown-content">
              <a href="#">Year</a>
              <a href="#">Comedy</a>
              <a href="#">Drama</a>
            </div>
          </li>
          <li><a href="#">TV Shows</a></li>
          <li className="dropdown">
            <a href="#">MY ACCOUNT</a>
            <div className="dropdown-content">
              <a href="login.html">LOGIN</a>
              <a href="signup.html">SIGN UP</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
