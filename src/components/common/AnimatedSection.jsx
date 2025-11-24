// src/components/common/AnimatedSection.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - variant: "up" | "left" | "right" | "zoom"
 *  - delay: number (seconds) e.g. 0.2
 *  - className: extra classes
 */
const AnimatedSection = ({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "section",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`animated-section animated-section--${variant} ${
        isVisible ? "animated-section--visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
