import React from 'react';
import './MDMessage.css';
import { TEXT } from '../../content/text'; 
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa'; // Icon for the quote and button

// Placeholder for MD image (Assuming the path from your previous context)
const mdImage = 'src/assets/Homepage/midimage.png'; 

const MDMessage = ({ lang = 'en' }) => {
  if (!TEXT.md) return null;
  const t = TEXT.md;
  const localize = (obj) => obj[lang] || obj['en'];

  return (
    <section className="md-section">
      <div className="md-content-wrapper">
        {/* Heading and Subheading are combined here for context */}
        <h2 className="md-heading">{localize(t.heading)}</h2>
        <p className="md-subheading">A vision for a cleaner, greener India</p> 
        {/* Subheading text is hardcoded as it wasn't in TEXT.md, but present in the image. */}
        
        <div className="md-card-container">
          
          {/* Left: Profile Card (Animated) */}
          <div className="md-profile-card md-animate-left">
            {/* [Image of M. Maheshwar Rao, IAS, Managing Director] */}
            <img src={mdImage} alt={localize(t.photoAlt)} className="md-photo" />
            <h4 className="director-name">{localize(t.name)}</h4>
            <p className="director-role">{localize(t.role)}</p>
          </div>

          {/* Right: Message Text (Animated) */}
          <div className="md-message-text md-animate-right">
            
            <p className="message-paragraph">{localize(t.p1)}</p>
            <p className="message-paragraph">{localize(t.p2)}</p>
            <a href="#" className="message-link">
              {localize(t.button)} <FaArrowRight className="link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MDMessage;