import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-item">
        <ul>
          <li>
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <ul>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              تماس با ما
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              درباره ما
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              راهنما
            </Link>
          </li>
        </ul>
      </div>

      <span className="footer-item">
        iFink &#169; {new Date().getFullYear()}{" "}
      </span>
    </footer>
  );
}

export default Footer;
