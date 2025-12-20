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
  const getList = (key) => localize(t[key]) || [];

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">

        {/* ===== COLUMN 1 : BRAND ===== */}
        <div className="footer-col footer-brand">
          <h3 className="footer-brand-title">
            {localize(t.orgLine)}
          </h3>

          <p className="footer-brand-desc">
            {localize(t.tagline)}
          </p>
        </div>

        {/* ===== COLUMN 2 : QUICK LINKS ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {localize(t.quickLinksHeading)}
          </h4>

          <ul className="footer-list">
            {getList("quickLinks").map((link, index) => (
              <li key={index}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 3 : POLICIES ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {localize(t.policiesHeading)}
          </h4>

          <ul className="footer-list">
            {getList("policies").map((link, index) => (
              <li key={index}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== COLUMN 4 : CONTACT ===== */}
        <div className="footer-col">
          <h4 className="footer-heading">
            {localize(t.contactHeading)}
          </h4>

          <ul className="footer-contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>{localize(t.contact.address)}</span>
            </li>

            <li>
              <FaPhoneAlt />
              <span>{localize(t.contact.phone)}</span>
            </li>

            <li>
              <FaEnvelope />
              <a
                href={`mailto:${localize(t.contact.email)}`}
                className="footer-link"
              >
                {localize(t.contact.email)}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer-bottom">
        <div className="copyright-info">
          {localize(t.copyrightLine)}
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
