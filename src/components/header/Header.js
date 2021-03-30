import "./Header.css";
import React from "react";
import "../../fonts.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <p className="logo">Cahee</p>
        <div className="link-box">
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#home">
              HOME
            </a>
          </div>
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#about">
              ABOUT
            </a>
          </div>
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#services">
              SERVICES
            </a>
          </div>
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#gallery">
              GALLERY
            </a>
          </div>
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#blog">
              BLOG
            </a>
          </div>
          <div className="link-line">
            <div className="line" />
            <a className="link" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
