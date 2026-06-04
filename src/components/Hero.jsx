import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="section hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Hero Content — Two Column */}
      <div className="container hero-two-col-wrap" style={{ position: 'relative', zIndex: 2 }}>

        {/* LEFT — Stats + Description */}
        <div className="hero-left-col">
          <div className="hero-stat-card">
            <div className="hero-stat-value">15 Million Sq. Ft.</div>
            <div className="hero-stat-label">Under Development</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-card">
            <div className="hero-stat-value">₹ 2600 Crores</div>
            <div className="hero-stat-label">Order Book Value</div>
          </div>
          <p className="hero-left-desc">
            We power real estate developers by delivering lasting value to communities.
          </p>
        </div>

        {/* RIGHT — Title + Tags + CTA */}
        <div className="hero-right-col">
          <h1 className="hero-title">
            <span className="hero-title-highlight">India's fastest</span> <br />
            growing integrated <br />
            development partner
          </h1>

          {/* Service tag pills */}
          <div className="hero-service-tags">
            {['Planning', 'Design', 'Engineering', 'Procurement', 'Construction'].map((tag) => (
              <span key={tag} className="hero-service-tag">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hero-button-box">
            <Link
              to="#"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="hero-cta-btn"
            >
              <span>Let's Talk!</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
