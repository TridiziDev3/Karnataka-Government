import React from "react";
import "./Footer.css";
import { TEXT } from "../../content/text";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({ lang = "en" }) => {
  if (!TEXT.footer) return null;

  const t = TEXT.footer;
  const localize = (obj) => obj?.[lang] || obj?.en || "";
  const getLinks = (key) => localize(t[key]) || [];

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">

        {/* ===== COLUMN 1 ===== */}
        <div className="footer-col footer-brand">
          <h3 className="footer-brand-title">
            {localize(t.orgLine).split(" (")[0]}
          </h3>
          <p className="footer-brand-desc">
            Leading Karnataka's waste management initiatives
            towards a sustainable and cleaner future for all citizens.
          </p>
        </div>

        {/* ===== COLUMN 2 ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            {getLinks("quickLinks").map((link, index) => (
              <li key={index}>
                <a href="#" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 3 ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {localize(t.policiesHeading)}
          </h4>
          <ul className="footer-list">
            {getLinks("policies").map((link, index) => (
              <li key={index}>
                <a href="#" className="footer-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 4 ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>

          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>
                Bengaluru Solid Waste Management Limited,
                Vasanth Nagar, Bengaluru
              </span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+91-11-2436-0721</span>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:info@bswml.net" className="footer-link">
                info@bswml.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="footer-bottom">
  <div className="copyright-info">
    © 2025 Bengaluru Solid Waste Management Limited. All rights reserved.
  </div>

  <div className="footer-socials">
    <a href="#"><FaFacebookF /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaLinkedinIn /></a>
    <a href="#"><FaYoutube /></a>
  </div>
</div>
    </footer>
  );
};

export default Footer;
