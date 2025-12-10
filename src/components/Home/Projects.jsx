import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { TEXT } from '../../content/text';

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
  1: project1, 2: project2, 3: project3,
  4: project4, 5: project5, 6: project6,
  7: project7, 8: project8, 9: project9,
};

// Pillar ID ranges per status
const PILLAR_RANGES = {
  Ongoing: [1, 3],
  Active: [4, 6],
  Completed: [7, 9],
};

const Projects = ({ lang = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState('Ongoing');

  if (!TEXT.projects) return <div>Error: Project data not found</div>;

  const t = TEXT.projects.filters;
  const localize = (obj) => obj[lang] || obj.en;
  const localizeCard = (card, key) => localize(card[key]);
 const pillars = TEXT.projects.pillars;
  // Auto-scroll filter
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFilter(prev => {
        const index = FILTER_STATUSES.indexOf(prev);
        return FILTER_STATUSES[(index + 1) % FILTER_STATUSES.length];
      });
    }, SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const filteredCards = TEXT.projects.cards
    .filter(c => c.status === activeFilter)
    .map(c => ({
      ...c,
      image: projectImages[c.id] || c.image,
      currentStatusText: localize(t[c.status.toLowerCase()]),
    }));

  // Get all 3 pillars for current status
  const getCurrentPillars = () => {
    const [start, end] = PILLAR_RANGES[activeFilter];
    return TEXT.projects.pillars.filter(p => p.id >= start && p.id <= end);
  };

  return (
    <section className="projects-section" id="projects">

      {/* FILTER BUTTONS */}
      <div className="project-top-section">
        <div className="project-filters">
          {FILTER_STATUSES.map(status => (
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
  <div className="pillar-slide-container">
    {pillars
      .filter((p) => {
        // Each pillar is grouped by ID: 1-3 Ongoing, 4-6 Active, 7-9 Completed
        if (activeFilter === "Ongoing") return p.id <= 3;
        if (activeFilter === "Active") return p.id >= 4 && p.id <= 6;
        if (activeFilter === "Completed") return p.id >= 7 && p.id <= 9;
        return false;
      })
      .map((pillar) => (
        <div className="pillar-item" key={pillar.id}>
          <p className="pillar-text">{localize(pillar)}</p>
          <a href="#" className="pillar-link">
            {localize(t.knowMore)}
          </a>
        </div>
      ))}
  </div>
</div>
      </div>

      {/* SECTION HEADINGS */}
      <div className="projects-heading-group">
        <p className="projects-subheading">{localize(t.subheading)}</p>
        <h3 className="projects-main-heading">{localize(t.mainHeading)}</h3>
      </div>

      {/* PROJECT CARDS */}
      <div className="project-cards-grid">
        {filteredCards.map(card => (
          <div className="project-card" key={card.id}>
            <div className="card-image-wrapper">
              <img src={card.image} alt={localizeCard(card, 'title')} className="card-image" />
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
                <div className="progress-bar-fill" style={{ width: `${card.progress}%` }} />
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
