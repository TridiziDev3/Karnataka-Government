import React from "react";
import "../../Styles/Homepage/header.css";

import CmImage from "../../assets/Homepage/Cm.png";
import MinisterImage from "../../assets/Homepage/Minister.png";
import TempleImage from "../../assets/Homepage/temple.png";
import { FaUser } from "react-icons/fa";

import Navbar from "./Navbar"; // 👈 New separate component

const Header = () => {
  return (
    <header className="header">
      {/* 🔹 Top govt strip */}
      <div className="header-top">
        <div className="header-top__left">
          <span>19 Nov 2025 | Wed | 04:36:21 PM</span>
        </div>

        <div className="header-top__center">
          <a href="#!" className="header-top__link">Visually Challenged</a>
          <span className="header-divider">|</span>
          <a href="#!" className="header-top__link">Screen Reader Access</a>
          <span className="header-divider">|</span>
          <span className="header-top__link">Text Size</span>
          <button className="header-top__size-btn">-</button>
          <span className="header-top__size-a">A</span>
          <button className="header-top__size-btn">+</button>
          <span className="header-top__lang">ಕನ್ನಡ</span>
        </div>

        <div className="header-top__right">
          <div className="header-top__theme-toggle">
            <div className="theme-half theme-half--light" />
            <div className="theme-half theme-half--dark" />
          </div>
          <button className="header-top__btn">Login</button>
          <span className="header-top__user-icon">
            <FaUser className="header-top__user-icon" />
          </span>
        </div>
      </div>

      {/* 🔹 CM banner + temple logo + Minister banner */}
      <div className="header-main">
        <div className="header-main__leader header-main__leader--left">
          <img src={CmImage} alt="Hon'ble Chief Minister" />
        </div>

        <div className="header-main__center">
          <img
            src={TempleImage}
            alt="Bengaluru Solid Waste Management Limited Logo"
            className="header-main__logo"
          />
          <div className="header-main__text">
            <h1 className="header-main__title">
              Bengaluru Solid Waste Management Limited
            </h1>
            <p className="header-main__subtitle">
              (Government of Karnataka)
            </p>
          </div>
        </div>

        <div className="header-main__leader header-main__leader--right">
          <img src={MinisterImage} alt="Dy. Chief Minister" />
        </div>
      </div>

      {/* 🔹 Imported Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
