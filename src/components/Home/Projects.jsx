import React, { useState, useEffect } from 'react';
import './Projects.css';

import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { TEXT } from '../../content/text';

// Auto-scroll order
const FILTER_STATUSES = ['Ongoing', 'Active', 'Completed'];
const SCROLL_INTERVAL = 3000;

import project1 from "../../assets/Homepage/Rectangle 34625672.png";
import project2 from "../../assets/Homepage/Rectangle 34625677.png";

import project3 from "../../assets/Homepage/Rectangle 34625673.png";

import project4 from "../../assets/Homepage/Rectangle 34625674.png";

import project5 from "../../assets/Homepage/Rectangle 34625675.png";
import project6 from "../../assets/Homepage/Rectangle 34625672.png";

import project7 from "../../assets/Homepage/Rectangle 34625676.png";

import project8 from "../../assets/Homepage/Rectangle 34625677.png";
import project9 from "../../assets/Homepage/Rectangle 34625672.png";



const projectImages = {
  1: 'src/assets/Homepage/Rectangle 34625672.png',
  2: 'src/assets/Homepage/Rectangle 34625677.png',
  3: 'src/assets/Homepage/Rectangle 34625674.png',
  4: 'src/assets/Homepage/Rectangle 34625673.png',
  5: 'src/assets/Homepage/Rectangle 34625675.png',
  6: 'src/assets/Homepage/Rectangle 34625672.png',
  7: 'src/assets/Homepage/Rectangle 34625672.png',
  8: 'src/assets/Homepage/Rectangle 34625676.png',
  9: 'src/assets/Homepage/Rectangle 34625677.png',
};

const Projects = ({ lang = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState('Ongoing');

  if (!TEXT.projects) {
    return <div>Error: Project data not found in TEXT.js</div>;
  }

  // Localization helpers
  const t = TEXT.projects.filters;
  const localize = (obj) => obj[lang] || obj.en;

  const localizeCard = (card, key) => localize(card[key]);

  // Auto-switch (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFilter((prev) => {
        const index = FILTER_STATUSES.indexOf(prev);
        return FILTER_STATUSES[(index + 1) % FILTER_STATUSES.length];
      });
    }, SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  // Filter 3 cards per status
  const filteredCards = TEXT.projects.cards
    .filter((c) => c.status === activeFilter)
    .map((c) => ({
      ...c,
      image: projectImages[c.id] || c.image,
      currentStatusText: localize(t[c.status.toLowerCase()]),
    }));

  // Pillar slide transform
  const getPillarTransform = () => {
    const index = FILTER_STATUSES.indexOf(activeFilter);
    return `translateX(-${index * 100}%)`;
  };

  const pillars = TEXT.projects.pillars;

  return (
    <section className="projects-section" id="projects">
      
      {/* =============== TOP SECTION (Filters + Pillars) =============== */}
      <div className="project-top-section">

        {/* Filter Buttons */}
        <div className="project-filters">
          {FILTER_STATUSES.map((status) => (
            <button
              key={status}
              className={`filter-tab ${activeFilter === status ? 'tab-active' : ''}`}
              onClick={() => setActiveFilter(status)}
            >
              {localize(t[status.toLowerCase()])}
            </button>
          ))}
        </div>

        {/* PILLARS CAROUSEL */}
        <div className="pillar-carousel-wrapper">
          <div
            className="project-pillars-row"
            style={{ transform: getPillarTransform() }}
          >
            {FILTER_STATUSES.map((status, index) => {
              const start = index * 3;
              const group = pillars.slice(start, start + 3);

              return (
                <div className="pillar-slide-container" key={status}>
                  {group.map((pillar) => (
                    <div className="pillar-item" key={pillar.id}>
                      <p className="pillar-text">{localize(pillar)}</p>
                      <a href="#" className="pillar-link">
                        {localize(t.knowMore)}
                      </a>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* =============== END TOP SECTION =============== */}

      {/* Section Heading */}
      <div className="projects-heading-group">
        <p className="projects-subheading">{localize(t.subheading)}</p>
        <h3 className="projects-main-heading">{localize(t.mainHeading)}</h3>
      </div>

      {/* =============== PROJECT CARDS =============== */}
      <div className="project-cards-grid">
        {filteredCards.map((card) => (
          <div className="project-card" key={card.id}>
            
            <div className="card-image-wrapper">
              <img
                src={card.image}
                alt={localizeCard(card, 'title')}
                className="card-image"
              />
              <div className="status-badge">
                <span className="status-circle" />
                {card.currentStatusText}
              </div>
            </div>

            <div className="card-content-body">
              <h4 className="card-title">{localizeCard(card, 'title')}</h4>

              <div className="card-location">
                <FaMapMarkerAlt className="location-icon" />
                <span>{localizeCard(card, 'location')}</span>
              </div>

              <p className="progress-label">{localize(t.progressLabel)}</p>

              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${card.progress}%` }}
                ></div>
                <span className="progress-percent">{card.progress}%</span>
              </div>

              <a href={`#project-${card.id}`} className="details-button">
                {localize(t.viewDetails)}
                <FaArrowRight className="details-arrow" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
