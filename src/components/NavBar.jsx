import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/search" className="nav-link">
          Search Location
        </Link>
      </div>

      <strong>Reek & Morty</strong>
    </nav>
  );
}

export default NavBar;
