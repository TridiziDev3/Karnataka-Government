// src/components/Homepage/HighlightsSection.jsx
import React from "react";
import "../../Styles/Homepage/highlightsSection.css";

// Related Websites icons
import img1 from "../../assets/Homepage/img1.png";
import img2 from "../../assets/Homepage/img2.png";
import img3 from "../../assets/Homepage/img3.png";
import img4 from "../../assets/Homepage/img4.png";

// In Focus icons (new ones)
import focus1 from "../../assets/Homepage/image 74965.png";
import focus2 from "../../assets/Homepage/image 74966.png";
import focus3 from "../../assets/Homepage/image 74967.png";
import focus4 from "../../assets/Homepage/image 74968.png";

const related = [
  {
    title: "Karnataka Government",
    desc: "Get the latest updates Click Know more to explore this section",
    icon: img1,
  },
  {
    title: "Food and Civil Supplies",
    desc: "Get the latest updates Click Know more to explore this section",
    icon: img2,
  },
  {
    title: "BBMP Website",
    desc: "Get the latest updates Click Know more to explore this section",
    icon: img3,
  },
  {
    title: "Karnataka Government",
    desc: "Get the latest updates Click Know more to explore this section",
    icon: img4,
  },
];

const inFocus = [
  {
    title: "Door to Door Collection",
    desc: "Stay updated! Click ‘Read More’ for the latest insights in this section.",
    icon: focus1,
  },
  {
    title: "Swachh Certification",
    desc: "Stay updated! Click ‘Read More’ for the latest insights in this section.",
    icon: focus2,
  },
  {
    title: "Processing of MSW",
    desc: "Stay updated! Click ‘Read More’ for the latest insights in this section.",
    icon: focus3,
  },
  {
    title: "Land fill",
    desc: "Stay updated! Click ‘Read More’ for the latest insights in this section.",
    icon: focus4,
  },
];

// Reusable card (used for both sections)
const HighlightCard = ({ item }) => (
  <div className="highlight-card">
    {item.icon && <img src={item.icon} alt="" className="highlight-card__icon" />}
    <div className="highlight-card__body">
      <div>
        <p className="highlight-card__title">{item.title}</p>
        <p className="highlight-card__desc">{item.desc}</p>
      </div>
      <button className="highlight-card__btn">Know More →</button>
    </div>
  </div>
);

const HighlightsSection = () => {
  return (
    <section className="highlights">
      <div className="container">
        {/* Related Websites */}
        <div className="highlights__block">
          <h4 className="highlights__heading">Related Websites</h4>
          <span className="highlights__subtext">
            Stay updated! Click ‘Read More’ for the latest insights in this section.
          </span>

          <div className="highlights__grid">
            {related.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* In Focus */}
        <div className="highlights__block">
          <h4 className="highlights__heading">In Focus</h4>
          <span className="highlights__subtext">
            Stay updated! Click ‘Read More’ for the latest insights in this section.
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
