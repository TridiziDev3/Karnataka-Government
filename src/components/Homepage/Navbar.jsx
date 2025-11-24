// src/components/Homepage/Navbar.jsx
import React from "react";
import "../../Styles/Homepage/navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__pill">
        {/* left empty column to balance the button */}
        <div className="main-nav__ghost" />

        {/* centered menu items */}
        <ul className="main-nav__list">
          <li><a href="#about" className="main-nav__link active">About Us</a></li>
          <li><a href="#projects" className="main-nav__link">Projects</a></li>
          <li><a href="#tenders" className="main-nav__link">Tenders</a></li>
          <li><a href="#downloads" className="main-nav__link">Downloads</a></li>
          <li><a href="#media" className="main-nav__link">Media</a></li>
          <li><a href="#rti" className="main-nav__link">RTI Dashboard</a></li>
          <li><a href="#contact" className="main-nav__link">Contact Numbers</a></li>
        </ul>

        {/* blue round 3-lines button on the right inside the pill */}
        <button className="main-nav__menu-btn" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
