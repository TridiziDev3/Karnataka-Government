// CORRECTED Header.jsx

import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaClock, FaGlobe, FaHome, FaInfoCircle, FaFileContract, FaRegLightbulb, FaTree, FaAngleDoubleRight, FaImages, FaRegNewspaper, FaPhoneAlt } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { TEXT } from '../../content/text';

import SiddaramaiahImage from "../../assets/Homepage/Cm.png";
import EmblemImage from "../../assets/Homepage/emblem.png";
import ShivakumarImage from "../../assets/Homepage/Minister.png";
import LogoImage from "../../assets/Homepage/temple.png";

// Navigation data mapping to their respective React Icons (no change here)
const navItems = [
  { name: 'Home', icon: FaHome, href: "#home" },
  { name: 'About Us', icon: FaInfoCircle, href: "#about" },
  { name: 'Tenders', icon: FaFileContract, href: "#tenders" },
  { name: 'Projects', icon: FaRegLightbulb, href: "#projects" },
  { name: 'Plants', icon: FaTree, href: "#plants" },
  { name: 'Wings', icon: FaAngleDoubleRight, href: "#wings" },
  { name: 'Gallery', icon: FaImages, href: "#gallery" },
  { name: 'Media', icon: FaRegNewspaper, href: "#media" },
  { name: 'Contacts', icon: FaPhoneAlt, href: "#contact" },
];

// 1. ACCEPT lang AND toggleLanguage PROPS
const Header = ({ lang, toggleLanguage }) => { 
  // const [lang, setLang] = useState('en'); // <--- REMOVE THIS LINE
  // const toggleLanguage = () => { ... } // <--- REMOVE THIS FUNCTION

  const [dateTime, setDateTime] = useState("");
  const t = TEXT.header;

  // DATE / TIME Effect Hook
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const locale = lang === "kn" ? "kn-IN" : "en-IN"; // Now uses PROP 'lang'

      const dateStr = now.toLocaleDateString(locale, {
        weekday: "long", 
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const timeStr = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });

      setDateTime(`${dateStr} | ${timeStr}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000); 
    return () => clearInterval(timer); 
  }, [lang]); // Dependency array now correctly monitors PROP 'lang'

  // Helper to safely access nested text
  // This still works as it uses the PROP 'lang'
  const getText = (key) => TEXT.header.center[key][lang]; 

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="time-info">
          <FaClock className="icon" />
          <span className="datetime-text">{dateTime}</span>
        </div>
        
        {/* Language Switching Section */}
        <div className="language-switcher">
          <FaGlobe className="icon" />
          {/* 2. USE THE PROP FUNCTION */}
          <button onClick={toggleLanguage} className="lang-button"> 
            {t.top.langButton[lang]} 
            <IoIosArrowDown className="lang-dropdown-icon" />
          </button>
        </div>
      </div>

      {/* Main Branding Section (Localization Logic Confirmed Correct) */}
      <div className="branding-section">
        <div className="minister-profile left-minister">
          <div className="minister-text">
           
          </div>
          <img src={SiddaramaiahImage} alt={t.people.cmAlt[lang]} className="minister-photo" />
        </div>

        <div className="center-branding">
          <img src={LogoImage} alt={getText('logoAlt')} className="logo-image" />
          <div className="site-title-group">
            <h1 className="site-title">{getText('orgName')}</h1>
            <p className="site-subtitle">{getText('orgTagline')}</p>
          </div>
        </div>

        <div className="minister-profile right-minister">
          <img src={EmblemImage} alt="Karnataka Emblem" className="emblem-image" />
          <div className="minister-text">
            {/* 3. LOCALIZED STATIC TEXT (MUST be fixed later if needed) */}
            <div className="minister-name-bold">SHRI D K SHIVAKUMAR</div> 
            <div className="minister-title">Dy. Chief Minister, GoK and Minister for Bengaluru Development, GoK</div>
          </div>
          <img src={ShivakumarImage} alt={t.people.ministerAlt[lang]} className="minister-photo" />
        </div>
      </div>

      {/* Navigation Bar (Localization Logic is Complex but uses 'lang' prop) */}
      <nav className="navbar">
        <ul className="nav-list">
          {TEXT.navbar.links[lang].map((item) => { // Map directly over the localized array
            const englishItem = TEXT.navbar.links.en.find(e => e.label === item.label) || {};
            const navIcon = navItems.find(nav => nav.name === englishItem.label) || {};
            const Icon = navIcon.icon || FaInfoCircle; // Default icon
            const isHome = item.label === 'Home' || item.label === 'ಮನೆ'; // Check for localized home label
            
            return (
              <li key={item.label} className={`nav-item ${isHome ? 'active' : ''}`}>
                <a href={item.href} className="nav-link">
                  <Icon className="nav-icon" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;