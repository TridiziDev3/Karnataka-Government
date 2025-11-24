// src/components/Homepage/FooterSection.jsx
import React from "react";
import "../../Styles/Homepage/footerSection.css";

// Quick links icons
import img1 from "../../assets/Homepage/image 74969.png";
import img2 from "../../assets/Homepage/image 74970.png";
import img3 from "../../assets/Homepage/image 74971.png";
import img4 from "../../assets/Homepage/image 74972.png";

// Footer brand images
import qrImage from "../../assets/Homepage/image 74973.png";
import templeImage from "../../assets/Homepage/temple.png";

const quickLinks = [
  { title: "Government Holidays", icon: img1 },
  { title: "e-Service Websites", icon: img2 },
  { title: "Government Apps", icon: img3 },
  { title: "e-Service Websites", icon: img4 },
];

const FooterSection = () => {
  return (
    <footer className="footer">
      {/* --------- Quick links row --------- */}
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

      {/* --------- Bottom footer block --------- */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-main__card">
            <div className="footer-main__inner">
              {/* Column 1 – Disclaimer */}
              <div className="footer-main__col footer-main__col--disclaimer">
                <h5 className="footer-heading">Disclaimer</h5>
                <p className="footer-disclaimer-text">
                  Please note that this page also provides links to the websites
                  / web pages of Govt. Ministries/Departments/Organisations. The
                  content of these websites are owned by the respective
                  organisations and they may be contacted for any further
                  information or suggestion
                </p>
              </div>

              {/* Column 2 – Policies */}
              <div className="footer-main__col">
                <h5 className="footer-heading">
                  Website Policies and Guidelines
                </h5>
                <ul>
                  <li>Copyright Policy</li>
                  <li>Hyperlinking Policy</li>
                  <li>Security Policy</li>
                  <li>Terms &amp; Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/* Column 3 – Accessibility */}
              <div className="footer-main__col">
                <h5 className="footer-heading">Accessibility Resources</h5>
                <ul>
                  <li>Sitemap</li>
                  <li>Help</li>
                  <li>Screen Reader Access</li>
                  <li>Guidelines</li>
                </ul>
              </div>

              {/* Column 4 – Brand block */}
              <div className="footer-main__col footer-main__brand">
                {/* TOP ROW: QR + (temple + org text) */}
                <div className="footer-brand__top">
                  <img
                    src={qrImage}
                    alt="QR code"
                    className="footer-brand__qr"
                  />

                  <div className="footer-brand__right">
                    <img
                      src={templeImage}
                      alt="Bengaluru Solid Waste Management Limited"
                      className="footer-brand__temple"
                    />
                    <p className="footer-brand__org">
                      Bengaluru Solid Waste Management Limited
                      <br />
                      (Government of Karnataka)
                    </p>
                  </div>
                </div>

                {/* BOTTOM TWO LINES */}
                <p className="footer-brand__owned">
                  Content Owned and maintained by: Bengaluru Solid Waste
                  Management Limited, (Government of Karnataka)
                </p>

                <p className="footer-brand__credits">
                  Designed , Developed &amp; Hosted by: Centre for e-governance
                  - Webportal karnataka government © 2025, All Rights Reserved.
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
