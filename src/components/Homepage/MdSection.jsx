// src/components/Homepage/MdSection.jsx
import React from "react";
import "../../Styles/Homepage/mdSection.css";

import midImage from "../../assets/Homepage/midimage.png";

const MdSection = () => {
  return (
    <section className="md-section">
      <div className="container">
        <div className="md-card">
          {/* LEFT: Text block */}
          <div className="md-card__text">
            <h3>Managing Director Desk</h3>

            <p>
              ಬೆಂಗಳೂರು ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಲಿಮಿಟೆಡ್ (BSWML) ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧೀನದಲ್ಲಿರುವ ಕಂಪನಿಯಾಗಿದ್ದು, 
              22 ಮೇ 2021 ರಂದು ಸ್ಥಾಪನೆಯಾಗಿದೆ. ಈ ಸಂಸ್ಥೆ ಕರ್ನಾಟಕದ ಬೆಂಗಳೂರಿನ ನಗರದಲ್ಲಿ ನವೀನ ಮತ್ತು ಪರಿಸರ ಸ್ನೇಹಿ ಕ್ಷೇತ್ರದ 
              ಆವಿಷ್ಕಾರಗಳಿಗೆ, ವಿಶೇಷವಾಗಿ ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
            </p>

            <p>
              ಕಂಪನಿಯ ಅನುಮೋದಿತ ಮತ್ತು ಪಾವತಿಸಲ್ಪಟ್ಟ ಬಂಡವಾಳವು ₹0.50 ಮಿಲಿಯನ್ (ಭಾರತೀಯ ರೂಪಾಯಿ 5,00,000) ಆಗಿದೆ. 
              ಇದರ ನೋಂದಾಯಿತ ಕಛೇರಿ ವಿಳಾಸ: #30/1, 1ನೇ ಮತ್ತು 2ನೇ ಮಹಡಿ, ಯುನಿವರ್ಸಲ್ ಬಿಲ್ಡಿಂಗ್, ತಿಮ್ಮಯ್ಯ ರಸ್ತೆ, 
              ವಸಂತ ನಗರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ – 560051. ಈ ಸಂಸ್ಥೆಯನ್ನು ಏಳು ನಿರ್ದೇಶಕರ ಮಂಡಳಿ ಮುನ್ನಡೆಸುತ್ತಿದೆ.
            </p>

            <button className="md-card__btn">ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ</button>
          </div>

          {/* RIGHT: Photo block */}
          <div className="md-card__photo">
            <img
              src={midImage}
              alt="ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು"
              className="md-card__photo-img"
            />
            <p className="md-card__name">M ಮಹೇಶ್ವರ್ ರಾವ್, IAS</p>
            <p className="md-card__role">ವ್ಯವಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರು</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdSection;
