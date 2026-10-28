import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [touched, setTouched] = useState({});

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

  const { personal } = portfolioData;

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name is too long';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        if (value.trim().length > 200) return 'Subject is too long';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 2000) return 'Message is too long';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched({ name: true, email: true, subject: true, message: true });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      } else {
        setStatus('error');
        if (data.errors) {
          setErrors(data.errors.reduce((acc, err) => ({ ...acc, [err.path]: err.msg }), {}));
        }
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const isValid = Object.values(formData).every(v => v.trim() !== '') && Object.keys(errors).length === 0;

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 id="contact-title" className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </div>

        <div className="contact-layout reveal stagger-children">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Start a Conversation</h3>
              <p>I'm always open to discussing new opportunities, interesting projects, or just chatting about data analytics and technology.</p>

              <div className="contact-methods">
                <a href={`mailto:${personal.email}`} className="contact-method">
                  <div className="method-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email</span>
                    <span className="method-value">{personal.email}</span>
                  </div>
                </a>

                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="method-details">
                    <span className="method-label">LinkedIn</span>
                    <span className="method-value">Connect with me</span>
                  </div>
                </a>

                <a href="tel:+919360094946" className="contact-method">
                  <div className="method-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Phone</span>
                    <span className="method-value">{personal.phone}</span>
                  </div>
                </a>

                <div className="contact-method location">
                  <div className="method-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-value">{personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="availability">
                <div className="availability-indicator" aria-hidden="true" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${errors.name && touched.name ? 'error' : ''} ${formData.name ? 'has-value' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    <span className="input-border" aria-hidden="true" />
                  </div>
                  {errors.name && touched.name && (
                    <p id="name-error" className="form-error" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email && touched.email ? 'error' : ''} ${formData.email ? 'has-value' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                      aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      disabled={status === 'submitting'}
                    />
                    <span className="input-border" aria-hidden="true" />
                  </div>
                  {errors.email && touched.email && (
                    <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-input ${errors.subject && touched.subject ? 'error' : ''} ${formData.subject ? 'has-value' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What's this about?"
                    aria-invalid={errors.subject && touched.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  <span className="input-border" aria-hidden="true" />
                </div>
                {errors.subject && touched.subject && (
                  <p id="subject-error" className="form-error" role="alert">{errors.subject}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <div className="input-wrapper textarea-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea ${errors.message && touched.message ? 'error' : ''} ${formData.message ? 'has-value' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project, opportunity, or just say hi..."
                    rows="6"
                    aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    disabled={status === 'submitting'}
                  />
                  <span className="input-border" aria-hidden="true" />
                </div>
                {errors.message && touched.message && (
                  <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full form-submit"
                disabled={status === 'submitting' || !isValid}
              >
                {status === 'submitting' && (
                  <>
                    <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1" strokeLinecap="round" />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status !== 'submitting' && (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="form-success" role="alert">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="form-error-msg" role="alert">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <p>Something went wrong. Please try again or email me directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;