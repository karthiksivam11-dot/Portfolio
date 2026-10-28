import React, { useEffect, useRef } from 'react';
import { portfolioData, skillIcons } from '../../data/portfolioData';
import './Skills.css';

// Proficiency data for each skill (0-100)
const skillProficiency = {
  "Python": 90,
  "SQL": 85,
  "Data Cleaning": 88,
  "Data Validation": 85,
  "Exploratory Data Analysis (EDA)": 82,
  "PivotTables": 90,
  "VLOOKUP": 92,
  "XLOOKUP": 88,
  "Power Query": 85,
  "Dashboard and Charts": 87,
  "Power BI": 88,
  "Tableau": 80,
  "KPI Reporting": 85,
  "AWS": 82,
  "Amazon Textract": 85,
  "Document AI": 80,
  "AutoCAD": 75,
  "Tekla Structures": 70
};

// Category styling configuration
const categoryStyles = {
  "Programming & Querying": { color: '#3776AB', bg: 'rgba(55, 118, 171, 0.15)', light: '#4a9eff' },
  "Data Analysis": { color: '#FF6B6B', bg: 'rgba(255, 107, 107, 0.15)', light: '#ff9999' },
  "Excel": { color: '#217346', bg: 'rgba(33, 115, 70, 0.15)', light: '#2e9b5e' },
  "Data Visualization": { color: '#F2C811', bg: 'rgba(242, 200, 17, 0.15)', light: '#f5d84a' },
  "Cloud & Document Processing": { color: '#FF9900', bg: 'rgba(255, 153, 0, 0.15)', light: '#ffac33' },
  "Other Software": { color: '#E31E24', bg: 'rgba(227, 30, 36, 0.15)', light: '#ff4d52' }
};

// Skill colors for individual progress bars
const skillColors = {
  "Python": { color: '#3776AB', light: '#4a9eff' },
  "SQL": { color: '#4479A1', light: '#5a9bd8' },
  "Data Cleaning": { color: '#FF6B6B', light: '#ff9999' },
  "Data Validation": { color: '#4ECDC4', light: '#7ef5ec' },
  "Exploratory Data Analysis (EDA)": { color: '#45B7D1', light: '#7ad1f5' },
  "PivotTables": { color: '#217346', light: '#2e9b5e' },
  "VLOOKUP": { color: '#217346', light: '#2e9b5e' },
  "XLOOKUP": { color: '#217346', light: '#2e9b5e' },
  "Power Query": { color: '#217346', light: '#2e9b5e' },
  "Dashboard and Charts": { color: '#217346', light: '#2e9b5e' },
  "Power BI": { color: '#F2C811', light: '#f5d84a' },
  "Tableau": { color: '#E97627', light: '#f0a05a' },
  "KPI Reporting": { color: '#FF9F1C', light: '#ffbc5a' },
  "AWS": { color: '#FF9900', light: '#ffac33' },
  "Amazon Textract": { color: '#FF9900', light: '#ffac33' },
  "Document AI": { color: '#4285F4', light: '#7ab0f7' },
  "AutoCAD": { color: '#E31E24', light: '#ff4d52' },
  "Tekla Structures": { color: '#0052CC', light: '#3385ff' }
};

const Skills = () => {
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

  const categories = Object.entries(portfolioData.skills);
  const totalSkills = Object.values(portfolioData.skills).flat().length;
  const avgProficiency = Math.round(
    Object.values(skillProficiency).reduce((a, b) => a + b, 0) / Object.keys(skillProficiency).length
  );

  return (
    <section id="skills" className="skills" ref={sectionRef} aria-labelledby="skills-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Technical Skills</span>
          <h2 id="skills-title" className="section-title">What I Do</h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through hands-on experience across data analytics, cloud platforms, and visualization.
          </p>
        </div>

        {/* Skills Matrix - Dashboard Style */}
        <div className="skills-matrix reveal stagger-children" style={{ '--stagger-delay': '100ms' }}>
          {categories.map(([category, skills], catIndex) => {
            const style = categoryStyles[category] || categoryStyles["Programming & Querying"];
            const catSkills = skills.map(skill => ({
              name: skill,
              proficiency: skillProficiency[skill] || 75,
              color: skillColors[skill]?.color || style.color,
              colorLight: skillColors[skill]?.light || style.light
            }));

            return (
              <article
                key={category}
                className="skill-category-card reveal"
                style={{
                  '--category-color': style.color,
                  '--category-bg': style.bg,
                  '--delay': `${catIndex * 100}ms`
                }}
              >
                <div className="category-header">
                  <div className="category-icon-wrapper" aria-hidden="true">
                    {skillIcons[category] || '⚡'}
                  </div>
                  <div className="category-meta">
                    <h3 className="category-name">{category}</h3>
                    <p className="category-count">{skills.length} technologies</p>
                  </div>
                </div>

                <div className="skills-list">
                  {catSkills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item" style={{ '--delay': `${(catIndex * 100) + (skillIndex * 80)}ms` }}>
                      <div className="skill-item-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-proficiency" style={{ '--skill-color': skill.color }}>
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{
                            '--proficiency': `${skill.proficiency}%`,
                            '--skill-color': skill.color,
                            '--skill-color-light': skill.colorLight
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category tags */}
                <div className="category-tags">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="category-tag"
                      style={{
                        '--tag-color': skillColors[skill]?.color || style.color,
                        '--tag-color-rgb': skillColors[skill]?.color
                          ? `${parseInt(skillColors[skill].color.slice(1,3),16)}, ${parseInt(skillColors[skill].color.slice(3,5),16)}, ${parseInt(skillColors[skill].color.slice(5,7),16)}`
                          : '59, 130, 246'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="skills-summary reveal stagger-children">
          <div className="summary-stat">
            <span className="summary-value" data-count={totalSkills}>0</span>
            <span className="summary-label">Technologies</span>
          </div>
          <div className="summary-stat">
            <span className="summary-value" data-count={categories.length}>0</span>
            <span className="summary-label">Categories</span>
          </div>
          <div className="summary-stat">
            <span className="summary-value" data-count={avgProficiency}>0</span>
            <span className="summary-label">Avg Proficiency</span>
          </div>
          <div className="summary-stat">
            <span className="summary-value">2+</span>
            <span className="summary-label">Years Exp.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;