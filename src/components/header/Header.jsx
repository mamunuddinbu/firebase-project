/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom"; // import Link component from react-router-dom
import "./Header.css";

const Header = () => {
  return (
    <nav>

      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Header;
