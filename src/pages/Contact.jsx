import { useState, useEffect } from 'react';

const PURPOSES = [
  'High-Rise',
  'Mega Township',
  'End-to-End EPC',
  'Partner with RamTeja',
  'Explore Careers',
  'Others',
];

const STATS = [
  { value: '15,000+', label: 'Homes Delivered' },
  { value: '20,000+', label: 'Under Construction' },
  { value: '1,000+',  label: 'Engineers' },
  { value: '10,000+', label: 'Workforce' },
  { value: '₹2,000 Cr', label: 'EPC Mandate' },
];

const STATS_ICONS = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.9-9 4.9-9-4.9L12 2z"></path><path d="M12 12l9 4.9-9 4.9-9-4.9L12 12z"></path><path d="M12 22l9-4.9-9-4.9-9 4.9L12 22z"></path></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20M2 12h20"></path></svg>
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    purposes: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll reveal initiation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePurpose = (purpose) => {
    setFormData((prev) => ({
      ...prev,
      purposes: prev.purposes.includes(purpose)
        ? prev.purposes.filter((p) => p !== purpose)
        : [...prev.purposes, purpose],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-page-react blueprint-grid-bg">
        {/* ── Contact Hero Banner Section ── */}
        <section className="contact-hero-banner">
          <div className="contact-hero-gradient-bg" />
          <div className="contact-hero-inner">
            <div className={`contact-hero-subtitle-wrap ${heroVisible ? 'contact-animate-in' : ''}`}>
              <div className="contact-hero-subtitle">
                <span className="contact-hero-dot" />
                <span>Contact Us</span>
              </div>
            </div>

            <div className={`contact-hero-title-wrap ${heroVisible ? 'contact-animate-in contact-delay-1' : ''}`}>
              <h1 className="contact-hero-title">
                Let's build something enduring.
              </h1>
            </div>

            <div className={`contact-hero-desc-wrap ${heroVisible ? 'contact-animate-in contact-delay-2' : ''}`}>
              <p className="contact-hero-desc">
                RamTeja Constructions partners with developers, landowners, and institutions to execute high-rise and large-scale EPC developments with precision, speed, and reliability.
              </p>
            </div>
          </div>
          <div className="contact-hero-shape" />
        </section>

        <div className="contact-section-wrap">
          {/* ── Left Column: Corporate Info & Details ── */}
          <div className="contact-info-col reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <h1 className="contact-page-title">
              CONTACT US
            </h1>

            <div className="contact-coordinates">
              {/* Address */}
              <div className="coordinate-item">
                <div className="coordinate-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="coordinate-text-box">
                  <div className="coordinate-label">Head Office</div>
                  <div className="coordinate-value">
                    Plot No. 42, Hitech City Phase 2,<br />
                    Madhapur, Hyderabad, Telangana - 500081, India
                  </div>
                </div>
              </div>

              {/* Email Connections */}
              <div className="coordinate-item">
                <div className="coordinate-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="coordinate-text-box">
                  <div className="coordinate-label">Email Enquiries</div>
                  <div className="coordinate-value">
                    Business: <a href="mailto:sales@ramtejaconstructions.com">sales@ramtejaconstructions.com</a><br />
                    Support: <a href="mailto:support@ramtejaconstructions.com">support@ramtejaconstructions.com</a>
                  </div>
                </div>
              </div>

              {/* Phone Connections */}
              <div className="coordinate-item">
                <div className="coordinate-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="coordinate-text-box">
                  <div className="coordinate-label">Phone Support</div>
                  <div className="coordinate-value">
                    Direct Line: <a href="tel:+914049682800">+91 40 4968 2800</a><br />
                    Mobile: <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Image Banner */}
            <div className="contact-image-showcase">
              <img src="/images/service_turnkey.png" alt="Ramteja execution excellence" />
              <div className="contact-image-tag">
                <span>PROJECT EXECUTION AT SCALE</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Form ── */}
          <div className="contact-form-col reveal-on-scroll" style={{ transitionDelay: '0.25s' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form-card">
                <div className="form-header">
                  <h2>SEND A PROPOSAL</h2>
                  <p>Our engineering leads will evaluate your mandate and respond within 24 hours.</p>
                </div>

                {/* Grid Group 1: Full Name + Company */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">FULL NAME</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="FULL NAME"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">COMPANY</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="COMPANY"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Grid Group 2: Email + Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="EMAIL"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="PHONE NUMBER"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Custom Purpose Selector */}
                <div className="form-group">
                  <label className="purpose-label">PURPOSE FOR CONTACTING</label>
                  <div className="purpose-pill-grid">
                    {PURPOSES.map((p) => {
                      const active = formData.purposes.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePurpose(p)}
                          className={`purpose-pill ${active ? 'active' : ''}`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input: Message */}
                <div className="form-group">
                  <label htmlFor="message">PROJECT DESCRIPTION / MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Provide details about your project scope, location, and timeline requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div className="form-submit-divider" />

                {/* Submission CTA Block */}
                <div className="form-footer-action">
                  <div className="action-note">
                    <p>Direct Connection: Expect a complete response package with engineering case studies.</p>
                  </div>
                  <button type="submit" className="submit-action-btn">
                    <span>SUBMIT REQUEST</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Panel */
              <div className="contact-success-card reveal-on-scroll">
                <div className="success-icon-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2>Proposal Received</h2>
                <p className="success-tag">WE WILL BE IN TOUCH WITHIN 24 HOURS</p>
                <p className="success-body">
                  Thank you for reaching out to RamTeja Constructions. Our project engineering leaders are reviewing your criteria and will prepare a customized delivery model roadmap.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="success-reset-btn">
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom Stats Section ── */}
        <div className="contact-stats-container">
          <div className="contact-stats-inner">
            <div className="contact-stats-grid reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
              {STATS.map((s, i) => (
                <div key={i} className="contact-stat-card">
                  <div className="stat-icon-box">
                    {STATS_ICONS[i]}
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Stylesheet overrides */}
      <style>{`
        .contact-page-react {
          background-color: #ffffff;
          min-height: 100vh;
          padding-top: 0;
          position: relative;
          overflow: hidden;
        }

        /* ── Contact Hero Banner ── */
        .contact-hero-banner {
          position: relative;
          padding: 200px 0 60px;
          overflow: hidden;
          background-color: #faf9f6;
        }

        .contact-hero-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(184, 144, 71, 0.10) 0%,
            rgba(184, 144, 71, 0.04) 40%,
            rgba(255, 255, 255, 0) 100%
          );
          z-index: 0;
        }

        .contact-hero-shape {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(184, 144, 71, 0.06) 0%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        .contact-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* Subtitle */
        .contact-hero-subtitle-wrap {
          overflow: hidden;
          margin-bottom: 24px;
        }

        .contact-hero-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b89047;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-hero-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b89047;
        }

        /* Title */
        .contact-hero-title-wrap {
          overflow: hidden;
          margin-bottom: 24px;
          padding-bottom: 4px;
        }

        .contact-hero-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: clamp(36px, 5.5vw, 68px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #0c0c0c;
          margin: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Description */
        .contact-hero-desc-wrap {
          overflow: hidden;
          max-width: 720px;
        }

        .contact-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.7;
          color: #555555;
          margin: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Animation Triggers */
        .contact-animate-in .contact-hero-subtitle,
        .contact-animate-in .contact-hero-title,
        .contact-animate-in .contact-hero-desc {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-delay-1 .contact-hero-title { transition-delay: 0.15s; }
        .contact-delay-2 .contact-hero-desc { transition-delay: 0.3s; }

        .contact-section-wrap {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 60px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 24px 80px 24px;
          position: relative;
          z-index: 2;
        }

        /* ── Left Column Styling ── */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }

        .contact-page-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #0c0c0c;
          margin: 0;
          text-transform: uppercase;
        }

        .contact-coordinates {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          margin: 0;
        }

        .coordinate-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .coordinate-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .coordinate-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(184, 144, 71, 0.08);
          border: 1px solid rgba(184, 144, 71, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b89047;
          flex-shrink: 0;
        }

        .coordinate-text-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .coordinate-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #999999;
        }

        .coordinate-value {
          font-family: 'Manrope', sans-serif;
          font-size: 14.5px;
          line-height: 1.5;
          color: #1a1a1a;
          font-weight: 600;
        }

        .coordinate-value a {
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .coordinate-value a:hover {
          color: #b89047;
        }

        .contact-image-showcase {
          width: 100%;
          height: 240px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.08);
          margin-top: 10px;
        }

        .contact-image-showcase img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .contact-image-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(250, 249, 246, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #0c0c0c;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: 100px;
        }

        /* ── Right Column: Form Styling ── */
        .contact-form-col {
          display: flex;
          flex-direction: column;
        }

        .contact-form-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.04);
          border-radius: 20px;
          padding: 44px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .contact-form-card:hover {
          border-color: rgba(184, 144, 71, 0.2);
          box-shadow: 0 30px 70px rgba(184, 144, 71, 0.05);
        }

        .form-header {
          margin-bottom: 4px;
        }

        .form-header h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0c0c0c;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .form-header p {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.5;
          color: #666666;
          margin: 0;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888888;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14.5px;
          font-weight: 500;
          color: #0c0c0c;
          background: #faf9f6;
          outline: none;
          transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #b89047;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(184, 144, 71, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .purpose-label {
          margin-bottom: 4px !important;
        }

        .purpose-pill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .purpose-pill {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          background: transparent;
          color: #666666;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
        }

        .purpose-pill:hover {
          border-color: #b89047;
          color: #b89047;
          background: rgba(184, 144, 71, 0.03);
        }

        .purpose-pill.active {
          border-color: #b89047;
          background: rgba(184, 144, 71, 0.08);
          color: #b89047;
        }

        .form-submit-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.06);
          margin: 8px 0;
        }

        .form-footer-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .action-note p {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #666666;
          margin: 0;
          line-height: 1.5;
        }

        .submit-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0c0c0c;
          color: #ffffff;
          border: none;
          border-radius: 100px;
          padding: 15px 32px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          flex-shrink: 0;
        }

        .submit-action-btn:hover {
          background: #b89047;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(184, 144, 71, 0.25);
        }

        /* Success Card */
        .contact-success-card {
          background: #ffffff;
          border: 1px solid rgba(184, 144, 71, 0.25);
          box-shadow: 0 24px 64px rgba(184, 144, 71, 0.06);
          border-radius: 20px;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
        }

        .success-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(184, 144, 71, 0.08);
          border: 2px solid #b89047;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b89047;
          margin-bottom: 20px;
        }

        .contact-success-card h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #0c0c0c;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }

        .success-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 800;
          color: #b89047;
          letter-spacing: 0.12em;
          margin: 0 0 16px 0;
        }

        .success-body {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #666666;
          max-width: 440px;
          margin: 0 0 24px 0;
        }

        .success-reset-btn {
          padding: 10px 24px;
          border-radius: 100px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
          background: transparent;
          color: #555555;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .success-reset-btn:hover {
          border-color: #b89047;
          color: #b89047;
          background: rgba(184, 144, 71, 0.03);
        }

        /* ── Bottom Stats Section ── */
        .contact-stats-container {
          width: 100%;
          background: #f5f3f0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          padding: 48px 0;
          margin-top: 60px;
          z-index: 2;
          position: relative;
        }

        .contact-stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-stats-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 32px;
        }

        .contact-stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 200px;
        }

        .stat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(184, 144, 71, 0.08);
          border: 1px solid rgba(184, 144, 71, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b89047;
          flex-shrink: 0;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-value {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 22px;
          line-height: 1.1;
          color: #0c0c0c;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #888888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── Scroll Reveal Animations ── */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Responsive Styling ── */
        @media (max-width: 991px) {
          .contact-hero-banner {
            padding: 160px 0 40px;
          }
          .contact-section-wrap {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 20px 24px 60px 24px;
          }
          .contact-stats-grid {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-banner {
            padding: 140px 0 30px;
          }
          .contact-form-card {
            padding: 32px 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .contact-stats-grid {
            justify-content: flex-start;
          }
          .contact-stat-card {
            flex: 0 0 calc(50% - 16px);
          }
        }

        @media (max-width: 480px) {
          .form-footer-action {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }
          .submit-action-btn {
            justify-content: center;
          }
          .contact-stat-card {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </>
  );
}
