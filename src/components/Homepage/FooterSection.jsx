// src/components/Homepage/FooterSection.jsx
import React from "react";
import "../../Styles/Homepage/footerSection.css";

import img1 from "../../assets/Homepage/image 74969.png";
import img2 from "../../assets/Homepage/image 74970.png";
import img3 from "../../assets/Homepage/image 74971.png";
import img4 from "../../assets/Homepage/image 74972.png";

import qrImage from "../../assets/Homepage/image 74973.png";
import templeImage from "../../assets/Homepage/temple.png";

const quickLinks = [
  { title: "ಸರ್ಕಾರದ ರಜೆಗಳು", icon: img1 },
  { title: "ಇ-ಸೇವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳು", icon: img2 },
  { title: "ಸರ್ಕಾರದ ಅಪ್‌ಗಳು", icon: img3 },
  { title: "ಇ-ಸೇವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳು", icon: img4 },
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
                <img src={item.icon} alt={item.title} className="quick-link-icon" />
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
                <h5 className="footer-heading">ಪ್ರಕಟನೆ</h5>
                <p className="footer-disclaimer-text">
                  ದಯವಿಟ್ಟು ಗಮನಿಸಿ: ಈ ಪುಟವು ಸರ್ಕಾರದ ಸಚಿವಾಲಯಗಳು/ವಿಭಾಗಗಳು/ಸಂಸ್ಥೆಗಳ 
                  ವೆಬ್‌ಸೈಟ್‌ಗಳಿಗೆ ಲಿಂಕ್‌ಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್‌ಗಳ ವಿಷಯವು 
                  ಸಂಬಂಧಿತ ಸಂಸ್ಥೆಗಳ ಮೂಲಕ ಹೊಂದ-own ಮತ್ತು ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು 
                  ಯಾವುದೇ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಥವಾ ಸಲಹೆಗಾಗಿ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.
                </p>
              </div>

              {/* Column 2 – Policies */}
              <div className="footer-main__col">
                <h5 className="footer-heading">ವೆಬ್‌ಸೈಟ್ ನೀತಿಗಳು ಮತ್ತು ಮಾರ್ಗಸೂಚಿಗಳು</h5>
                <ul>
                  <li>ಪ್ರತಿನಿಧಿ ಹಕ್ಕು ನೀತಿ</li>
                  <li>ಹೈಪರ್ ಲಿಂಕಿಂಗ್ ನೀತಿ</li>
                  <li>ಭದ್ರತಾ ನೀತಿ</li>
                  <li>ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು</li>
                  <li>ಗೌಪ್ಯತಾ ನೀತಿ</li>
                </ul>
              </div>

              {/* Column 3 – Accessibility */}
              <div className="footer-main__col">
                <h5 className="footer-heading">ಪ್ರಾಪ್ಯ ಸಂಪನ್ಮೂಲಗಳು</h5>
                <ul>
                  <li>ಸೈಟ್ ನಕ್ಷೆ</li>
                  <li>ಸಹಾಯ</li>
                  <li>ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಪ್ರವೇಶ</li>
                  <li>ಮಾರ್ಗಸೂಚಿಗಳು</li>
                </ul>
              </div>

              {/* Column 4 – Brand block */}
              <div className="footer-main__col footer-main__brand">
                <div className="footer-brand__top">
                  <img src={qrImage} alt="QR ಕೋಡ್" className="footer-brand__qr" />

                  <div className="footer-brand__right">
                    <img src={templeImage} alt="ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್" className="footer-brand__temple" />
                    <p className="footer-brand__org">
                      ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್
                      <br />
                      (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)
                    </p>
                  </div>
                </div>

                <p className="footer-brand__owned">
                  ವಿಷಯದ ಹಕ್ಕು ಮತ್ತು ನಿರ್ವಹಣೆ: ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್,
                  (ಕರ್ನಾಟಕ ಸರ್ಕಾರ)
                </p>

                <p className="footer-brand__credits">
                  ವಿನ್ಯಾಸಗೊಳಿಸಿದ, ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಮತ್ತು ಹೋಸ್ಟ್ ಮಾಡಿದವರು:
                  ಇ-ಆಡಳಿತ ಕೇಂದ್ರ – ಕರ್ನಾಟಕ ಸರ್ಕಾರ ವೆಬ್‌ಪೋರ್ಟಲ್ © 2025, ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಮೀಸಲಾಗಿವೆ.
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
