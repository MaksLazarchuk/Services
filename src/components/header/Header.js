import "./Header.css";
import React from "react";
import "../../fonts.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <p className="logo">Cahee</p>
        <div className="hamburger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-btn" htmlFor="menu-toggle" checked>
            <span></span>
          </label>
          <ul className="link-box">
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#home">
                HOME
              </a>
            </li>
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#gallery">
                GALLERY
              </a>
            </li>
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#blog">
                BLOG
              </a>
            </li>
            <li className="link-line">
              <div className="line" />
              <a className="link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
