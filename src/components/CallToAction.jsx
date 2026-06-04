import React, { useState } from 'react';

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectProjectType = (type) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="cta-sec">
      <div className="cta-wrap">
        <div className="cta-left">
          <div className="cta-label-wrap">
            <span className="cta-eyebrow">Corporate Consultations</span>
            <div className="cta-eyebrow-line"></div>
          </div>
          <h2 className="cta-title">Let's build something exceptional</h2>
          <p className="cta-subtitle">
            Partner with India’s premier design-build and integrated construction group. 
            Fill out the consultation brief, and our corporate engineering team will coordinate a project review.
          </p>
          <div className="cta-contact-details">
            <div className="detail-item">
              <span className="detail-label">Sales & Estimates</span>
              <a href="mailto:sales@ramtejaconstructions.com">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                sales@ramtejaconstructions.com
              </a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Corporate Office</span>
              <a href="mailto:support@ramtejaconstructions.com">
                <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                support@ramtejaconstructions.com
              </a>
            </div>
          </div>
        </div>

        <div className="cta-right">
          <div className="cta-form-container">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="cta-inline-form">
                <div className="cta-form-row">
                  <div className="cta-form-group">
                    <label htmlFor="cta-name">Full Name</label>
                    <input
                      type="text"
                      id="cta-name"
                      name="name"
                      placeholder="e.g. Vikram Malhotra"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="cta-form-group">
                    <label htmlFor="cta-email">Email Address</label>
                    <input
                      type="email"
                      id="cta-email"
                      name="email"
                      placeholder="malhotra@corporation.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="cta-form-row">
                  <div className="cta-form-group">
                    <label htmlFor="cta-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="cta-phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="cta-form-group">
                    <label htmlFor="cta-company">Company / Group</label>
                    <input
                      type="text"
                      id="cta-company"
                      name="company"
                      placeholder="e.g. Malhotra Enterprises"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="cta-form-group full-width">
                  <label className="project-type-label">Select Project Type</label>
                  <div className="project-type-selectors">
                    {['Residential', 'Commercial', 'Turnkey EPC'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`type-chip ${formData.projectType === type ? 'active' : ''}`}
                        onClick={() => selectProjectType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cta-form-group full-width">
                  <label htmlFor="cta-message">Project Brief / Details</label>
                  <textarea
                    id="cta-message"
                    name="message"
                    placeholder="Describe your architectural design requirements, project scope, timeline, and proposed development area..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="cta-submit-btn">
                  <span>Submit Corporate Inquiry</span>
                  <svg className="cta-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div className="cta-success-message">
                <div className="success-icon-wrap">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Consultation Request Received</h3>
                <p>Thank you. Our engineering and scheduling department will review your development brief and contact you within 24 business hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

