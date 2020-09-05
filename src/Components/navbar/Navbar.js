import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm header sticky">
      <Link className="navbar-brand" to="/">
        LOGO
      </Link>

      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <div className="toggler-icon"></div>
          <div className="toggler-icon"></div>
          <div className="toggler-icon"></div>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                درباره ما
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ویژگی ها
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                راهنما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
