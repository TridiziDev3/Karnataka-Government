// src/components/Homepage/MdSection.jsx
import React from "react";
import "../../Styles/Homepage/mdSection.css";
import midImage from "../../assets/Homepage/midimage.png";
import { TEXT } from "../../content/text";

const MdSection = ({ lang }) => {
  const t = TEXT.md;

  return (
    <section className="md-section">
      <div className="container">
        <div className="md-card">
          <div className="md-card__text">
            <h3>{t.heading[lang]}</h3>

            <p>{t.p1[lang]}</p>
            <p>{t.p2[lang]}</p>

            <button className="md-card__btn">
              {t.button[lang]}
            </button>
          </div>

          <div className="md-card__photo">
            <img
              src={midImage}
              alt={t.photoAlt[lang]}
              className="md-card__photo-img"
            />
            <p className="md-card__name">{t.name[lang]}</p>
            <p className="md-card__role">{t.role[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdSection;
