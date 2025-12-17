import React, { useRef, useEffect } from 'react';
import './WastePlants.css';
import { TEXT } from '../../content/text';
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { IoIosNavigate } from 'react-icons/io';

import plantImage1 from "../../assets/Homepage/Rectangle 34625677.png";
import plantImage2 from "../../assets/Homepage/Image 2.png";
import plantImage3 from "../../assets/Homepage/Image 1.png";

const plantImages = [plantImage1, plantImage2, plantImage3];

const WastePlants = ({ lang = 'en' }) => {
  if (!TEXT.wastePlants || !TEXT.wastePlants.cards?.length) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Waste Plant Data Loading Error.</div>;
  }

  const t = TEXT.wastePlants;
  const localize = (obj) =>
    obj?.[lang] || obj?.['en'] || 'N/A';

  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  /* ---------- MANUAL SCROLL ---------- */
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector('.plant-card');
    const gap =
      parseFloat(getComputedStyle(scrollRef.current).gap) || 30;

    const step =
      (card?.getBoundingClientRect().width || 320) + gap;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const maxScroll =
          container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }, 3000); // ⏱ 3 seconds
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollRef.current);
    };

    startAutoScroll();

    /* pause on hover */
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);

    return () => {
      stopAutoScroll();
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  /* ---------- REVEAL ANIMATION ---------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
      },
      { root: container, threshold: 0.15 }
    );

    container.querySelectorAll('.plant-card').forEach((card) =>
      io.observe(card)
    );

    return () => io.disconnect();
  }, []);

  return (
    <section className="plants-section">
      <div className="plants-header">
        <div>
          <h2 className="plants-heading">{localize(t.heading)}</h2>
          <p className="plants-subheading">{localize(t.subheading)}</p>
        </div>

        <a href="#" className="view-all-link">
          {localize(t.viewAll)}
          <IoIosNavigate className="view-all-icon" />
        </a>
      </div>

      <div className="plants-carousel-container">
        <button
          className="scroll-button scroll-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="plants-cards-scroll" ref={scrollRef}>
          {t.cards.map((card, index) => (
            <article key={index} className="plant-card" tabIndex="0">
              <div className="card-image-wrapper">
                <div className="plant-icon-badge">
                  <FaLeaf />
                </div>

                <img
                  src={plantImages[index % plantImages.length]}
                  alt={localize(card.title)}
                  className="plant-card-image"
                />

                <span className="operational-badge">Operational</span>
              </div>

              <div className="plant-card-content">
                <h4 className="plant-card-title">
                  {localize(card.title)}
                </h4>

                <div className="plant-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{localize(card.location)}</span>
                </div>

                <div className="plant-stats-row">
                  <div className="plant-stat-box type-box">
                    <div className="stat-value">
                      <span className="stat-label-inside">Type</span>
                      <span className="stat-text">
                        {localize(card.type)}
                      </span>
                    </div>
                  </div>

                  <div className="plant-stat-box capacity-box">
                    <div className="stat-value">
                      <span className="stat-label-inside">Capacity</span>
                      <span className="stat-text">
                        {localize(card.capacity)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="plant-output-row output-box">
                  <p className="stat-label">Compost Output</p>
                  <div className="stat-value">
                    {localize(card.output)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          className="scroll-button scroll-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default WastePlants;
