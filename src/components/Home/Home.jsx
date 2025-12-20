// src/components/Home.jsx

import React, { useState } from 'react';
import Header from './Heaader'; // Corrected typo in component name
import Hero from './Hero';
import Projects from './Projects';
import MDMessage from './MDMessage';
import WastePlants from './WastePlants';
import Wings from './Wings';
import Gallery from './Gallery';
import Media from './Media';
import Footer from './Footer';

function Home() {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'kn' : 'en'));
  };

  return (
    <div>
      {/* 1. Pass lang state and toggle function down to Header */}
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      
      {/* 2. Pass the current lang state down to all localized components */}
      <Hero lang={lang} />
      <Projects lang={lang} />
      <MDMessage lang={lang} />
      <WastePlants lang={lang} />
      <Wings lang={lang} />
      <Gallery lang={lang} />
      <Media lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default Home;