import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { AuroraText } from '../../components/ui/AuroraText';
import './Hero.css';

const Hero = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero" ref={sectionRef} aria-labelledby="hero-title">
      {/* Background Visual Effects */}
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-pattern" />
        <div className="gradient-orbs" />
        <div className="grid-lines" />
        <div className="hero-shape shape-1" />
        <div className="hero-shape shape-2" />
        <div className="hero-shape shape-3" />
      </div>

      <div className="container hero-container">
        <div className="hero-content reveal">
          {/* Badge */}
          <div className="hero-badge reveal-delay-1">
            <span className="badge-dot" aria-hidden="true" />
            <span>Open to Opportunities — Junior Data Analyst</span>
          </div>

          {/* Headline */}
          <h1 id="hero-title" className="hero-headline reveal-delay-2">
            <span className="headline-line">
              Hi, I'm <AuroraText className="highlight-name" colors={["#2563eb", "#0ea5e9", "#06b6d4", "#22d3ee"]} speed={0.8}>{personal.name}</AuroraText>
            </span>
            <span className="headline-line">
              <span className="highlight-title">{personal.title}</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline reveal-delay-3">
            Transforming raw data into actionable insights through{' '}
            <span className="sub-highlight">NLP-powered document processing</span>{', '}
            <span className="sub-highlight">advanced analytics</span>{', '}
            and{' '}
            <span className="sub-highlight">interactive visualizations</span>.
          </p>

          {/* Key Metrics */}
          <div className="hero-metrics reveal-delay-4">
            <div className="metric-item">
              <span className="metric-value" data-count="2">2+</span>
              <span className="metric-label">Professional Roles</span>
            </div>
            <div className="metric-divider" aria-hidden="true" />
            <div className="metric-item">
              <span className="metric-value" data-count="15">15+</span>
              <span className="metric-label">Technologies Mastered</span>
            </div>
            <div className="metric-divider" aria-hidden="true" />
            <div className="metric-item">
              <span className="metric-value" data-count="3">3</span>
              <span className="metric-label">Certifications Earned</span>
            </div>
            <div className="metric-divider" aria-hidden="true" />
            <div className="metric-item">
              <span className="metric-value" data-count="1">1</span>
              <span className="metric-label">Major Power BI Project</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions reveal-delay-5">
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Karthik_P_Resume.pdf';
                link.download = 'Karthik_P_Resume.pdf';
                link.click();
              }}
              aria-label="Download Resume"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="hero-tech-preview reveal-delay-6" aria-label="Core technologies">
            <span className="tech-preview-label">Core Stack:</span>
            <div className="tech-preview-items">
              {['Python', 'SQL', 'Power BI', 'Tableau', 'AWS', 'Amazon Textract', 'Excel'].map((tech) => (
                <span key={tech} className="tech-preview-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Element - Right Side */}
        <div className="hero-visual reveal" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-card-header">
              <div className="visual-card-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="visual-card-content">
              <div className="code-lines">
                <div className="code-line">
                  <span className="code-keyword">import</span> <span className="code-module">pandas</span> <span className="code-alias">as</span> <span className="code-module">pd</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">import</span> <span className="code-module">boto3</span>
                </div>
                <div className="code-line empty" />
                <div className="code-line">
                  <span className="code-comment"># Extract text from documents using AWS Textract</span>
                </div>
                <div className="code-line">
                  <span className="code-variable">client</span> <span className="code-operator">=</span> <span className="code-function">boto3.client</span>(<span className="code-string">'textract'</span>)
                </div>
                <div className="code-line">
                  <span className="code-variable">response</span> <span className="code-operator">=</span> <span className="code-variable">client</span>.<span className="code-function">analyze_document</span>(<span className="code-variable">Document</span><span className="code-operator">=</span>{<span className="code-variable">S3Object</span>})
                </div>
                <div className="code-line empty" />
                <div className="code-line">
                  <span className="code-comment"># Transform to structured DataFrame</span>
                </div>
                <div className="code-line">
                  <span className="code-variable">df</span> <span className="code-operator">=</span> <span className="code-function">pd.DataFrame</span>(<span className="code-variable">response</span>[<span className="code-string">'Blocks'</span>])
                </div>
                <div className="code-line">
                  <span className="code-variable">insights</span> <span className="code-operator">=</span> <span className="code-variable">df</span>.<span className="code-function">groupby</span>(<span className="code-string">'BlockType'</span>).<span className="code-function">agg</span>(<span className="code-string">'mean'</span>)
                </div>
                <div className="code-line empty" />
                <div className="code-line">
                  <span className="code-keyword">print</span>(<span className="code-string">"Data Quality Score: 98.7%"</span>)
                </div>
              </div>
            </div>
            <div className="visual-card-footer">
              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="footer-stat-value">98.7%</span>
                  <span className="footer-stat-label">Accuracy</span>
                </div>
                <div className="footer-stat">
                  <span className="footer-stat-value">10K+</span>
                  <span className="footer-stat-label">Documents</span>
                </div>
                <div className="footer-stat">
                  <span className="footer-stat-value">&lt;2s</span>
                  <span className="footer-stat-label">Avg Latency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="floating-badges" aria-hidden="true">
            <div className="float-badge badge-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
              <span>Real-time Analytics</span>
            </div>
            <div className="float-badge badge-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>AWS Certified Pipeline</span>
            </div>
            <div className="float-badge badge-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              <span>Power BI Dashboards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;