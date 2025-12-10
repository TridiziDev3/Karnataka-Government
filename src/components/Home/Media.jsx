import React from 'react';
import './Media.css';
// NOTE: Assuming this file exists and contains the required data structure.
// This is a placeholder import.
// import { TEXT } from '../../content/text'; 
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
// IoDocumentText and IoStar match the image for Press and Achievement
import { IoDocumentText, IoStar } from 'react-icons/io5'; 

// === PLACEHOLDER TEXT DATA STRUCTURE (For demonstration) ===
const TEXT = {
    mediaCenter: {
        latestUpdateBadge: { en: 'Latest Updates' },
        heading: { en: 'Media Center' },
        subheading: { en: 'Breaking news, press releases, and achievements in waste management' },
        viewAllButton: { en: 'View All Media Updates' },
        cards: [
            {
                category: { en: 'Press Release' },
                categoryColor: { en: 'blue' },
                date: { en: 'Dec 1, 2024' },
                title: { en: 'NWMA Launches National Zero Waste Campaign' },
                desc: { en: 'National Waste Management Authority today launched an ambitious campaign to achieve zero waste across 100 smart cities by 2030, marking a historic milestone in India’s environmental journey.' },
                button: { en: 'Read Full Story' },
                link: '#',
            },
            {
                category: { en: 'Achievement' },
                categoryColor: { en: 'green' },
                date: { en: 'Nov 20, 2024' },
                title: { en: 'India Wins UN Environment Award' },
                desc: { en: 'NWMA’s innovative approach to integrated waste management has been recognized by the United Nations Environment Programme with the prestigious Environment Leadership Award.' },
                button: { en: 'Read Full Story' },
                link: '#',
            },
        ]
    }
};
// ==========================================================

const Media = ({ lang = 'en' }) => {
  if (!TEXT.mediaCenter || !TEXT.mediaCenter.cards) return null;

  const t = TEXT.mediaCenter;
  const localize = (obj) => obj[lang] || obj['en'];

  // Helper to map dynamic color classes
  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'media-blue';
      case 'green': return 'media-green';
      default: return 'media-default';
    }
  };

  // Helper to get icon component based on category text
  const getCategoryIcon = (category) => {
    if (category === 'Press Release') return IoDocumentText;
    if (category === 'Achievement') return IoStar;
    return null;
  };

  return (
    <section className="media-section">
      <div className="media-center-content">

        {/* --- Header Section --- */}
        <div className="media-header-group">
          <div className="latest-updates-badge">
            {localize(t.latestUpdateBadge)}
          </div>
          <h2 className="media-heading">{localize(t.heading)}</h2>
          <p className="media-subheading">{localize(t.subheading)}</p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="media-cards-grid">
          {t.cards.map((card, index) => {
            const colorClass = getColorClass(localize(card.categoryColor));
            const ButtonIcon = getCategoryIcon(localize(card.category));

            return (
              <div key={index} className={`media-card ${colorClass}`}>
                
                {/* Top Section: Category & Date */}
                <div className="card-top-row">
                  <div className={`category-badge`}>
                    {/* Render the Icon component */}
                    {ButtonIcon && <ButtonIcon className="category-icon" />}
                    {localize(card.category)}
                  </div>
                  <div className="date-info">
                    <FaCalendarAlt className="date-icon" />
                    {localize(card.date)}
                  </div>
                </div>

                {/* Main Content */}
                <h3 className="card-title">{localize(card.title)}</h3>
                <p className="card-description">{localize(card.desc)}</p>

                {/* Action Button */}
                <a href={card.link} className={`read-full-button ${colorClass}`}>
                  {localize(card.button)} <FaArrowRight className="button-arrow" />
                </a>
              </div>
            );
          })}
        </div>

        {/* --- Footer Button --- */}
        <div className="media-footer-button">
          <a href="#" className="view-all-media-button">
            {localize(t.viewAllButton)} <FaArrowRight className="button-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;