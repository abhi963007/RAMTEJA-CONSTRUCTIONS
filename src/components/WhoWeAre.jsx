import React from 'react';
import { Link } from 'react-router-dom';
import './WhoWeAre.css';

const pillars = ['Design', 'Engineering', 'Procurement', 'Construction'];

export default function WhoWeAre() {
  return (
    <section className="section who-we-are-section">
      <div className="container">
        <div className="who-we-are-wrap">
          <div className="who-we-are-copy">
            <div className="section-sub-title">Who We Are</div>
            <h2 className="who-we-are-title">One Partner. Complete Ownership. Start to Finish.</h2>
            <p className="who-we-are-lead">
              Design, engineering, procurement, and construction delivered through a unified,
              disciplined system built on two decades of large-scale construction experience.
            </p>
            <p className="who-we-are-text">
              RT helps developers stay ahead of timelines, budgets, and execution risk with one
              accountable team managing every moving part from concept to handover.
            </p>
            <Link to="/project" className="primary-button w-inline-block who-we-are-button">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">See Our Work</div>
                <div className="primary-button-hover-text">See Our Work</div>
              </div>
            </Link>
          </div>

          <div className="who-we-are-visual" aria-label="RT integrated development process">
            <div className="who-we-are-delay-track">
              <span className="delay-card one">Delay</span>
              <span className="delay-card two">Cost</span>
              <span className="delay-card three">Risk</span>
            </div>

            <div className="who-we-are-system">
              {pillars.map((pillar) => (
                <div className="system-pillar" key={pillar}>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="who-we-are-flow">
              <div className="flow-line"></div>
              <div className="flow-node">01</div>
              <div className="flow-node">02</div>
              <div className="flow-node">03</div>
            </div>

            <div className="who-we-are-result">
              <span className="result-kicker">Built for developers moving fast</span>
              <strong>Coordinated execution. Site teams synced. Progress accelerating.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
