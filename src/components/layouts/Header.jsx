import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = ({ appName }) => {
  return (
    <>
      <nav class="navbar bg-dark">
        <h1>
          <Link to="/">
            <i class="fas fa-code"></i> {appName}
          </Link>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
