import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link id="logo" to="/">
        LOGO
      </Link>
      <ul className="nav-links">
        <li className="link">
          <Link to="/private">Private</Link>
        </li>
        <li className="link">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
