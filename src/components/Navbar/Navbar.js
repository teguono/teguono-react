// Navbar.js
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Navbar.css'; // Create the CSS file for styling the navbar

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              My Bloody Valentine
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cocteau-twins" className="nav-link" activeClassName="active-link">
              Cocteau Twins
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/slowdive" className="nav-link" activeClassName="active-link">
              Slowdive
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/elliott-smith" className="nav-link">
              Elliott Smith
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
