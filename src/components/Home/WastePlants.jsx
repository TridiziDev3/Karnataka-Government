import React, { useRef, useEffect } from 'react';
import './WastePlants.css';
import { TEXT } from '../../content/text';
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { IoIosNavigate } from 'react-icons/io';

import plantImage1 from "../../assets/Homepage/Rectangle 34625677.png";
import plantImage3 from "../../assets/Homepage/Image 1.png";
import plantImage2 from "../../assets/Homepage/Image 2.png";

const plantImages = [plantImage1, plantImage2, plantImage3];

const WastePlants = ({ lang = 'en' }) => {
  if (!TEXT.wastePlants || !TEXT.wastePlants.cards || TEXT.wastePlants.cards.length === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Waste Plant Data Loading Error.</div>;
  }

  const t = TEXT.wastePlants;
  const localize = (obj) => (obj && obj[lang]) ? obj[lang] : (obj && obj['en'] ? obj['en'] : 'N/A');

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.plant-card');
      const gap = parseFloat(getComputedStyle(scrollRef.current).getPropertyValue('gap')) || 30;
      const step = Math.round((card?.getBoundingClientRect().width || 320) + gap);
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, { root: container, rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    const cards = container.querySelectorAll('.plant-card');
    cards.forEach(card => io.observe(card));

    return () => io.disconnect();
  }, []);

  return (
    <section className="plants-section">
      <div className="plants-header">
        <div>
          <h2 className="plants-heading">{localize(t.heading)}</h2>
          <p className="plants-subheading">{localize(t.subheading)}</p>
        </div>

        <a href="#" className="view-all-link" aria-label="View all plants">
          {localize(t.viewAll)}
          <IoIosNavigate className="view-all-icon" />
        </a>
      </div>

      <div className="plants-carousel-container">
        <button className="scroll-button scroll-left" onClick={() => scroll('left')} aria-label="Scroll left">‹</button>

        <div className="plants-cards-scroll" ref={scrollRef}>
          {t.cards.map((card, index) => (
            <article key={index} className="plant-card" tabIndex="0" aria-labelledby={`plant-title-${index}`}>
              <div className="card-image-wrapper">
                <div className="plant-icon-badge"><FaLeaf /></div>
                <img
                  src={plantImages[index % plantImages.length]}
                  alt={localize(card.title)}
                  className="plant-card-image"
                />
                <span className="operational-badge">Operational</span>
              </div>

              <div className="plant-card-content">
                <h4 id={`plant-title-${index}`} className="plant-card-title">{localize(card.title)}</h4>

                <div className="plant-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{localize(card.location)}</span>
                </div>

                <div className="plant-stats-row">
                  <div className="plant-stat-box type-box">
                    <div className="stat-value">
                      <span className="stat-label-inside">Type</span>
                      <span className="stat-text">{localize(card.type)}</span>
                    </div>
                  </div>

                  <div className="plant-stat-box capacity-box">
                    <div className="stat-value">
                      <span className="stat-label-inside">Capacity</span>
                      <span className="stat-text">{localize(card.capacity)}</span>
                    </div>
                  </div>
                </div>

                <div className="plant-output-row output-box">
                  <p className="stat-label">Compost Output</p>
                  <div className="stat-value">{localize(card.output)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="scroll-button scroll-right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
      </div>
    </section>
  );
};

export default WastePlants;
