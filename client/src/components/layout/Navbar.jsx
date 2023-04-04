import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">LOGO</Link>
      <ul className="Navbar">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
