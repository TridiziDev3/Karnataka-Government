import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { TEXT } from "../../content/text";

import heroVideo1 from "../../assets/video1.mp4";
import heroVideo2 from "../../assets/video2.mp4";
import heroVideo3 from "../../assets/video3.mp4";

const carouselItems = [
  { src: heroVideo1 },
  { src: heroVideo2 },
  { src: heroVideo3 },
];

const SCROLL_INTERVAL = 10000;

const Hero = ({ lang = "en" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const timeoutRef = useRef(null);

  const t = TEXT.hero;

  useEffect(() => {
    videoRefs.current.forEach(v => v && v.pause());

    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, SCROLL_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section className="hero-section">
      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            {lang === "en" ? (
              <>
                Building a futuristic
                <br />
                Waste Management
                <br />
                System in Karnataka
              </>
            ) : (
              <>
                ಕರ್ನಾಟಕದಲ್ಲಿ ಭವಿಷ್ಯನಿಷ್ಠ
                <br />
                ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ
                <br />
                ವ್ಯವಸ್ಥೆ ನಿರ್ಮಾಣ
              </>
            )}
          </h1>

          <div className="hero-actions">
            <button className="contact-button">Contact Us</button>
            <button className="know-more-button">{t.button[lang]}</button>
          </div>
        </div>

        {/* RIGHT IMAGE / VIDEO */}
        <div className="hero-media">
          <div
            className="hero-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, idx) => (
              <div className="hero-slide" key={idx}>
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  className="hero-video"
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
