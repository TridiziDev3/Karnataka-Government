// src/components/Homepage/Homepage.jsx
import React from "react";
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
  return (
    <div className="homepage">
      <Header />

      <main>
        {/* Hero: fade up */}
        <AnimatedSection variant="up">
          <HeroSection />
        </AnimatedSection>

        {/* MD Desk: slide from left */}
        <AnimatedSection variant="left" delay={0.1}>
          <MdSection />
        </AnimatedSection>

        {/* Wings: slide from right */}
        <AnimatedSection variant="right" delay={0.15}>
          <WingsSection />
        </AnimatedSection>

        {/* Notifications: fade up */}
        <AnimatedSection variant="up" delay={0.2}>
          <NotificationsSection />
        </AnimatedSection>

        {/* Highlights: zoom in */}
        <AnimatedSection variant="zoom" delay={0.25}>
          <HighlightsSection />
        </AnimatedSection>

        {/* Gallery: fade up */}
        <AnimatedSection variant="up" delay={0.3}>
          <GallerySection />
        </AnimatedSection>
      </main>

      <FooterSection />
    </div>
  );
};

export default Homepage;
