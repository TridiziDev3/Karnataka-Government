import React, { useState } from 'react';
import './Gallery.css';
import { TEXT } from '../../content/text'; 
import { FaArrowRight } from 'react-icons/fa';

// Placeholder images array (match the number of items needed for the scroll effect)
const galleryImages = [
  'src/assets/Homepage/Rectangle 34625672.png',
  'src/assets/Homepage/Rectangle 34625673.png',
  'src/assets/Homepage/Rectangle 34625674.png',
  'src/assets/Homepage/Rectangle 34625675.png',
  'src/assets/Homepage/Rectangle 34625676.png',
  'src/assets/Homepage/Rectangle 34625672.png',
];

const Gallery = ({ lang = 'en' }) => {
  // Use the nested 'gallery' object inside the main 'gallery' key
  if (!TEXT.gallery || !TEXT.gallery.gallery) return null;

  const t = TEXT.gallery.gallery;
  const localize = (obj) => obj[lang] || obj['en'];

  // --- FIX: Create an array of 6 items for mapping ---
  // Get items from content, or create empty objects if fewer than 6 exist.
  const contentItems = localize(t.items) || [];
  const desiredLength = 6;
  const itemsToMap = Array.from({ length: desiredLength }, (_, index) => {
    // Use existing content item, or an empty object if index is out of bounds
    return contentItems[index] || {}; 
  });
  
  // Combine image paths with text data 
  const displayItems = itemsToMap.map((item, index) => ({
    ...item,
    // Always use the placeholder image based on the index
    image: galleryImages[index % galleryImages.length] || 'path-to-assets/default-gallery.jpg',
  }));

  return (
    <section className="gallery-section">
      
      {/* Header with View All Link */}
      <div className="gallery-header">
        <div>
          <h2 className="gallery-main-heading">{localize(t.title)}</h2>
          {/* Subheading is static in the image, so we add a hardcoded text here */}
          <p className="gallery-subheading">Visual documentation of our initiatives</p>
        </div>
        <a href="#" className="view-all-photos-link">
          {/* Using a generic View All Photos label for the link */}
          View All Photos <FaArrowRight className="view-all-icon" />
        </a>
      </div>

      {/* Optional: Tab Section (for future use, if needed) 
      <div className="gallery-tabs">
        {localize(t.tabs).map(tab => (
            <button 
                key={tab} 
                className={`gallery-tab ${activeTab === tab ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
        ))}
      </div>
      */}

      {/* Main Image Carousel */}
      <div className="gallery-carousel-wrapper">
        <div className="gallery-image-scroll">
          {displayItems.map((item, index) => (
            <div key={index} className="gallery-card">
              {/* REMOVED: Conditional class and overlay check */}
              <img 
                src={item.image} 
                alt={item.title || `Gallery Image ${index + 1}`} 
                className="gallery-image" // The image class is now simple
              />
              {/* REMOVED: The darkened-overlay element */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;