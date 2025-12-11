import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const trackRef = useRef(null);
  const videoRefs = useRef([]); // hold refs for all videos
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const t = TEXT.hero;

  // ensure videoRefs length matches items
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, carouselItems.length);
  }, []);

  // Auto-advance logic
  useEffect(() => {
    // Clear any existing timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const item = carouselItems[currentIndex];

    // Pause all videos first
    videoRefs.current.forEach((v, idx) => {
      if (v && typeof v.pause === 'function') {
        try { v.pause(); } catch (e) { /* ignore */ }
      }
    });

    if (item.type === 'video') {
      const vid = videoRefs.current[currentIndex];
      if (vid) {
        // try to play
        vid.currentTime = 0;
        const playPromise = vid.play();
        // Some browsers return a promise
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {
            // autoplay may be blocked; still set timeout to advance
          });
        }
      }
    }

    // Setup next slide timer
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, SCROLL_INTERVAL);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  // slide transform style (keeps CSS transition)
  const trackStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  // Touch / swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    // stop the auto timer while dragging
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX;
    touchDeltaX.current = x - touchStartX.current;
    // Apply a subtle drag translate for feedback
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      const dragPercent = (touchDeltaX.current / trackRef.current.clientWidth) * 100;
      trackRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% + ${dragPercent}%))`;
    }
  };

  const handleTouchEnd = () => {
    // restore transition
    if (trackRef.current) {
      trackRef.current.style.transition = '';
    }
    const threshold = 50; // px to consider swipe
    if (touchDeltaX.current > threshold) {
      // swipe right -> previous
      setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    } else if (touchDeltaX.current < -threshold) {
      // swipe left -> next
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    } else {
      // small movement, snap back (by forcing re-render)
      setCurrentIndex((prev) => prev);
    }
    touchDeltaX.current = 0;
  };

  // Keyboard navigation (left/right arrows)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Get localized text
  const title = t.title[lang];
  const text = t.text[lang];
  const buttonLabel = t.button[lang];

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
      <div
        className="hero-image-container hero-rect-ui"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="hero-track"
          ref={trackRef}
          style={trackStyle}
        >
          {carouselItems.map((item, idx) => (
            <div className="hero-slide" key={idx}>
              {item.type === 'image' ? (
                <div
                  className="hero-carousel-image"
                  style={{ backgroundImage: `url(${item.src})` }}
                  role="img"
                  aria-label={`slide-${idx}`}
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
