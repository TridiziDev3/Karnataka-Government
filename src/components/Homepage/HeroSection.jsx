// src/components/Homepage/HeroSection.jsx
import React from "react";
import "../../Styles/Homepage/hero.css";

import mainImage from "../../assets/Homepage/mainImage.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* image + overlay content */}
      <div
        className="hero__image"
        style={{
          backgroundImage: `linear-gradient(
              to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0.45) 35%,
              rgba(0, 0, 0, 0.15) 70%,
              rgba(0, 0, 0, 0) 100%
            ),
            url(${mainImage})`,
        }}
      >
        <div className="hero__overlay">
          <div className="hero__content">
            <h2>Lorem ipsum content is the dummy text to place it on website</h2>
            <p>
              Lorem ipsum content is the dummy text to place it on website for
              the placement purpose
            </p>
            <button className="hero__btn">Know more</button>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="hero__ticker">
        Call 1902 to register your grievance (if any) regarding any scheme /
        service delivery of Government of Karnataka
      </div>
    </section>
  );
};

export default HeroSection;
