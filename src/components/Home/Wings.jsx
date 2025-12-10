import React from 'react';
import './Wings.css';
// import { TEXT } from '../../content/text'; // Assuming this imports your data

// Import Images from assets
// NOTE: Ensure these imports point to your actual image files
import itImage from '../../assets/Container.png'; 
import technicalImage from '../../assets/Container1.png';
import adminImage from '../../assets/Container2.png';

// --- Placeholder TEXT Data (with descriptions) ---
const TEXT = {
    wings: {
        mainHeading: { en: 'Organizational Wings' },
        subheading: { en: 'Specialized departments driving our mission' },
        items: {
            en: [
                { 
                    title: 'IT Cell', 
                    description: 'Digital infrastructure, technology implementation, and IT systems management for efficient waste tracking and monitoring',
                },
                { 
                    title: 'Technical Wing', 
                    description: 'Project planning, engineering design, technical implementation, and quality assurance of waste management facilities',
                },
                { 
                    title: 'Administration', 
                    description: 'Administrative operations, human resources, policy coordination, and overall organizational management',
                },
            ]
        }
    }
};
// -----------------------------------------------------------------


// Mapping English titles to static details (Image path and corresponding color class)
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

    const localizedItems = localize(t.items); 

    const wingsData = localizedItems.slice(0, 3).map((localizedItem, index) => {
        const englishKey = ENGLISH_KEYS[index];
        const details = wingDetails[englishKey];
        
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
                        // Apply the color class for icon background
                        className={`wing-card wing-animate-fade-up ${card.colorClass}`} 
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* 1. Icon Wrapper (Left Side with Colored BG) */}
                        <div className="wing-icon-wrapper">
                            <img src={card.img} alt={card.title} className="wing-image" />
                        </div>

                        {/* 2. Text Content (Right Side) */}
                        <div className="wing-text-content">
                            <h3 className="wing-card-title">{card.title}</h3> 
                            {/* 🔥 DESCRIPTION ELEMENT */}
                            <p className="wing-card-description">{card.description}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Wings;