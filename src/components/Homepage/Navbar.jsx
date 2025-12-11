// src/components/Homepage/Navbar.jsx
import React, { useState } from "react";
import "../../Styles/Homepage/navbar.css";
import { TEXT } from "../../content/text";

const Navbar = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = TEXT.navbar.links[lang];

  return (
    <>
      <div
        className={`main-nav__overlay ${
          isOpen ? "main-nav__overlay--visible" : ""
        }`}
        onClick={closeMenu}
      />

      <nav className="main-nav">
        <div className="main-nav__pill">
          <div className="main-nav__ghost" />

          <ul className="main-nav__list main-nav__list--desktop">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="main-nav__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="main-nav__menu-btn"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`main-nav__mobile-menu ${
            isOpen ? "main-nav__mobile-menu--open" : ""
          }`}
        >
          <ul className="main-nav__list main-nav__list--mobile">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="main-nav__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
