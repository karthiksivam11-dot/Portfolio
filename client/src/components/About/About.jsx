import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

// ProfilePhoto component - tries multiple image formats
const ProfilePhoto = ({ name }) => {
  const [src, setSrc] = useState('/profile.jpeg');
  const [triedFormats, setTriedFormats] = useState(false);

  // Common image formats to try (in order of preference)
  const formats = ['.jpeg', '.jpg', '.png', '.webp', '.avif'];

  const handleError = () => {
    if (!triedFormats) {
      // Try next format
      const currentIndex = formats.findIndex(f => src.endsWith(f));
      if (currentIndex < formats.length - 1) {
        const nextFormat = formats[currentIndex + 1];
        setSrc(`/profile${nextFormat}`);
      } else {
        setTriedFormats(true); // All formats failed
      }
    } else {
      // All formats failed, hide image
      setSrc(null);
    }
  };

  if (!src) return null;

  return (
    <img
      src={src}
      alt={`${name} profile`}
      className="avatar-photo"
      onError={handleError}
    />
  );
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      // Observe all elements with .reveal class within the section
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const { personal, skills } = portfolioData;
  const skillCount = Object.values(skills).flat().length;

  return (
    <section id="about" className="about" ref={sectionRef} aria-labelledby="about-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">About Me</span>
          <h2 id="about-title" className="section-title">Introduction</h2>
          <p className="section-subtitle">Get to know me better — my background, passion, and what drives my work in data analytics.</p>
        </div>

        <div className="about-content reveal stagger-children">
          {/* Main Content */}
          <div className="about-main">
            <div className="about-text">
              <p>{personal.summary}</p>
            </div>

            {/* Highlights */}
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h3>Data Quality Focus</h3>
                  <p>Meticulous attention to data accuracy, completeness, and validation across all projects.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h3>AWS & Cloud Expertise</h3>
                  <p>Hands-on experience with Amazon Textract, Document AI, and cloud-based document processing pipelines.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                    <path d="M22 19.5c0-2.5-1.5-3.5-2-4.5-1-2-3-3-6-3-2 0-4 1-5 3-.5 1-1.5 2-2 4.5" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h3>Visual Analytics</h3>
                  <p>Creating compelling dashboards and reports using Power BI and Tableau for business decision-making.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-avatar" aria-hidden="true">
                <div className="avatar-ring" />
                <div className="avatar-inner">
                  {/* Profile photo - tries multiple formats automatically */}
                  <ProfilePhoto name={personal.name} />
                  <span className="avatar-initials">KP</span>
                </div>
                <div className="avatar-status" aria-label="Available for opportunities" />
              </div>

              <div className="profile-info">
                <h3 className="profile-name">{personal.name}</h3>
                <p className="profile-title">{personal.title}</p>
                <p className="profile-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {personal.location}
                </p>
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <span className="stat-value">{skillCount}+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">2</span>
                  <span className="stat-label">Roles</span>
                </div>
                <div className="profile-stat">
                  <span className="stat-value">3</span>
                  <span className="stat-label">Certificates</span>
                </div>
              </div>

              <div className="profile-contact">
                <a href={`mailto:${personal.email}`} className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{personal.email}</span>
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <button className="btn btn-primary btn-full profile-download">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;