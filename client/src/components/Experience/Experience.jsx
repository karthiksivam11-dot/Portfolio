import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll('.experience-card-wrapper');
      revealElements.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const { experience } = portfolioData;

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Card variant styles for visual variety
  const cardVariants = [
    { accentColor: 'var(--color-primary)', gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(37, 99, 235, 0.02))', borderColor: 'rgba(37, 99, 235, 0.2)' },
    { accentColor: 'var(--color-secondary)', gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(14, 165, 233, 0.02))', borderColor: 'rgba(14, 165, 233, 0.2)' },
    { accentColor: 'var(--color-accent)', gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.02))', borderColor: 'rgba(245, 158, 11, 0.2)' },
    { accentColor: 'var(--color-success)', gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02))', borderColor: 'rgba(16, 185, 129, 0.2)' },
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef} aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Work Experience</span>
          <h2 id="experience-title" className="section-title">Professional Journey</h2>
          <p className="section-subtitle">My career path from mechanical design engineering to data analytics, with a focus on AWS-powered document intelligence.</p>
        </div>

        <div className="experience-grid" role="list" aria-label="Work experience">
          {experience.map((job, index) => {
            const variant = cardVariants[index % cardVariants.length];

            return (
              <article
                key={job.id}
                className="experience-card-wrapper reveal"
                data-id={job.id}
                style={{
                  '--card-accent': variant.accentColor,
                  '--card-gradient': variant.gradient,
                  '--card-border': variant.borderColor,
                  '--index': index
                }}
                role="listitem"
              >
                <div className="experience-card" data-expanded={expandedId === job.id}>
                  {/* Top accent bar */}
                  <div className="card-accent-bar" aria-hidden="true" />

                  <div className="card-content">
                    {/* Header Section */}
                    <header className="card-header">
                      <div className="job-meta">
                        <span className="job-period">{job.period}</span>
                        <span className="job-location" aria-label={`Location: ${job.location}`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                      <div className="job-company">
                        <span className="company-name">{job.company}</span>
                      </div>
                    </header>

                    {/* Main Content */}
                    <div className="card-body">
                      <h3 className="job-title">{job.title}</h3>

                      {/* Key Highlights - Always visible */}
                      <ul className="job-highlights" aria-label="Key responsibilities">
                        {job.description.slice(0, 2).map((desc, descIndex) => (
                          <li key={descIndex} className="highlight-item">
                            <span className="highlight-bullet" aria-hidden="true" />
                            <p>{desc}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="job-technologies">
                        <span className="tech-label">Technologies</span>
                        <div className="tech-tags">
                          {job.technologies.map((tech) => (
                            <span key={tech} className="tech-tag" style={{
                              '--tag-color': 'var(--card-accent)',
                              '--tag-bg': 'var(--card-gradient)',
                              '--tag-border': 'var(--card-border)'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand Button */}
                      {job.description.length > 2 && (
                        <button
                          className="expand-btn"
                          onClick={() => toggleExpand(job.id)}
                          aria-expanded={expandedId === job.id}
                          aria-controls={`expanded-${job.id}`}
                        >
                          <span>{expandedId === job.id ? 'Show Less' : 'View Details'}</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <polyline points={expandedId === job.id ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Expanded Content */}
                    <div
                      id={`expanded-${job.id}`}
                      className="expanded-content"
                      hidden={expandedId !== job.id}
                      role="region"
                      aria-label={`Detailed responsibilities for ${job.title}`}
                    >
                      <div className="expanded-inner">
                        <h4>Key Achievements &amp; Responsibilities</h4>
                        <ul className="expanded-list">
                          {job.description.slice(2).map((desc, descIndex) => (
                            <li key={descIndex}>
                              <span className="expanded-bullet" aria-hidden="true" />
                              <p>{desc}</p>
                            </li>
                          ))}
                          {/* Additional metrics for the first job */}
                          {job.id === 1 && (
                            <>
                              <li>
                                <span className="expanded-bullet" aria-hidden="true" />
                                <p>Implemented data quality checks reducing errors by 23%</p>
                              </li>
                              <li>
                                <span className="expanded-bullet" aria-hidden="true" />
                                <p>Processed 10,000+ documents monthly through Textract pipeline</p>
                              </li>
                              <li>
                                <span className="expanded-bullet" aria-hidden="true" />
                                <p>Collaborated with cross-functional teams for QA standards</p>
                              </li>
                              <li>
                                <span className="expanded-bullet" aria-hidden="true" />
                                <p>Automated validation workflows saving 15 hours/week</p>
                              </li>
                            </>
                          )}
                        </ul>

                        {job.id === 1 && (
                          <div className="expanded-metrics">
                            <div className="metric">
                              <span className="metric-value">99.2%</span>
                              <span className="metric-label">Accuracy Rate</span>
                            </div>
                            <div className="metric">
                              <span className="metric-value">10K+</span>
                              <span className="metric-label">Docs/Month</span>
                            </div>
                            <div className="metric">
                              <span className="metric-value">15h</span>
                              <span className="metric-label">Weekly Savings</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle connector dot - only on mobile or as decorative element */}
                <div className="card-connector" aria-hidden="true">
                  <div className="connector-dot" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;