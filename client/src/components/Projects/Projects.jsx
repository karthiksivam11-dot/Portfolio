import React, { useEffect, useRef } from 'react';
import { portfolioData, techColors } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
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
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects" ref={sectionRef} aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Featured Work</span>
          <h2 id="projects-title" className="section-title">Projects</h2>
          <p className="section-subtitle">Real-world data analytics solutions delivering actionable business insights through modern visualization tools.</p>
        </div>

        <div className="projects-grid reveal stagger-children">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card" style={{ '--index': index }}>
              <div className="card-visual" aria-hidden="true">
                <div className="visual-bg" />
                <div className="visual-content">
                  <div className="visual-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                </div>
                <div className="card-category" style={{
                '--category-bg': techColors[project.category] || techColors['Power BI'] || 'var(--color-primary)'
              }}>
              {project.category}
            </div>
              </div>

              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4>Key Highlights</h4>
                  <ul>
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <span className="tech-label">Tech Stack</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <button className="btn btn-outline btn-sm project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View Details
                  </button>
                  <button className="btn btn-ghost btn-sm project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta reveal">
          <p>Want to see more projects or collaborate on a data analytics initiative?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Let's Collaborate</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;