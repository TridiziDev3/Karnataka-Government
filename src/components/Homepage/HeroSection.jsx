// src/components/Homepage/HeroSection.jsx
import React from "react";
import "../../Styles/Homepage/hero.css";
import mainImage from "../../assets/Homepage/mainImage.png";
import { TEXT } from "../../content/text";

const HeroSection = ({ lang }) => {
  const t = TEXT.hero;

  return (
    <section className="hero">
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
            <h2>{t.title[lang]}</h2>
            <p>{t.text[lang]}</p>
            <button className="hero__btn">
              {t.button[lang]}
            </button>
          </div>
        </div>
      </div>

      <div className="hero__ticker">
        <span>{t.ticker[lang]}</span>
      </div>
    </section>
  );
};

export default HeroSection;
