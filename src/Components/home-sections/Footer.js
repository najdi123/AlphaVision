import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.css";

import facebookLogo from "../../images/facebookLogo.png";
// import instagramLogo from "../../images/instagramLogo.png";
// import telegramLogo from "../../images/telegramLogo.png";
// import whatsAppLogo from "../../images/whatsAppLogo.png";

function Footer(props) {
  return (
    <div className="bg-dark">
      <footer className="footer ">
        <div className="footer-item">
          <ul>
            <Link>
              <div className="facebook">facebook</div>
            </Link>
            <Link>
              <div className="facebook">instagram</div>
            </Link>
            <Link>
              <div className="facebook">telegram</div>
            </Link>
            <Link>
              <div className="facebook">wgatsApp</div>
            </Link>
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
      </footer>
      <span className="white">iFink &#169; {new Date().getFullYear()} </span>
    </div>
  );
}

export default Footer;
