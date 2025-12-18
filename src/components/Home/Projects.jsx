import React, { useState, useEffect } from "react";
import "./Projects.css";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { TEXT } from "../../content/text";

/* 🔥 STATUS ICON IMPORT */
import statusIcon from "../../assets/Icon.png";

import project1 from "../../assets/Homepage/Rectangle 34625672.png";
import project2 from "../../assets/Homepage/Rectangle 34625677.png";
import project3 from "../../assets/Homepage/Rectangle 34625673.png";
import project4 from "../../assets/Homepage/Rectangle 34625674.png";
import project5 from "../../assets/Homepage/Rectangle 34625675.png";
import project6 from "../../assets/Homepage/Rectangle 34625672.png";
import project7 from "../../assets/Homepage/Rectangle 34625676.png";
import project8 from "../../assets/Homepage/Rectangle 34625677.png";
import project9 from "../../assets/Homepage/Rectangle 34625672.png";

import leftVector from "../../assets/vector-left.png";
import rightVector from "../../assets/vector-right.png";

const FILTER_STATUSES = ["Ongoing", "Active", "Completed"];
const SCROLL_INTERVAL = 3000;

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
  9: project9,
};

const Projects = ({ lang = "en" }) => {
  const [activeFilter, setActiveFilter] = useState("Ongoing");

  if (!TEXT || !TEXT.projects)
    return <div className="projects-error">Error: Project data not found</div>;

  const t = TEXT.projects.filters || {};

  const localize = (obj) =>
    typeof obj === "string" ? obj : obj?.[lang] || obj?.en || "";

  const localizeCard = (card, key) =>
    typeof card[key] === "string"
      ? card[key]
      : card[key]?.[lang] || card[key]?.en || "";

  const pillars = TEXT.projects.pillars || [];
  const cardsSource = TEXT.projects.cards || [];

  useEffect(() => {
    const timer = setInterval(() => {
      const index = FILTER_STATUSES.indexOf(activeFilter);
      setActiveFilter(FILTER_STATUSES[(index + 1) % FILTER_STATUSES.length]);
    }, SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [activeFilter]);

  const filteredCards = cardsSource
    .filter(
      (card) =>
        card &&
        (card.status || "").toLowerCase() === activeFilter.toLowerCase()
    )
    .map((card) => ({
      ...card,
      image: projectImages[card.id],
      currentStatusText: localize(t[card.status.toLowerCase()]),
    }));

  return (
    <section className="projects-section" id="projects">
      <div className="project-top-section">
        <div className="project-filters">
          {FILTER_STATUSES.map((status) => (
            <button
              key={status}
              className={`filter-tab ${
                activeFilter === status ? "tab-active" : ""
              }`}
              onClick={() => setActiveFilter(status)}
            >
              {localize(t[status.toLowerCase()]) || status}
            </button>
          ))}
        </div>

        <div className="pillar-carousel-wrapper">
          <img
            src={leftVector}
            alt=""
            aria-hidden="true"
            className="bg-vector bg-vector-left"
          />
          <img
            src={rightVector}
            alt=""
            aria-hidden="true"
            className="bg-vector bg-vector-right"
          />

          <div className="pillar-slide-container">
            {pillars
              .filter((p) => {
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

      <div className="projects-heading-group">
        <p className="projects-subheading">{localize(t.subheading)}</p>
        <h2 className="projects-main-heading">{localize(t.mainHeading)}</h2>
      </div>

      <div className="project-cards-grid">
        {filteredCards.map((card) => (
          <article className="project-card" key={card.id}>
            <div className="card-image-wrapper">
              <img src={card.image} className="card-image" alt="" />

              {/* 🔥 STATUS BADGE WITH ICON */}
              <div className="status-badge">
                <img
                  src={statusIcon}
                  alt=""
                  className="status-icon"
                />
                <span>{card.currentStatusText}</span>
              </div>
            </div>

            <div className="card-content-body">
              <h3 className="card-title">
                {localizeCard(card, "title")}
              </h3>

              <div className="card-location">
                <FaMapMarkerAlt className="location-icon" />
                {localizeCard(card, "location")}
              </div>

              <p className="progress-label">{localize(t.progressLabel)}</p>

              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${card.progress}%` }}
                />
                <span className="progress-percent">
                  {card.progress}%
                </span>
              </div>

              <a href="#" className="details-button">
                {localize(t.viewDetails)}
                <FaArrowRight className="details-arrow" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
