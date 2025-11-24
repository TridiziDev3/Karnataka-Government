// src/components/Homepage/GallerySection.jsx
import React from "react";
import "../../Styles/Homepage/gallerySection.css";

import imgB1 from "../../assets/Homepage/Image 1.png";
import imgB2 from "../../assets/Homepage/Image 2.png";
import imgB3 from "../../assets/Homepage/Image3.png";

import rect1 from "../../assets/Homepage/Rectangle 34625672.png";
import rect2 from "../../assets/Homepage/Rectangle 34625673.png";
import rect3 from "../../assets/Homepage/Rectangle 34625674.png";
import rect4 from "../../assets/Homepage/Rectangle 34625675.png";
import rect5 from "../../assets/Homepage/Rectangle 34625676.png";
import rect6 from "../../assets/Homepage/Rectangle 34625677.png";

const bswmlCards = [
  {
    title: "ಶ್ರಮದಾನ",
    desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ, ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇನ್ನಷ್ಟು ಓದಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
    image: imgB1,
  },
  {
    title: "ಪ್ಲಾಸ್ಟಿಕ್ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮ",
    desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ, ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇನ್ನಷ್ಟು ಓದಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
    image: imgB2,
  },
  {
    title: "ಒಣ ತ್ಯಾಜ್ಯ ಕೇಂದ್ರ ಪರಿಶೀಲನೆ",
    desc: "ಇದು ತಾತ್ಕಾಲಿಕ ಪಠ್ಯ, ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ಇನ್ನಷ್ಟು ಓದಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
    image: imgB3,
  },
];

const galleryTabs = ["ಚಿತ್ರಗಳು", "ವೀಡಿಯೊಗಳು"];

const galleryItems = [
  { title: "ಕಾರ್ಯಕ್ರಮದ ಚಿತ್ರಗಳು", images: [rect1, rect2] },
  { title: "ಟ್ರಾನ್ಸ್‌ಫರ್ ಸ್ಟೇಷನ್", images: [rect3, rect4] },
  { title: "ಲ್ಯಾಂಡ್‌ಫಿಲ್", images: [rect5, rect6] },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        {/* ================= BSWML ================= */}
        <div className="bswml">
          <h3 className="section-title bswml__title">ಬಿ.ಎಸ್.ಡಬ್ಲ್ಯೂ.ಎಂ.ಎಲ್</h3>

          <div className="bswml__row">
            <div className="bswml__grid">
              {bswmlCards.map((card) => (
                <div key={card.title} className="bswml-card">
                  <img src={card.image} alt={card.title} className="bswml-card__image" />

                  <div className="bswml-card__body">
                    <h4 className="bswml-card__title">{card.title}</h4>
                    <p className="bswml-card__desc">{card.desc}</p>

                    <button className="bswml-card__btn">
                      <span>ಇನ್ನಷ್ಟು ಓದಿ</span>
                      <span className="bswml-card__btn-icon">↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="bswml__arrow">➜</button>
          </div>
        </div>

        {/* ================= GALLERY ================= */}
        <div className="gallery">
          <div className="gallery__header">
            <h3 className="section-title gallery__title">ಗ್ಯಾಲರಿ</h3>

            <div className="gallery__tabs">
              {galleryTabs.map((tab, idx) => (
                <button key={tab} className={`gallery__tab ${idx === 0 ? "active" : ""}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery__grid">
            {galleryItems.map((item) => (
              <div key={item.title} className="gallery-card">
                <div className="gallery-card__images">
                  {item.images.map((imgSrc, index) => (
                    <img
                      key={`${item.title}-${index}`}
                      src={imgSrc}
                      alt={`${item.title} ${index + 1}`}
                      className="gallery-card__image"
                    />
                  ))}
                </div>
                <p className="gallery-card__title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
