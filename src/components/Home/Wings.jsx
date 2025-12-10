import React from 'react';
import './Wings.css';
import { TEXT } from '../../content/text';

// Import Images from assets
import itImage from '../../assets/Container.png';
import technicalImage from '../../assets/Container1.png';
import adminImage from '../../assets/Container2.png';

// Mapping English titles to static details (like images and color)
// IMPORTANT: The key MUST match the English title in the TEXT.js file
const wingDetails = {
  "IT Cell": {
    img: itImage,
    color: '#F97316',
  },
  "Technical Wing": {
    img: technicalImage,
    color: '#F97316',
  },
  "Administration": {
    img: adminImage,
    color: '#F97316',
  },
};

// Keys used to look up static details (English keys from TEXT.js)
const ENGLISH_KEYS = ["IT Cell", "Technical Wing", "Administration"];

const Wings = ({ lang = 'en' }) => {
  if (!TEXT.wings || !TEXT.wings.items) return null;

  const t = TEXT.wings;
  
  // Localization helper function
  const localize = (obj) => obj[lang] || obj['en'];

  // 1. Get the fully localized array of items
  const localizedItems = localize(t.items); 

  // 2. Map static details (image/color) using the English key for index matching
  const wingsData = localizedItems.slice(0, 3).map((localizedItem, index) => {
    // Get the static English details using the index to look up the English key
    const englishKey = ENGLISH_KEYS[index];
    const details = wingDetails[englishKey];

    return {
      // Use the localized title and description directly from the mapped item
      title: localizedItem.title,
      description: localizedItem.description,
      // Use the static details
      img: details.img,
      color: details.color,
    };
  });

  return (
    <section className="wings-section">
      <div className="wings-header-container">
        {/* CORRECT: Localizing header text */}
        <h2 className="wings-main-heading">{localize(t.mainHeading)}</h2>
        <p className="wings-subheading">
          {localize(t.subheading)}
        </p>
      </div>

      <div className="wings-cards-grid">
        {wingsData.map((card, index) => (
          <div
            key={index}
            className="wing-card wing-animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Thin Color Line */}
            <div
              className="card-top-accent"
              style={{ backgroundColor: card.color }}
            />

            {/* Image Wrapper WITHOUT background color */}
            <div className="wing-icon-wrapper">
              <img src={card.img} alt={card.title} className="wing-image" />
            </div>

            {/* CORRECT: Title is now localized */}
            <h3 className="wing-card-title">{card.title}</h3> 
            
            {/* CORRECT: Description is now localized */}
            <p className="wing-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wings;