import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { TEXT } from '../../content/text';

// Import images
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

// Import videos
import heroVideo1 from "../../assets/video1.mp4";
import heroVideo2 from "../../assets/video2.mp4";
import heroVideo3 from "../../assets/video3.mp4";

// Array of carousel items (images or videos)
const carouselItems = [
  { type: 'image', src: hero1 },
  { type: 'video', src: heroVideo1 },
  { type: 'image', src: hero2 },
  { type: 'video', src: heroVideo2 },
  { type: 'image', src: hero3 },
  { type: 'video', src: heroVideo3 },
];

const SCROLL_INTERVAL = 10000; // 10 seconds per slide

const Hero = ({ lang = 'en' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const t = TEXT.hero;

  // Handle carousel auto-play
  useEffect(() => {
    const item = carouselItems[currentIndex];

    let timer;
    if (item.type === 'video') {
      // Play the video and move to next after 10s or when video ends
      const videoEl = videoRef.current;
      if (videoEl) {
        videoEl.currentTime = 0;
        videoEl.play();
        timer = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }, SCROLL_INTERVAL);
      }
    } else {
      // For images, auto advance after 10s
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, SCROLL_INTERVAL);
    }

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Get localized text
  const title = t.title[lang];
  const text = t.text[lang];
  const buttonLabel = t.button[lang];

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="hero-section">
      {/* Text Content */}
      <div className="hero-content">
        <h2 className="hero-title hero-animate-slide-up">{title}</h2>
        <p className="hero-text hero-animate-slide-up hero-animate-delay-1">{text}</p>
        <div className="hero-actions hero-animate-slide-up hero-animate-delay-2">
          <button className="contact-button contact-button-ui-match">Contact Us</button>
          <button className="know-more-button know-more-button-ui-match">{buttonLabel}</button>
        </div>
      </div>

      {/* Image/Video Carousel */}
      <div className="hero-image-container hero-rect-ui">
        {currentItem.type === 'image' ? (
          <div
            key={currentIndex}
            className="hero-carousel-image"
            style={{ backgroundImage: `url(${currentItem.src})` }}
          />
        ) : (
          <video
            ref={videoRef}
            key={currentIndex}
            className="hero-carousel-image"
            src={currentItem.src}
            muted
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
