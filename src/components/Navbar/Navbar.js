// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create the CSS file for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/cocteau-twins" className="nav-link">
            Cocteau Twins
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/slowdive" className="nav-link">
            Slowdive
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/elliott-smith" className="nav-link">
            Elliott Smith
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
