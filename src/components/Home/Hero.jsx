import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { TEXT } from "../../content/text";

// Images
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

// Videos
import heroVideo1 from "../../assets/video1.mp4";
import heroVideo2 from "../../assets/video2.mp4";
import heroVideo3 from "../../assets/video3.mp4";

const carouselItems = [
  { type: "image", src: hero1 },
  { type: "video", src: heroVideo1 },
  { type: "image", src: hero2 },
  { type: "video", src: heroVideo2 },
  { type: "image", src: hero3 },
  { type: "video", src: heroVideo3 },
];

const SCROLL_INTERVAL = 10000;

const Hero = ({ lang = "en" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const t = TEXT.hero;

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, carouselItems.length);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    videoRefs.current.forEach((v) => {
      if (v) try { v.pause(); } catch {}
    });

    const item = carouselItems[currentIndex];
    if (item.type === "video") {
      const vid = videoRefs.current[currentIndex];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, SCROLL_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const trackStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX;
    touchDeltaX.current = x - touchStartX.current;

    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      const dragPercent =
        (touchDeltaX.current / trackRef.current.clientWidth) * 100;
      trackRef.current.style.transform = `translateX(calc(-${
        currentIndex * 100
      }% + ${dragPercent}%))`;
    }
  };

  const handleTouchEnd = () => {
    if (trackRef.current) trackRef.current.style.transition = "";
    const threshold = 50;

    if (touchDeltaX.current > threshold) {
      setCurrentIndex((prev) =>
        (prev - 1 + carouselItems.length) % carouselItems.length
      );
    } else if (touchDeltaX.current < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }

    touchDeltaX.current = 0;
  };

  const title = t.title[lang];
  const text = t.text[lang];
  const buttonLabel = t.button[lang];

  return (
    <div className="hero-section">
      {/* TEXT */}
      <div className="hero-content">
        <h2 className="hero-title hero-animate-slide-up">{title}</h2>
        <p className="hero-text hero-animate-slide-up hero-animate-delay-1">
          {text}
        </p>
        <div className="hero-actions hero-animate-slide-up hero-animate-delay-2">
          <button className="contact-button-ui-match">Contact Us</button>
          <button className="know-more-button-ui-match">
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        className="hero-image-container hero-rect-ui"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-track" ref={trackRef} style={trackStyle}>
          {carouselItems.map((item, idx) => (
            <div className="hero-slide" key={idx}>
              {item.type === "image" ? (
                <div
                  className="hero-carousel-image"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className="hero-carousel-image"
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
