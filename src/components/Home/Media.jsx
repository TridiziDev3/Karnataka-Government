import React from "react";
import "./Media.css";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { IoDocumentText, IoStar } from "react-icons/io5";

const TEXT = {
  mediaCenter: {
    latestUpdateBadge: {
      en: "Latest Updates",
      kn: "ಇತ್ತೀಚಿನ ಮಾಹಿತಿ",
    },
    heading: {
      en: "Media Center",
      kn: "ಮಾಧ್ಯಮ ಕೇಂದ್ರ",
    },
    subheading: {
      en: "Breaking news, press releases, and achievements in waste management",
      kn: "ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯಲ್ಲಿನ ಪ್ರಮುಖ ಸುದ್ದಿ, ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಸಾಧನೆಗಳು",
    },
    viewAllButton: {
      en: "View All Media Updates",
      kn: "ಎಲ್ಲಾ ಮಾಧ್ಯಮ ನವೀಕರಣಗಳನ್ನು ನೋಡಿ",
    },
    cards: [
      {
        category: {
          en: "Press Release",
          kn: "ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ",
        },
        categoryColor: {
          en: "blue", // ⚠️ NEVER localize this
        },
        date: {
          en: "Dec 1, 2024",
          kn: "ಡಿಸೆಂಬರ್ 1, 2024",
        },
        title: {
          en: "NWMA Launches National Zero Waste Campaign",
          kn: "ಎನ್‌ಡಬ್ಲ್ಯೂಎಂಎ ರಾಷ್ಟ್ರೀಯ ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಅಭಿಯಾನ ಆರಂಭಿಸಿದೆ",
        },
        desc: {
          en: "National Waste Management Authority today launched an ambitious campaign to achieve zero waste across 100 smart cities by 2030, marking a historic milestone in India's environmental journey.",
          kn: "ರಾಷ್ಟ್ರೀಯ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಪ್ರಾಧಿಕಾರವು 2030ರೊಳಗೆ 100 ಸ್ಮಾರ್ಟ್ ನಗರಗಳಲ್ಲಿ ಶೂನ್ಯ ತ್ಯಾಜ್ಯ ಸಾಧಿಸುವ ಉದ್ದೇಶದ ಮಹತ್ವಾಕಾಂಕ್ಷಿ ಅಭಿಯಾನವನ್ನು ಆರಂಭಿಸಿದೆ.",
        },
        button: {
          en: "Read Full Story",
          kn: "ಪೂರ್ಣ ಕಥೆ ಓದಿ",
        },
        link: "#",
      },
      {
        category: {
          en: "Achievement",
          kn: "ಸಾಧನೆ",
        },
        categoryColor: {
          en: "green", // ⚠️ NEVER localize this
        },
        date: {
          en: "Nov 20, 2024",
          kn: "ನವೆಂಬರ್ 20, 2024",
        },
        title: {
          en: "India Wins UN Environment Award",
          kn: "ಭಾರತ ಯುಎನ್ ಪರಿಸರ ಪ್ರಶಸ್ತಿ ಗೆದ್ದಿದೆ",
        },
        desc: {
          en: "NWMA's innovative approach to integrated waste management has been recognized by the United Nations Environment Programme with the prestigious Environment Leadership Award.",
          kn: "ಎನ್‌ಡಬ್ಲ್ಯೂಎಂಎ ಯ ಸಮಗ್ರ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯ ನವೀನ ವಿಧಾನವನ್ನು ಯುಎನ್ ಪರಿಸರ ಕಾರ್ಯಕ್ರಮದಿಂದ ಪ್ರಶಂಸಿಸಲಾಗಿದೆ.",
        },
        button: {
          en: "Read Full Story",
          kn: "ಪೂರ್ಣ ಕಥೆ ಓದಿ",
        },
        link: "#",
      },
    ],
  },
};

const getColorClass = (color) => {
  if (color === "blue") return "media-blue";
  if (color === "green") return "media-green";
  return "";
};

const getCategoryIcon = (categoryEn) => {
  if (categoryEn === "Press Release") return IoDocumentText;
  if (categoryEn === "Achievement") return IoStar;
  return null;
};

const Media = ({ lang = "en" }) => {
  const t = TEXT.mediaCenter;
  if (!t) return null;

  const localize = (obj) => obj?.[lang] || obj?.en;

  return (
    <section className="media-section" aria-labelledby="media-heading">
      <div className="media-center-content">

        <header className="media-header-group">
          <span className="latest-updates-badge">
            {localize(t.latestUpdateBadge)}
          </span>

          <h2 id="media-heading" className="media-heading">
            {localize(t.heading)}
          </h2>

          <p className="media-subheading">
            {localize(t.subheading)}
          </p>
        </header>

        <div className="media-cards-grid">
          {t.cards.map((card, index) => {
            // ✅ LOGIC ALWAYS USES ENGLISH
            const colorClass = getColorClass(card.categoryColor.en);
            const CategoryIcon = getCategoryIcon(card.category.en);

            return (
              <article
                key={index}
                className={`media-card ${colorClass}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-top-row">
                  <span className="category-badge">
                    {CategoryIcon && (
                      <CategoryIcon className="category-icon" />
                    )}
                    {localize(card.category)}
                  </span>

                  <span className="date-info">
                    <FaCalendarAlt className="date-icon" />
                    {localize(card.date)}
                  </span>
                </div>

                <div className="card-content-body">
                  <h3 className="card-title">
                    {localize(card.title)}
                  </h3>

                  <p className="card-description">
                    {localize(card.desc)}
                  </p>

                  <a
                    href={card.link}
                    className={`read-full-button ${colorClass}`}
                  >
                    {localize(card.button)}
                    <FaArrowRight className="button-arrow" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="media-footer-button">
          <a href="#" className="view-all-media-button">
            {localize(t.viewAllButton)}
            <FaArrowRight className="button-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Media;
