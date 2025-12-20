import React, { useEffect, useRef } from 'react';
import './Wings.css';
import itImage from '../../assets/Container.png';
import technicalImage from '../../assets/Container1.png';
import adminImage from '../../assets/Container2.png';
import { TEXT } from '../../content/text';
const wingDetails = [
  { img: itImage, colorClass: 'blue' },
  { img: technicalImage, colorClass: 'green' },
  { img: adminImage, colorClass: 'orange' },
];

const Wings = ({ lang = 'en' }) => {
  if (!TEXT?.wings?.items) return null;

  const t = TEXT.wings;

  // ✅ get correct language items (fallback to English)
  const localizedItems = t.items[lang] || t.items.en;

  // ✅ combine text + static details safely
  const wingsData = localizedItems.slice(0, 3).map((item, index) => ({
    title: item.title,
    description: item.description,
    img: wingDetails[index].img,
    colorClass: wingDetails[index].colorClass,
  }));

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
      <div className="wings-inner">

        <div className="wings-header-container">
          <h2 className="wings-main-heading">
            {t.mainHeading[lang] || t.mainHeading.en}
          </h2>
          <p className="wings-subheading">
            {t.subheading[lang] || t.subheading.en}
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
