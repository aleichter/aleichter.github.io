import React from "react";
import "./Header.css";
import logo from "../assets/LogoV1_low_res.png"; // Adjust the path as needed

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="name">Andrew Leichter</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#projects">Projects</a>
          <a href="#books">Books</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
