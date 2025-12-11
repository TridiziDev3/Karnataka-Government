import React from 'react';
import './Media.css';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { IoDocumentText, IoStar } from 'react-icons/io5';

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
        desc: { en: 'National Waste Management Authority today launched an ambitious campaign to achieve zero waste across 100 smart cities by 2030.' },
        button: { en: 'Read Full Story' },
        link: '#',
      },
      {
        category: { en: 'Achievement' },
        categoryColor: { en: 'green' },
        date: { en: 'Nov 20, 2024' },
        title: { en: 'India Wins UN Environment Award' },
        desc: { en: 'NWMA’s integrated waste management approach has been recognized by the UN Environment Programme.' },
        button: { en: 'Read Full Story' },
        link: '#',
      },
    ]
  }
};

const getColorClass = (color) => {
  switch (color) {
    case 'blue': return 'media-blue';
    case 'green': return 'media-green';
    default: return 'media-default';
  }
};

const getCategoryIcon = (category) => {
  if (category === 'Press Release') return IoDocumentText;
  if (category === 'Achievement') return IoStar;
  return null;
};

const Media = ({ lang = 'en' }) => {
  if (!TEXT.mediaCenter || !TEXT.mediaCenter.cards) return null;

  const t = TEXT.mediaCenter;
  const localize = (obj) => obj[lang] || obj['en'];

  return (
    <section className="media-section" aria-labelledby="media-heading">
      <div className="media-center-content">
        <div className="media-header-group">
          <div className="latest-updates-badge">{localize(t.latestUpdateBadge)}</div>
          <h2 id="media-heading" className="media-heading">{localize(t.heading)}</h2>
          <p className="media-subheading">{localize(t.subheading)}</p>
        </div>

        <div className="media-cards-grid">
          {t.cards.map((card, index) => {
            const colorClass = getColorClass(localize(card.categoryColor));
            const CategoryIcon = getCategoryIcon(localize(card.category));
            return (
              <div
                key={index}
                className={`media-card ${colorClass}`}
                style={{ animationDelay: `${index * 0.09}s` }}
              >
                <div className="card-top-row">
                  <div className="category-badge">
                    {CategoryIcon && <CategoryIcon className="category-icon" />}
                    {localize(card.category)}
                  </div>
                  <div className="date-info">
                    <FaCalendarAlt className="date-icon" />
                    {localize(card.date)}
                  </div>
                </div>

                <h3 className="card-title">{localize(card.title)}</h3>
                <p className="card-description">{localize(card.desc)}</p>

                <a href={card.link} className={`read-full-button ${colorClass}`}>
                  {localize(card.button)} <FaArrowRight className="button-arrow" />
                </a>
              </div>
            );
          })}
        </div>

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
