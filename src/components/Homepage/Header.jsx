// src/components/Homepage/Header.jsx
import React, { useEffect, useState } from "react";
import "../../Styles/Homepage/header.css";
<<<<<<< HEAD
=======

>>>>>>> 9bc7806297f3b36dfd0a63597ab884a6d315d174
import CmImage from "../../assets/Homepage/Cm.png";
import MinisterImage from "../../assets/Homepage/Minister.png";
import TempleImage from "../../assets/Homepage/temple.png";
import { FaUser } from "react-icons/fa";
<<<<<<< HEAD
=======

>>>>>>> 9bc7806297f3b36dfd0a63597ab884a6d315d174
import Navbar from "./Navbar";
import { TEXT } from "../../content/text";

const Header = ({ lang, setLang }) => {
  const [dateTime, setDateTime] = useState("");
  const [fontScale, setFontScale] = useState(1);
  const [theme, setTheme] = useState("light");

  const t = TEXT.header;

  // DATE / TIME
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = lang === "kn" ? "kn-IN" : "en-IN";

      const dateStr = now.toLocaleDateString(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const weekdayStr = now.toLocaleDateString(locale, {
        weekday: "short",
        timeZone: "Asia/Kolkata",
      });

      const timeStr = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });

      setDateTime(`${dateStr} | ${weekdayStr} | ${timeStr}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  // LANGUAGE TOGGLE
  const handleToggleLang = () => {
    setLang(lang === "kn" ? "en" : "kn");
  };

  // TEXT SIZE
  const changeFontScale = (delta) => {
    setFontScale((prev) => {
      const next = prev + delta;
      if (next < 0.8) return 0.8;
      if (next > 1.4) return 1.4;
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.fontSize;
    root.style.fontSize = `${fontScale * 100}%`;
    return () => {
      root.style.fontSize = previous;
    };
  }, [fontScale]);

  // THEME
  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="header">
      {/* Top govt strip */}
      <div className="header-top">
        <div className="header-top__left">
          <span>{dateTime}</span>
        </div>

        <div className="header-top__center">
          <a href="#!" className="header-top__link">
            {t.top.visuallyChallenged[lang]}
          </a>
          <span className="header-divider">|</span>

          <a href="#!" className="header-top__link">
            {t.top.screenReader[lang]}
          </a>
          <span className="header-divider">|</span>

          <span className="header-top__link">
            {t.top.textSize[lang]}
          </span>

          {/* ➖ zoom out */}
          <button
            type="button"
            className="header-top__size-btn"
            onClick={() => changeFontScale(-0.1)}
            aria-label="Decrease text size"
          >
            -
          </button>

          <span className="header-top__size-a">A</span>

          {/* ➕ zoom in */}
          <button
            type="button"
            className="header-top__size-btn"
            onClick={() => changeFontScale(0.1)}
            aria-label="Increase text size"
          >
            +
          </button>

          {/* Language toggle */}
          <div className="header-top__lang-switch">
            <button className="lang-btn" onClick={handleToggleLang}>
              {t.top.langButton[lang]}
            </button>
          </div>
        </div>

        <div className="header-top__right">
          <button
            type="button"
            className="header-top__theme-toggle"
            onClick={handleToggleTheme}
            aria-label="Toggle dark theme"
          >
            <div className="theme-half theme-half--light" />
            <div className="theme-half theme-half--dark" />
          </button>

          <button className="header-top__btn">
            {t.top.login[lang]}
          </button>

          <span className="header-top__user-icon">
            <FaUser className="header-top__user-icon" />
          </span>
        </div>
      </div>

      {/* CM banner + centre logo + Minister */}
      <div className="header-main">
        <div className="header-main__leader header-main__leader--left">
          <img
            src={CmImage}
            alt={t.people.cmAlt[lang]}
          />
        </div>

        <div className="header-main__center">
          <img
            src={TempleImage}
            alt={t.center.logoAlt[lang]}
            className="header-main__logo"
          />

          <div className="header-main__text">
            <h1 className="header-main__title">
              {t.center.orgName[lang]}
            </h1>
            <p className="header-main__subtitle">
              {t.center.orgTagline[lang]}
            </p>
          </div>
        </div>

        <div className="header-main__leader header-main__leader--right">
          <img
            src={MinisterImage}
            alt={t.people.ministerAlt[lang]}
          />
        </div>
      </div>

      <Navbar lang={lang} />
    </header>
  );
};

export default Header;
