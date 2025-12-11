import React from 'react';
import './Footer.css';
import { TEXT } from '../../content/text'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = ({ lang = 'en' }) => {
  if (!TEXT.footer) return null;

  const t = TEXT.footer;
  const localize = (obj) => obj[lang] || obj['en'];

  // Helper to get localized lists from TEXT.js
  const getLinks = (key) => localize(t[key]);

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">

        {/* --- Column 1: Branding and Description --- */}
        <div className="footer-col footer-branding">
          <h3 className="footer-title">{localize(t.orgLine).split(' (')[0]}</h3>
          <p className="branding-tagline">
            Leading Karnataka's waste management initiatives
            towards a sustainable and cleaner future for all citizens.
          </p>
          {/* Quick links list is styled as part of branding in the image */}
          <ul className="footer-list">
            <li className="list-heading">Quick Links</li>
            {getLinks('quickLinks').map((link, index) => (
              <li key={index}>
                <a href={`#link-${index}`} className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Column 2: Important Links (Policies) --- */}
        <div className="footer-col footer-links-group">
          <h4 className="footer-title-small">{localize(t.policiesHeading)}</h4>
          <ul className="footer-list">
            {getLinks('policies').map((link, index) => (
              <li key={index}>
                <a href={`#policy-${index}`} className="footer-link">{link}</a>
              </li>
            ))}
          </ul>

          <h4 className="footer-title-small footer-accessibility-title">{localize(t.accessHeading)}</h4>
          <ul className="footer-list">
            {getLinks('accessLinks').map((link, index) => (
              <li key={index}>
                <a href={`#access-${index}`} className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Column 3: Disclaimer and Credits --- */}
        <div className="footer-col footer-contact">
          <h4 className="footer-title-small">Contact Us</h4>
          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>
                Bengaluru Solid Waste Management Limited, Vasanth Nagar, Bengaluru
              </span>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <span>+91-11-2436-0721</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@bswml.net" className="footer-link">info@bswml.net</a>
            </li>
          </ul>

          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      {/* --- Footer Bottom Bar --- */}
      <div className="footer-bottom">
        <div className="copyright-info">
          © 2025 {localize(t.orgLine).split(' (')[0]}. All rights reserved.
        </div>
        <div className="disclaimer-info">
            <p className="disclaimer-text-full">
                {localize(t.ownedLine)} | {localize(t.creditsLine)}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;