// src/components/Homepage/Homepage.jsx
import React, { useState, useEffect } from "react";
import "../../Styles/Homepage/homepage.css";

import Header from "./Header";
import HeroSection from "./HeroSection";
import MdSection from "./MdSection";
import WingsSection from "./WingsSection";
import NotificationsSection from "./NotificationsSection";
import HighlightsSection from "./HighlightsSection";
import GallerySection from "./GallerySection";
import FooterSection from "./FooterSection";
import AnimatedSection from "../common/AnimatedSection";

const Homepage = () => {
  // 🔹 Initialize from localStorage (if available), else default to Kannada
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("siteLang");
      return stored === "en" || stored === "kn" ? stored : "kn";
    }
    return "kn";
  });

  // 🔹 Whenever language changes, save it so refresh keeps same value
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("siteLang", lang);
    }
  }, [lang]);

  return (
    <div className="homepage">
      <Header lang={lang} setLang={setLang} />

      <main>
        <AnimatedSection variant="up">
          <HeroSection lang={lang} />
        </AnimatedSection>

        <AnimatedSection variant="left" delay={0.1}>
          <MdSection lang={lang} />
        </AnimatedSection>

        <AnimatedSection variant="right" delay={0.15}>
          <WingsSection lang={lang} />
        </AnimatedSection>

        <AnimatedSection variant="up" delay={0.2}>
          <NotificationsSection lang={lang} />
        </AnimatedSection>

        <AnimatedSection variant="zoom" delay={0.25}>
          <HighlightsSection lang={lang} />
        </AnimatedSection>

        <AnimatedSection variant="up" delay={0.3}>
          <GallerySection lang={lang} />
        </AnimatedSection>
      </main>

      <FooterSection lang={lang} />
    </div>
  );
};

export default Homepage;
