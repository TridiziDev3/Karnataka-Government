import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import { TEXT } from "../../content/text";
import { FaArrowRight } from "react-icons/fa";

import gallery1 from "../../assets/Homepage/Rectangle 34625672.png";
import gallery2 from "../../assets/Homepage/Rectangle 34625673.png";
import gallery3 from "../../assets/Homepage/Rectangle 34625674.png";
import gallery4 from "../../assets/Homepage/Rectangle 34625675.png";
import gallery5 from "../../assets/Homepage/Rectangle 34625676.png";
import gallery6 from "../../assets/Homepage/Rectangle 34625672.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = ({ lang = "en" }) => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);

  if (!TEXT?.gallery?.gallery) return null;

  const t = TEXT.gallery.gallery;
  const localize = (obj) => obj?.[lang] || obj?.en || "";

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 0.35;
    let running = true;

    const animate = () => {
      if (!running) return;

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const pause = () => (running = false);
    const resume = () => {
      if (!running) {
        running = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-header-left">
          <h2 className="gallery-main-heading">{localize(t.title)}</h2>
          <p className="gallery-subheading">
            Visual documentation of our initiatives
          </p>
        </div>

        <a href="#" className="view-all-photos-link">
          View All Photos <FaArrowRight className="view-all-icon" />
        </a>
      </div>

      <div className="gallery-carousel-wrapper">
        <div className="gallery-image-scroll auto-scroll" ref={scrollRef}>
          {[...galleryImages, ...galleryImages].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} className="gallery-image" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
