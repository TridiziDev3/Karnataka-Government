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
          <li><a href="#about" className="main-nav__link active">ನಮ್ಮ ಬಗ್ಗೆ</a></li>
          <li><a href="#projects" className="main-nav__link">ಯೋಜನೆಗಳು</a></li>
          <li><a href="#tenders" className="main-nav__link">ಟೆಂಡರ್‌ಗಳು</a></li>
          <li><a href="#downloads" className="main-nav__link">ಡೌನ್‌ಲೋಡ್‌ಗಳು</a></li>
          <li><a href="#media" className="main-nav__link">ಮಾಧ್ಯಮ</a></li>
          <li><a href="#rti" className="main-nav__link">ಮಾಹಿತಿ ಹಕ್ಕು ವಿಭಾಗ</a></li>
          <li><a href="#contact" className="main-nav__link">ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು</a></li>
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
