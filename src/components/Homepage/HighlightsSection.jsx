// src/components/Homepage/HighlightsSection.jsx
import React from "react";
import "../../Styles/Homepage/highlightsSection.css";

import img1 from "../../assets/Homepage/img1.png";
import img2 from "../../assets/Homepage/img2.png";
import img3 from "../../assets/Homepage/img3.png";
import img4 from "../../assets/Homepage/img4.png";

import focus1 from "../../assets/Homepage/image 74965.png";
import focus2 from "../../assets/Homepage/image 74966.png";
import focus3 from "../../assets/Homepage/image 74967.png";
import focus4 from "../../assets/Homepage/image 74968.png";

const related = [
  {
    title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: img1,
  },
  {
    title: "ಆಹಾರ ಮತ್ತು ನಾಗರಿಕ ಸರಬರಾಜು ಇಲಾಖೆ",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: img2,
  },
  {
    title: "ಬಿಬಿಎಂಪಿ ವೆಬ್‌ಸೈಟ್",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: img3,
  },
  {
    title: "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: img4,
  },
];

const inFocus = [
  {
    title: "ಮನೆ ಮನೆ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹ",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: focus1,
  },
  {
    title: "ಸ್ವಚ್ಚತಾ ಪ್ರಮಾಣ ಪತ್ರ",
    desc: "ಇಷ್ಟು ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: focus2,
  },
  {
    title: "ಎಂ.ಎಸ್.ಡಬ್ಲ್ಯೂ ಪ್ರಕ್ರಿಯೆ",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: focus3,
  },
  {
    title: "ಲ್ಯಾಂಡ್‌ಫಿಲ್",
    desc: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    icon: focus4,
  },
];

const HighlightCard = ({ item }) => (
  <div className="highlight-card">
    {item.icon && <img src={item.icon} alt="" className="highlight-card__icon" />}
    <div className="highlight-card__body">
      <div>
        <p className="highlight-card__title">{item.title}</p>
        <p className="highlight-card__desc">{item.desc}</p>
      </div>
      <button className="highlight-card__btn">ಇನ್ನಷ್ಟು ಓದಿ →</button>
    </div>
  </div>
);

const HighlightsSection = () => {
  return (
    <section className="highlights">
      <div className="container">

        {/* Related Websites */}
        <div className="highlights__block">
          <h4 className="highlights__heading">ಸಂಬಂಧಿತ ವೆಬ್‌ಸೈಟ್‌ಗಳು</h4>
          <span className="highlights__subtext">
            ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.
          </span>

          <div className="highlights__grid">
            {related.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* In Focus */}
        <div className="highlights__block">
          <h4 className="highlights__heading">ಗಮನಾರ್ಹ ವಿಭಾಗ</h4>
          <span className="highlights__subtext">
            ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ! ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ‘ಇನ್ನಷ್ಟು ಓದಿ’ ಕ್ಲಿಕ್ ಮಾಡಿ.
          </span>

          <div className="highlights__grid">
            {inFocus.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HighlightsSection;
