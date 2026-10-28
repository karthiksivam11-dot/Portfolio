import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Certificates.css';

const Certificates = () => {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

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
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="certificates" ref={sectionRef} aria-labelledby="certificates-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Certifications</span>
          <h2 id="certificates-title" className="section-title">Certificates & Achievements</h2>
          <p className="section-subtitle">Continuous learning and professional development through industry-recognized programs.</p>
        </div>

        <div className="certificates-grid reveal stagger-children">
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className={`certificate-card ${selectedCert === cert.id ? 'expanded' : ''}`}
              onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
              style={{ '--index': index }}
            >
              <div className="cert-visual" aria-hidden="true">
                <div className="cert-badge">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="cert-issuer-logo" aria-hidden="true">
                  {cert.issuer.includes('TCS') && 'TCS'}
                  {cert.issuer.includes('NoviTech') && 'NT'}
                  {cert.issuer.includes('SKEP') && 'SK'}
                </div>
              </div>

              <div className="cert-content">
                <div className="cert-header">
                  <h3 className="cert-name">{cert.name}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>

                <p className="cert-description">{cert.description}</p>

                {selectedCert === cert.id && (
                  <div className="cert-expanded">
                    <div className="expanded-divider" aria-hidden="true" />
                    <div className="expanded-content">
                      <h4>Certificate Details</h4>
                      <div className="detail-row">
                        <span className="detail-label">Issued By</span>
                        <span className="detail-value">{cert.issuer}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Program</span>
                        <span className="detail-value">{cert.name}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Status</span>
                        <span className="detail-value completed">Completed</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Verification</span>
                        <span className="detail-value">Available upon request</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="cert-action">
                  {selectedCert === cert.id ? (
                    <button className="btn btn-ghost btn-sm" onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      Close Details
                    </button>
                  ) : (
                    <button className="btn btn-outline btn-sm" onClick={(e) => { e.stopPropagation(); setSelectedCert(cert.id); }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Continuous Learning Note */}
        <div className="learning-note reveal">
          <div className="note-content">
            <div className="note-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="note-text">
              <h4>Always Learning</h4>
              <p>Actively pursuing advanced certifications in cloud data engineering, machine learning, and business intelligence to stay at the forefront of data analytics innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;