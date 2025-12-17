import React, { useEffect, useRef } from 'react';
import './Wings.css';

import itImage from '../../assets/Container.png';
import technicalImage from '../../assets/Container1.png';
import adminImage from '../../assets/Container2.png';

const TEXT = {
  wings: {
    mainHeading: { en: 'Organizational Wings' },
    subheading: { en: 'Specialized departments driving our mission' },
    items: {
      en: [
        {
          title: 'IT Cell',
          description:
            'Digital infrastructure, technology implementation, and IT systems management for efficient waste tracking and monitoring'
        },
        {
          title: 'Technical Wing',
          description:
            'Project planning, engineering design, technical implementation, and quality assurance of waste management facilities'
        },
        {
          title: 'Administration',
          description:
            'Administrative operations, human resources, policy coordination, and overall organizational management'
        }
      ]
    }
  }
};

const wingDetails = {
  'IT Cell': { img: itImage, colorClass: 'blue' },
  'Technical Wing': { img: technicalImage, colorClass: 'green' },
  'Administration': { img: adminImage, colorClass: 'orange' }
};

const ENGLISH_KEYS = ['IT Cell', 'Technical Wing', 'Administration'];

const Wings = ({ lang = 'en' }) => {
  if (!TEXT.wings || !TEXT.wings.items) return null;

  const t = TEXT.wings;
  const localize = (obj) => (obj && obj[lang]) || (obj && obj['en']) || '';

  const localizedItems = localize(t.items);

  const wingsData = localizedItems.slice(0, 3).map((item, index) => {
    const englishKey = ENGLISH_KEYS[index];
    const details = wingDetails[englishKey];
    return {
      title: item.title,
      description: item.description,
      img: details.img,
      colorClass: details.colorClass
    };
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const cards = container.querySelectorAll('.wing-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wings-section" ref={containerRef}>
      {/* 🔥 IMPORTANT WRAPPER — alignment fix */}
      <div className="wings-inner">

        <div className="wings-header-container">
          <h2 className="wings-main-heading">
            {localize(t.mainHeading)}
          </h2>
          <p className="wings-subheading">
            {localize(t.subheading)}
          </p>
        </div>

        <div className="wings-cards-grid">
          {wingsData.map((card, index) => (
            <article
              key={index}
              className={`wing-card ${card.colorClass}`}
              tabIndex="0"
              aria-labelledby={`wing-title-${index}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="wing-icon-wrapper">
                <img
                  src={card.img}
                  alt={card.title}
                  className="wing-image"
                />
              </div>

              <div className="wing-text-content">
                <h3
                  id={`wing-title-${index}`}
                  className="wing-card-title"
                >
                  {card.title}
                </h3>
                <p className="wing-card-description">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Wings;
