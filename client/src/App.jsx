import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/globals.css';
import './styles/variables.css';
import './styles/animations.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Header theme={theme} onThemeToggle={toggleTheme} />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;