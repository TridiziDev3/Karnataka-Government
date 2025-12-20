import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaClock,
  FaGlobe,
  FaHome,
  FaInfoCircle,
  FaFileContract,
  FaRegLightbulb,
  FaTree,
  FaAngleDoubleRight,
  FaImages,
  FaRegNewspaper,
  FaPhoneAlt
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TEXT } from "../../content/text";

import SiddaramaiahImage from "../../assets/Homepage/Cm.png";
import EmblemImage from "../../assets/Homepage/emblem.png";
import ShivakumarImage from "../../assets/Homepage/Minister.png";
import LogoImage from "../../assets/Homepage/temple.png";
import OrgTitleImage from "../../assets/Bengaluru Solid Waste Management Limited (Government of Karnataka).png";

const navItems = [
  { name: "Home", icon: FaHome },
  { name: "About Us", icon: FaInfoCircle },
  { name: "Tenders", icon: FaFileContract },
  { name: "Projects", icon: FaRegLightbulb },
  { name: "Plants", icon: FaTree },
  { name: "Wings", icon: FaAngleDoubleRight },
  { name: "Gallery", icon: FaImages },
  { name: "Media", icon: FaRegNewspaper },
  { name: "Contacts", icon: FaPhoneAlt }
];

const Header = ({ lang, toggleLanguage }) => {
  const [dateTime, setDateTime] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const t = TEXT.header;

  /* DATE TIME */
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = lang === "kn" ? "kn-IN" : "en-IN";

      const dateStr = now.toLocaleDateString(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata"
      });

      const timeStr = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
      });

      setDateTime(`${dateStr} | ${timeStr}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  /* SCROLL LOGIC */
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 140; // branding height approx
      setIsSticky(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER (SCROLLS) */}
      <header className="site-header">
        <div className="top-bar">
          <div className="time-info">
            <FaClock className="icon" />
            <span>{dateTime}</span>
          </div>

          <div className="language-switcher">
            <FaGlobe className="icon" />
            <button onClick={toggleLanguage} className="lang-button">
              {t.top.langButton[lang]}
              <IoIosArrowDown />
            </button>
          </div>
        </div>

        <div className="branding-section">
          <div className="minister-profile left-minister">
            <img src={SiddaramaiahImage} alt="" className="minister-photo" />
          </div>

          <div className="center-branding">
            <div className="center-logo">
              <img src={LogoImage} alt="Govt Logo" className="logo-image" />
            </div>

            <div className="site-title-group">
              <img
                src={OrgTitleImage}
                alt="Bengaluru Solid Waste Management Limited"
                className="org-title-image"
              />
            </div>
          </div>

          <div className="minister-profile right-minister">
            <img src={EmblemImage} alt="" className="emblem-image" />
            <img src={ShivakumarImage} alt="" className="minister-photo" />
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className={`navbar ${isSticky ? "navbar--fixed" : ""}`}>
        <ul className="nav-list">
          {TEXT.navbar.links[lang].map((item) => {
            const englishItem =
              TEXT.navbar.links.en.find(e => e.label === item.label) || {};
            const navIcon =
              navItems.find(nav => nav.name === englishItem.label) || {};
            const Icon = navIcon.icon || FaInfoCircle;

            return (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  <Icon />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Spacer – ONLY active when navbar fixed */}
      {isSticky && <div className="navbar-spacer" />}
    </>
  );
};

export default Header;
