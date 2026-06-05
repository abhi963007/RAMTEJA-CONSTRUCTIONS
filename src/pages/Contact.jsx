import React, { useState } from 'react';

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
      {/* ── Inner Hero ── */}
      <section className="section inner-hero" style={{ paddingBottom: '80px' }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap">
            <div className="inner-content-box">
              <div className="animation-content-wrap">
                <div className="animation-content">
                  <div className="utlity-center-box contact">

                    <h1 className="style-guide-inner-title" style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: '900',
                      letterSpacing: '-0.03em',
                      lineHeight: '1.06',
                      color: '#0c0c0c',
                    }}>
                      Planning at scale<br />starts here.
                    </h1>
                    <div className="inner-hero-description-box contact" style={{ marginTop: '20px' }}>
                      <div className="secondary-text center" style={{
                        maxWidth: '580px',
                        margin: '0 auto',
                        lineHeight: '1.7',
                        color: '#555',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '400',
                        fontSize: '16px',
                      }}>
                        RamTeja Constructions partners with developers, landowners, and institutions
                        to execute high-rise and large-scale EPC developments with precision, speed,
                        and reliability.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section className="section contact-new" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div className="container">
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{
              maxWidth: '760px',
              margin: '0 auto',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: '24px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.06)',
              padding: '56px 52px',
            }}>

              {/* Row 1: Full Name */}
              <div style={fieldGroupStyle}>
                <label style={labelStyle} htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#b89047'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                />
              </div>

              {/* Row 2: Company + Designation */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
                <div style={fieldGroupStyle}>
                  <label style={labelStyle} htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#b89047'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
                <div style={fieldGroupStyle}>
                  <label style={labelStyle} htmlFor="designation">Designation</label>
                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    placeholder="e.g. Director, Partner"
                    value={formData.designation}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#b89047'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
              </div>

              {/* Row 3: Email + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
                <div style={fieldGroupStyle}>
                  <label style={labelStyle} htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#b89047'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
                <div style={fieldGroupStyle}>
                  <label style={labelStyle} htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#b89047'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
              </div>

              {/* Purpose for Contacting */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ ...labelStyle, marginBottom: '14px', display: 'block' }}>
                  Purpose for Contacting
                </label>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '10px',
                }}>
                  {PURPOSES.map((p) => {
                    const active = formData.purposes.includes(p);
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => togglePurpose(p)}
                        style={{
                          padding: '9px 20px',
                          borderRadius: '100px',
                          border: active ? '1.5px solid #b89047' : '1.5px solid rgba(0,0,0,0.12)',
                          background: active ? 'rgba(184,144,71,0.08)' : 'transparent',
                          color: active ? '#b89047' : '#555',
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '13px',
                          fontWeight: active ? '600' : '400',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '8px 0 32px' }} />

              {/* Schedule a meeting CTA */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '700',
                    fontSize: '17px',
                    color: '#0c0c0c',
                    marginBottom: '4px',
                  }}>
                    Schedule a Meeting
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    color: '#888',
                    fontWeight: '400',
                  }}>
                    Prefer a call? We'll reach out within 24 hours.
                  </div>
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#0c0c0c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '100px',
                    padding: '16px 36px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={e => { e.target.style.background = '#b89047'; }}
                  onMouseLeave={e => { e.target.style.background = '#0c0c0c'; }}
                >
                  Submit Request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          ) : (
            /* ── Success State ── */
            <div style={{
              maxWidth: '760px',
              margin: '0 auto',
              background: '#ffffff',
              border: '1px solid rgba(184,144,71,0.3)',
              borderRadius: '24px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.06)',
              padding: '80px 52px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
              <h2 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '900',
                fontSize: 'clamp(24px, 3vw, 36px)',
                color: '#0c0c0c',
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}>
                We'll be in touch soon.
              </h2>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.7',
                maxWidth: '440px',
                margin: '0 auto',
              }}>
                Thank you for reaching out. Our team will review your inquiry and
                get back to you within 24 hours.
              </p>
            </div>
          )}

          {/* ── Stats Bar ── */}
          <div style={{
            maxWidth: '760px',
            margin: '48px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1px',
            background: 'rgba(0,0,0,0.07)',
            border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#faf9f6',
                padding: '28px 20px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '800',
                  fontSize: 'clamp(16px, 2vw, 22px)',
                  color: '#0c0c0c',
                  letterSpacing: '-0.02em',
                  marginBottom: '6px',
                  whiteSpace: 'nowrap',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#888',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Shared style tokens ── */
const fieldGroupStyle = {
  marginBottom: '0',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: '10px',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '15px',
  fontWeight: '400',
  color: '#0c0c0c',
  background: '#faf9f6',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};
