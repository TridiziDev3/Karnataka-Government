import React, { useRef } from 'react';
import './WastePlants.css';
import { TEXT } from '../../content/text'; 
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa'; // Using FaLeaf for the organic waste icon
import { IoIosNavigate } from 'react-icons/io'; 

// Placeholder image (check this path!)

import plantImage1 from "../../assets/Homepage/Rectangle 34625677.png";
import plantImage3 from "../../assets/Homepage/Image 1.png";
import plantImage2 from "../../assets/Homepage/Image 2.png";


const plantImages = [plantImage1, plantImage2, plantImage3];
const WastePlants = ({ lang = 'en' }) => {
    if (!TEXT.wastePlants || !TEXT.wastePlants.cards || TEXT.wastePlants.cards.length === 0) {
        return <div style={{textAlign: 'center', padding: '50px'}}>Waste Plant Data Loading Error.</div>;
    }
    
    const t = TEXT.wastePlants;
    const localize = (obj) => (obj && obj[lang]) ? obj[lang] : (obj && obj['en'] ? obj['en'] : 'N/A');
    
    const scrollRef = useRef(null);

    // Handle manual scrolling of the carousel
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Width of one card + margin
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="plants-section">
            <div className="plants-header">
                <div>
                    <h2 className="plants-heading">{localize(t.heading)}</h2>
                    <p className="plants-subheading">{localize(t.subheading)}</p>
                </div>
                <a href="#" className="view-all-link">
                    {localize(t.viewAll)}
                    <IoIosNavigate className="view-all-icon" />
                </a>
            </div>

            {/* Carousel Scroll Container */}
            <div className="plants-carousel-container">
                
                {/* Navigation Buttons for manual motion */}
               
                
                {/* Plant Cards (Scrollable) */}
                <div className="plants-cards-scroll" ref={scrollRef}>
                    {t.cards.map((card, index) => (
                        <div key={index} className="plant-card">
                            <div className="card-image-wrapper">
                                {/* Top-left green leaf icon */}
                                <div className="plant-icon-badge">
                                    <FaLeaf /> 
                                </div>
                                <img 
  src={plantImages[index % plantImages.length]} 
  alt={localize(card.title)} 
  className="plant-card-image" 
/>
                                <span className="operational-badge">Operational</span>
                            </div>
                            
                            <div className="plant-card-content">
                                <h4 className="plant-card-title">{localize(card.title)}</h4>
                                
                                <div className="plant-location">
                                    <FaMapMarkerAlt className="location-icon" />
                                    <span>{localize(card.location)}</span>
                                </div>
                                
                                <div className="plant-stats-row">
                                    {/* Type Box (Light Blue) */}
                                    <div className="plant-stat-item type-box">
                                        <p className="stat-label">Type</p>
                                        <div className="stat-value">{localize(card.type)}</div>
                                    </div>
                                    {/* Capacity Box (Light Green) */}
                                    <div className="plant-stat-item capacity-box">
                                        <p className="stat-label">Capacity</p>
                                        <div className="stat-value">{localize(card.capacity)}</div>
                                    </div>
                                </div>

                                {/* Output Box (Lightest Green, Full Width) */}
                                <div className="plant-output-row output-box">
                                    <p className="stat-label">Compost Output</p>
                                    <div className="stat-value">{localize(card.output)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WastePlants;