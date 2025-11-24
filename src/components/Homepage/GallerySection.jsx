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

import { TEXT } from "../../content/text";

const GallerySection = ({ lang }) => {
  const t = TEXT.gallery;

  const bswmlCards = t.bswml.cards[lang].map((card, idx) => ({
    ...card,
    image: [imgB1, imgB2, imgB3][idx],
  }));

  const galleryTabs = t.gallery.tabs[lang];

  const galleryItemsConfig = t.gallery.items[lang];
  const galleryImages = [
    [rect1, rect2],
    [rect3, rect4],
    [rect5, rect6],
  ];

  const galleryItems = galleryItemsConfig.map((item, idx) => ({
    ...item,
    images: galleryImages[idx],
  }));

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="bswml">
          <h3 className="section-title bswml__title">
            {t.bswml.title[lang]}
          </h3>

          <div className="bswml__row">
            <div className="bswml__grid">
              {bswmlCards.map((card) => (
                <div key={card.title} className="bswml-card">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="bswml-card__image"
                  />

                  <div className="bswml-card__body">
                    <h4 className="bswml-card__title">{card.title}</h4>
                    <p className="bswml-card__desc">{card.desc}</p>

                    <button className="bswml-card__btn">
                      <span>{t.bswml.button[lang]}</span>
                      <span className="bswml-card__btn-icon">↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="bswml__arrow">➜</button>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery__header">
            <h3 className="section-title gallery__title">
              {t.gallery.title[lang]}
            </h3>

            <div className="gallery__tabs">
              {galleryTabs.map((tab, idx) => (
                <button
                  key={tab}
                  className={`gallery__tab ${idx === 0 ? "active" : ""}`}
                >
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
