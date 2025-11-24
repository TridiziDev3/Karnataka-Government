import React, { useEffect, useState } from "react";
import "../../Styles/Homepage/header.css";

import CmImage from "../../assets/Homepage/Cm.png";
import MinisterImage from "../../assets/Homepage/Minister.png";
import TempleImage from "../../assets/Homepage/temple.png";
import { FaUser } from "react-icons/fa";

import Navbar from "./Navbar";

const Header = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Date like: 19 ನವೆಂಬರ್ 2025
      const dateStr = now.toLocaleDateString("kn-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      // Weekday like: ಬುಧ
      const weekdayStr = now.toLocaleDateString("kn-IN", {
        weekday: "short",
        timeZone: "Asia/Kolkata",
      });

      // Time like: 04:36:21 ಸಂಜೆ
      const timeStr = now.toLocaleTimeString("kn-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });

      setDateTime(`${dateStr} | ${weekdayStr} | ${timeStr}`);
    };

    updateDateTime();                // initial call
    const timer = setInterval(updateDateTime, 1000); // update every second

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <header className="header">
      {/* 🔹 Top govt strip */}
      <div className="header-top">
        <div className="header-top__left">
          {/* Auto-updating IST time in Kannada */}
          <span>{dateTime}</span>
        </div>

        <div className="header-top__center">
          <a href="#!" className="header-top__link">ದೃಷ್ಟಿ ಬಾಧಿತರಿಗಾಗಿ</a>
          <span className="header-divider">|</span>
          <a href="#!" className="header-top__link">ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಪ್ರವೇಶ</a>
          <span className="header-divider">|</span>
          <span className="header-top__link">ಪಠ್ಯದ ಗಾತ್ರ</span>
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
          <button className="header-top__btn">ಲಾಗಿನ್</button>
          <span className="header-top__user-icon">
            <FaUser className="header-top__user-icon" />
          </span>
        </div>
      </div>

      {/* 🔹 CM banner + Temple Logo + Minister banner */}
      <div className="header-main">
        <div className="header-main__leader header-main__leader--left">
          <img src={CmImage} alt="ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿ" />
        </div>

        <div className="header-main__center">
          <img
            src={TempleImage}
            alt="ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್"
            className="header-main__logo"
          />
          <div className="header-main__text">
            <h1 className="header-main__title">
              ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್
            </h1>
            <p className="header-main__subtitle">
              (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)
            </p>
          </div>
        </div>

        <div className="header-main__leader header-main__leader--right">
          <img src={MinisterImage} alt="ಉಪಮುಖ್ಯಮಂತ್ರಿ" />
        </div>
      </div>

      {/* 🔹 Navbar below */}
      <Navbar />
    </header>
  );
};

export default Header;
