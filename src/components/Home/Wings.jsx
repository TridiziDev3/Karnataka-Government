import React from 'react';
import './Wings.css';
// import { TEXT } from '../../content/text'; // Assuming this imports your data

// --- Placeholder TEXT Data (Ensures description is available) ---
const TEXT = {
    wings: {
        mainHeading: { en: 'Organizational Wings' },
        subheading: { en: 'Specialized departments driving our mission' },
        items: {
            en: [
                { 
                    title: 'IT Cell', 
                    description: 'Digital infrastructure, technology implementation, and IT systems management for efficient waste tracking and monitoring',
                    colorClass: 'blue' // New property to determine icon color/style
                },
                { 
                    title: 'Technical Wing', 
                    description: 'Project planning, engineering design, technical implementation, and quality assurance of waste management facilities',
                    colorClass: 'green'
                },
                { 
                    title: 'Administration', 
                    description: 'Administrative operations, human resources, policy coordination, and overall organizational management',
                    colorClass: 'orange'
                },
            ]
        }
    }
};
// -----------------------------------------------------------------


// Mapping English titles to static details (Image/Icon Component and color class)
// Note: Since you are using image imports, we'll map the image path and provide the color class for the background.
const wingDetails = {
    "IT Cell": {
        img: itImage,
        colorClass: 'blue', 
    },
    "Technical Wing": {
        img: technicalImage,
        colorClass: 'green',
    },
    "Administration": {
        img: adminImage,
        colorClass: 'orange',
    },
};

// Keys used to look up static details (English keys from TEXT.js)
const ENGLISH_KEYS = ["IT Cell", "Technical Wing", "Administration"];

const Wings = ({ lang = 'en' }) => {
    if (!TEXT.wings || !TEXT.wings.items) return null;

    const t = TEXT.wings;
    const localize = (obj) => obj[lang] || obj['en'];

    // 1. Get the fully localized array of items
    const localizedItems = localize(t.items); 

    // 2. Map static details (image/color) using the English key for index matching
    const wingsData = localizedItems.slice(0, 3).map((localizedItem, index) => {
        const englishKey = ENGLISH_KEYS[index];
        const details = wingDetails[englishKey]; // Get the static image/colorClass
        
        // Use the localized title/description and the static image/color class
        return {
            title: localizedItem.title,
            description: localizedItem.description,
            img: details.img,
            colorClass: details.colorClass,
        };
    });

    return (
        <section className="wings-section">
            <div className="wings-header-container">
                <h2 className="wings-main-heading">{localize(t.mainHeading)}</h2>
                <p className="wings-subheading">
                    {localize(t.subheading)}
                </p>
            </div>

            <div className="wings-cards-grid">
                {wingsData.map((card, index) => (
                    <div
                        key={index}
                        // Use the colorClass for background/accent styling
                        className={`wing-card wing-animate-fade-up ${card.colorClass}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* 1. Icon Wrapper (Left Side) */}
                        <div className="wing-icon-wrapper">
                            <img src={card.img} alt={card.title} className="wing-image" />
                        </div>

                        {/* 2. Text Content (Right Side) */}
                        <div className="wing-text-content">
                            <h3 className="wing-card-title">{card.title}</h3> 
                            <p className="wing-card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Wings;