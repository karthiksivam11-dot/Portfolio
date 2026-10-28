import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
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

  // Academic background data with enhanced info
  const academicData = [
    {
      id: 1,
      degree: "B.E Mechanical Engineering",
      institution: "KSR Institute for Engineering and Technology, Namakkal",
      period: "2021 – 2025",
      score: "CGPA: 7.5/10",
      description: "Bachelor of Engineering in Mechanical Engineering with focus on design, thermodynamics, and manufacturing processes. Developed strong analytical and problem-solving skills through project-based learning.",
      highlights: ["Capstone Project", "Thermodynamics", "Manufacturing", "AutoCAD", "Tekla Structures"],
      accent: "#2563eb",
      accentRgb: "37, 99, 235",
      bannerGradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)",
      highlightColor: "#3b82f6",
      highlightColorRgb: "59, 130, 246"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cheran Matriculation Higher Secondary School, Karur",
      period: "2020 – 2021",
      score: "79.67%",
      description: "Higher Secondary Certificate with Science stream — Physics, Chemistry, Mathematics, and Computer Science. Built strong foundation in mathematical concepts and logical reasoning.",
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      accent: "#0ea5e9",
      accentRgb: "14, 165, 233",
      bannerGradient: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
      highlightColor: "#38bdf8",
      highlightColorRgb: "56, 189, 248"
    },
    {
      id: 3,
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Cheran Matriculation Higher Secondary School, Karur",
      period: "2018 – 2019",
      score: "70.00%",
      description: "Secondary School Leaving Certificate with strong foundation in Mathematics and Science. Early development of analytical thinking and problem-solving abilities.",
      highlights: ["Mathematics", "Science", "English", "Tamil"],
      accent: "#10b981",
      accentRgb: "16, 185, 129",
      bannerGradient: "linear-gradient(135deg, #047857 0%, #10b981 50%, #34d399 100%)",
      highlightColor: "#34d399",
      highlightColorRgb: "52, 211, 153"
    }
  ];

  // Certifications data with enhanced info
  const certData = [
    {
      id: 1,
      name: "TCS iON Career Edge – Young Professional",
      issuer: "Tata Consultancy Services (TCS)",
      year: "2024",
      description: "Completed the three-month TCS iON Career Edge – Young Professional development course covering business communication, corporate etiquette, and professional skills.",
      skills: ["Communication", "Corporate Etiquette", "Problem Solving", "Interview Prep"],
      accent: "#f59e0b",
      accentRgb: "245, 158, 11",
      bg: "rgba(245, 158, 11, 0.15)",
      icon: "🎓",
      skillTagColor: "#f59e0b",
      skillTagColorRgb: "245, 158, 11"
    },
    {
      id: 2,
      name: "30 Days MasterClass in Data Analytics",
      issuer: "NoviTech R&D Private Limited",
      year: "2024",
      description: "Completed the 30 Days MasterClass in Data Analytics covering Python, SQL, Excel, Power BI, Tableau, statistics, and data visualization with hands-on projects.",
      skills: ["Python", "SQL", "Power BI", "Tableau", "Statistics", "EDA"],
      accent: "#ef4444",
      accentRgb: "239, 68, 68",
      bg: "rgba(239, 68, 68, 0.15)",
      icon: "📊",
      skillTagColor: "#ef4444",
      skillTagColorRgb: "239, 68, 68"
    },
    {
      id: 3,
      name: "Design Thinking and Product Design",
      issuer: "SKEP",
      year: "2023",
      description: "Participated in Design Thinking and Product Design Process workshop covering user research, ideation, prototyping, and testing methodologies.",
      skills: ["Design Thinking", "User Research", "Prototyping", "Product Design"],
      accent: "#8b5cf6",
      accentRgb: "139, 92, 246",
      bg: "rgba(139, 92, 246, 0.15)",
      icon: "💡",
      skillTagColor: "#8b5cf6",
      skillTagColorRgb: "139, 92, 246"
    }
  ];

  // Summary stats
  const summaryStats = [
    {
      value: "7.5",
      label: "CGPA (B.E)",
      iconBg: "rgba(37, 99, 235, 0.15)",
      iconColor: "#2563eb",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      value: "79.67%",
      label: "HSC Score",
      iconBg: "rgba(14, 165, 233, 0.15)",
      iconColor: "#0ea5e9",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      value: "3",
      label: "Certifications",
      iconBg: "rgba(245, 158, 11, 0.15)",
      iconColor: "#f59e0b",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      value: "2025",
      label: "Graduation Year",
      iconBg: "rgba(16, 185, 129, 0.15)",
      iconColor: "#10b981",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="education" ref={sectionRef} aria-labelledby="education-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Academic Background</span>
          <h2 id="education-title" className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong foundation in engineering principles with specialized focus on mechanical systems and analytical thinking.
          </p>
        </div>

        {/* Academic Background Section */}
        <div className="education-academic reveal stagger-children">
          <div className="section-divider">
            <span className="section-divider-label">Academic Background</span>
          </div>

          <div className="academic-grid">
            {academicData.map((edu, index) => (
              <article
                key={edu.id}
                className="education-card-modern reveal"
                style={{
                  '--card-accent': edu.accent,
                  '--card-accent-rgb': edu.accentRgb,
                  '--banner-gradient': edu.bannerGradient,
                  '--highlight-color': edu.highlightColor,
                  '--highlight-color-rgb': edu.highlightColorRgb,
                  '--delay': `${index * 120}ms`
                }}
              >
                <div className="card-banner">
                  <div className="banner-content">
                    <span className="institution-badge">{edu.institution.split(',')[0]}</span>
                    <h3 className="institution-name-banner">{edu.institution.split(',').slice(1).join(',').trim() || edu.institution}</h3>
                  </div>
                </div>

                <div className="card-body-modern">
                  <div className="degree-header">
                    <h4 className="degree-name-modern">{edu.degree}</h4>
                    <span className="degree-period-badge" style={{ '--card-accent': edu.accent, '--card-accent-rgb': edu.accentRgb }}>
                      {edu.period}
                    </span>
                  </div>

                  <div className="degree-score-modern">{edu.score}</div>

                  <p className="degree-description">{edu.description}</p>

                  <div className="degree-highlights">
                    {edu.highlights.map((highlight, hIndex) => (
                      <span
                        key={highlight}
                        className="highlight-tag"
                        style={{
                          '--highlight-color': edu.highlightColor,
                          '--highlight-color-rgb': edu.highlightColorRgb
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="education-certifications reveal stagger-children">
          <div className="section-divider">
            <span className="section-divider-label">Certifications & Training</span>
          </div>

          <div className="certifications-grid">
            {certData.map((cert, index) => (
              <article
                key={cert.id}
                className="cert-card reveal"
                style={{
                  '--cert-accent': cert.accent,
                  '--cert-accent-rgb': cert.accentRgb,
                  '--cert-bg': cert.bg,
                  '--delay': `${index * 100}ms`
                }}
              >
                <div className="cert-icon-wrapper" style={{ '--cert-accent': cert.accent, '--cert-bg': cert.bg }} aria-hidden="true">
                  {cert.icon}
                </div>

                <div className="cert-content">
                  <div className="cert-header">
                    <h4 className="cert-name">{cert.name}</h4>
                    <span className="cert-year" style={{ '--cert-accent': cert.accent, '--cert-accent-rgb': cert.accentRgb }}>
                      {cert.year}
                    </span>
                  </div>

                  <p className="cert-issuer">{cert.issuer}</p>

                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-skills">
                    {cert.skills.map((skill, sIndex) => (
                      <span
                        key={skill}
                        className="cert-skill-tag"
                        style={{
                          '--skill-tag-color': cert.skillTagColor,
                          '--skill-tag-color-rgb': cert.skillTagColorRgb
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="education-summary-modern reveal stagger-children">
          <div className="summary-grid-modern">
            {summaryStats.map((stat, index) => (
              <div
                key={index}
                className="summary-card"
                style={{
                  '--summary-icon-bg': stat.iconBg,
                  '--summary-icon-color': stat.iconColor,
                  '--delay': `${index * 80}ms`
                }}
              >
                <div className="summary-icon-wrapper" style={{ '--summary-icon-bg': stat.iconBg, '--summary-icon-color': stat.iconColor }} aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="summary-content-modern">
                  <span className="summary-value-modern">{stat.value}</span>
                  <span className="summary-label-modern">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;