import React from "react";
import {  Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 group">
      <ul className="group-hover:block">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;