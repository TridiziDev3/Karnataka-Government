import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import the TEXT object (assuming this path is correct based on prior context)
import { TEXT } from '../../content/text';

// Placeholder Images Array for Carousel
// Use relative paths assuming images are in src/assets/
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";

import hero3 from "../../assets/hero3.png";




const carouselImages = [
hero1 , hero2, hero3
];

// Carousel scroll interval is now 2000ms (2 seconds)
const SCROLL_INTERVAL = 2000; 

const Hero = ({ lang = 'en' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = TEXT.hero;

  // Effect for the automatic carousel scroll (2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        (prevIndex + 1) % carouselImages.length
      );
    }, SCROLL_INTERVAL);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); 

  // Get the localized text
  const title = t.title[lang];
  const text = t.text[lang];
  const buttonLabel = t.button[lang];

  // Get the current image URL
  const currentImageUrl = carouselImages[currentImageIndex];

  return (
    <div className="hero-section">
      
      {/* Text Content Area */}
      <div className="hero-content">
        <h2 className="hero-title hero-animate-slide-up">{title}</h2>
        <p className="hero-text hero-animate-slide-up hero-animate-delay-1">{text}</p>
        
        <div className="hero-actions hero-animate-slide-up hero-animate-delay-2">
          {/* Contact Button (Outline Gold) */}
          <button className="contact-button contact-button-ui-match">
            Contact Us
          </button>
          
          {/* Know More Button (Solid Gold) */}
          <button className="know-more-button know-more-button-ui-match">
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* Image Carousel Area (Right) */}
     <div className="hero-image-container hero-rect-ui">
        <div 
          key={currentImageIndex} 
          className="hero-carousel-image"
          style={{ backgroundImage: `url(${currentImageUrl})` }}
        >
        </div>
        
        {/* Carousel Dots removed as requested */}
      </div>
    </div>
  );
};

export default Hero;