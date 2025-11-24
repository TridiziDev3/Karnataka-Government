// src/components/Homepage/FooterSection.jsx
import React from "react";
import "../../Styles/Homepage/footerSection.css";

import img1 from "../../assets/Homepage/image 74969.png";
import img2 from "../../assets/Homepage/image 74970.png";
import img3 from "../../assets/Homepage/image 74971.png";
import img4 from "../../assets/Homepage/image 74972.png";
import qrImage from "../../assets/Homepage/image 74973.png";
import templeImage from "../../assets/Homepage/temple.png";

import { TEXT } from "../../content/text";

const icons = [img1, img2, img3, img4];

const FooterSection = ({ lang }) => {
  const t = TEXT.footer;

  const quickLinks = t.quickLinks[lang].map((title, idx) => ({
    title,
    icon: icons[idx],
  }));

  return (
    <footer className="footer">
      <section className="quick-links">
        <div className="container quick-links__outer">
          <div className="quick-links__grid">
            {quickLinks.map((item, index) => (
              <div key={index} className="quick-link-card">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="quick-link-icon"
                />
                <p className="quick-link-text">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-main">
        <div className="container">
          <div className="footer-main__card">
            <div className="footer-main__inner">
              {/* 1 - Disclaimer */}
              <div className="footer-main__col footer-main__col--disclaimer">
                <h5 className="footer-heading">
                  {t.disclaimerHeading[lang]}
                </h5>
                <p className="footer-disclaimer-text">
                  {t.disclaimerText[lang]}
                </p>
              </div>

              {/* 2 - Policies */}
              <div className="footer-main__col">
                <h5 className="footer-heading">
                  {t.policiesHeading[lang]}
                </h5>
                <ul>
                  {t.policies[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 3 - Accessibility */}
              <div className="footer-main__col">
                <h5 className="footer-heading">
                  {t.accessHeading[lang]}
                </h5>
                <ul>
                  {t.accessLinks[lang].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 4 - Brand */}
              <div className="footer-main__col footer-main__brand">
                <div className="footer-brand__top">
                  <img src={qrImage} alt="qr" className="footer-brand__qr" />

                  <div className="footer-brand__right">
                    <img
                      src={templeImage}
                      alt="logo"
                      className="footer-brand__temple"
                    />
                    <p className="footer-brand__org">
                      {t.orgLine[lang]}
                    </p>
                  </div>
                </div>

                <p className="footer-brand__owned">
                  {t.ownedLine[lang]}
                </p>

                <p className="footer-brand__credits">
                  {t.creditsLine[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
