import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSummary() {
  return (
    <section className="section hero-about" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="hero-about-wrap" style={{ width: '100%', maxWidth: '100%', textAlign: 'center' }}>
          <div className="section-sub-title gray">Who We Are</div>
          <div className="hero-about-title-box" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <h2 className="hero-about-title" style={{ fontSize: '38px', lineHeight: '1.25', fontWeight: '800', fontFamily: "'Old Standard TT', serif" }}>
              One Partner. Complete Ownership. Start to Finish.
            </h2>
            <p className="description" style={{ marginTop: '20px', fontSize: '18px', color: '#555555', lineHeight: '1.6', fontFamily: "'Inter', sans-serif" }}>
              Design, Engineering, Procurement, and Construction delivered through a unified, disciplined system built on two decades of large-scale construction experience.
            </p>
          </div>
        </div>

        {/* Storyline Cards Grid */}
        <div className="storyline-grid">
          {/* Card 1 */}
          <div className="storyline-card">
            <div className="storyline-badge">01</div>
            <h4 className="storyline-card-title">The Domino Effect</h4>
            <p className="storyline-card-desc">
              "In real estate, one delay becomes many. Timelines slip. Budgets stretch. Liabilities grow."
            </p>
            <div className="storyline-visual-hint">
              <span className="visual-icon">⏳</span> Visuals: A single domino falls. Match cut into delayed construction.
            </div>
          </div>

          {/* Card 2 */}
          <div className="storyline-card">
            <div className="storyline-badge">02</div>
            <h4 className="storyline-card-title">Precision Momentum</h4>
            <p className="storyline-card-desc">
              "RT helps developers stay ahead of all three — with dependable execution at serious scale."
            </p>
            <div className="storyline-visual-hint">
              <span className="visual-icon">⚙️</span> Visuals: Coordinated execution. Machinery in motion. Site teams synced.
            </div>
          </div>

          {/* Card 3 */}
          <div className="storyline-card">
            <div className="storyline-badge">03</div>
            <h4 className="storyline-card-title">Built For Speed</h4>
            <p className="storyline-card-desc">
              "Built for developers moving fast." Precision-engineered architectural delivery on time, as promised.
            </p>
            <div className="storyline-visual-hint">
              <span className="visual-icon">🏢</span> Visuals: Final frame with a bold, complete architectural visual.
            </div>
          </div>
        </div>

        <div className="hero-about-button-box" style={{ marginTop: '50px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <Link to="/project" className="primary-button w-inline-block">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">See Our Work</div>
              <div className="primary-button-hover-text">See Our Work</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
