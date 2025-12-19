import React from 'react';
import './MDMessage.css';
import { TEXT } from '../../content/text';
import { FaArrowRight } from 'react-icons/fa';

import mdImage from "../../assets/Homepage/midimage.png";

const MDMessage = ({ lang = 'en' }) => {
  if (!TEXT.md) return null;

  const t = TEXT.md;
  const localize = (obj) => obj[lang] || obj['en'];

  return (
    <section className="md-section">
      <div className="md-content-wrapper">
        <h2 className="md-heading">{localize(t.heading)}</h2>
        <p className="md-subheading">
  {TEXT.md.subheading[lang]}
</p>


        <div className="md-card-container">
          <div className="md-profile-card md-animate-left">
            <img
              src={mdImage}
              alt={localize(t.photoAlt)}
              className="md-photo"
            />
            <h4 className="director-name">{localize(t.name)}</h4>
            <p className="director-role">{localize(t.role)}</p>
          </div>

          <div className="md-message-text md-animate-right">
            <span className="quote-icon">"</span>

          <p className="message-paragraph">
  {localize(t.p1)} {localize(t.p2)}
</p>


            <a href="#" className="message-link">
              {localize(t.button)} <FaArrowRight className="link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MDMessage;
