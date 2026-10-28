import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const sectionRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" ref={sectionRef} role="contentinfo">
      <div className="container">
        <div className="footer-main reveal stagger-children">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-mark">KP</span>
            </div>
            <p className="brand-tagline">
              Junior Data Analyst transforming data into actionable insights through NLP document processing & visual analytics.
            </p>

            <div className="social-links" role="list" aria-label="Social media links">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                role="listitem"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-link"
                role="listitem"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="https://github.com/karthiksivam11-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                role="listitem"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links & Contact */}
          <div className="footer-links-grid">
            <nav className="footer-nav" aria-label="Footer navigation">
              <div className="nav-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <h4>More</h4>
                <ul>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#certificates">Certificates</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </nav>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <address>
                <p>{personal.location}</p>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
                <a href="tel:+919360094946">{personal.phone}</a>
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Bottom - Copyright only */}
        <div className="footer-bottom reveal">
          <p className="copyright">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-float"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;