import React from 'react';
import './Media.css';
import { TEXT } from '../../content/text'; 
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { IoDocumentText, IoStar } from 'react-icons/io5';

const Media = ({ lang = 'en' }) => {
  // Assuming the 'mediaCenter' structure is added to TEXT.js
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

  // Helper to get icon based on category
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
                  <div className={`category-badge ${colorClass}`}>
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
                <a href="#" className={`read-full-button ${colorClass}`}>
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