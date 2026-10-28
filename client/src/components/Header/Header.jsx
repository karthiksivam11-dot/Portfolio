import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Header.css';

const Header = ({ theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  // Theme toggle with View Transition API
  const handleThemeToggle = useCallback(() => {
    const isDark = theme === 'light'; // Will switch to opposite
    const toggleElement = toggleRef.current;

    // Calculate transition origin from toggle position
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (toggleElement) {
      const rect = toggleElement.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    // Set CSS custom properties for view transition origin
    document.documentElement.style.setProperty('--vt-x', `${x}px`);
    document.documentElement.style.setProperty('--vt-y', `${y}px`);

    // Apply theme change with View Transition API if supported
    const applyThemeChange = () => {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const transition = document.startViewTransition(applyThemeChange);

      // Optional: Handle transition completion
      transition.finished.catch(() => {
        // Ignore aborted transitions
      });
    } else {
      // Fallback for browsers without View Transition API
      applyThemeChange();
    }
  }, [theme]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`} role="banner">
      <div className="header-bg" aria-hidden="true"></div>

      <nav className="container header-nav" aria-label="Main navigation">
        {/* Logo */}
        <div className="header-logo" aria-label="Karthik P - Home">
          <span className="logo-mark" aria-hidden="true">KP</span>
          <span className="logo-text">
            <span className="logo-name">Karthik P</span>
            <span className="logo-title">Data Analyst</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="header-menu" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                role="menuitem"
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="nav-label">{item.label}</span>
                <span className="nav-indicator" aria-hidden="true"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="header-actions">
          <button
            ref={toggleRef}
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            type="button"
          >
            <span className="theme-toggle-orb" aria-hidden="true">
              <span className="theme-toggle-inner"></span>
            </span>
            <span className="theme-toggle-sr-only" aria-hidden="false">
              {theme === 'dark' ? 'Dark mode active, click to switch to light mode' : 'Light mode active, click to switch to dark mode'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span className="hamburger" aria-hidden="true">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <button className="btn btn-primary btn-full" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;