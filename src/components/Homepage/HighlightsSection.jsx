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

import { TEXT } from "../../content/text";

const iconMap = {
  "related-1": img1,
  "related-2": img2,
  "related-3": img3,
  "related-4": img4,
  "focus-1": focus1,
  "focus-2": focus2,
  "focus-3": focus3,
  "focus-4": focus4,
};

const HighlightsSection = ({ lang }) => {
  const t = TEXT.highlights;

  const related = t.related[lang].map((item) => ({
    ...item,
    icon: iconMap[item.id],
  }));

  const inFocus = t.inFocus[lang].map((item) => ({
    ...item,
    icon: iconMap[item.id],
  }));

  const HighlightCard = ({ item }) => (
    <div className="highlight-card">
      {item.icon && (
        <img src={item.icon} alt="" className="highlight-card__icon" />
      )}
      <div className="highlight-card__body">
        <div>
          <p className="highlight-card__title">{item.title}</p>
          <p className="highlight-card__desc">{item.desc}</p>
        </div>
        <button className="highlight-card__btn">
          {t.button[lang]}
        </button>
      </div>
    </div>
  );

  return (
    <section className="highlights">
      <div className="container">
        {/* Related Websites */}
        <div className="highlights__block">
          <h4 className="highlights__heading">
            {t.relatedHeading[lang]}
          </h4>
          <span className="highlights__subtext">
            {t.subText[lang]}
          </span>

          <div className="highlights__grid">
            {related.map((item) => (
              <HighlightCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* In Focus */}
        <div className="highlights__block">
          <h4 className="highlights__heading">
            {t.inFocusHeading[lang]}
          </h4>
          <span className="highlights__subtext">
            {t.subText[lang]}
          </span>

          <div className="highlights__grid">
            {inFocus.map((item) => (
              <HighlightCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
