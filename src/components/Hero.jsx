import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div data-w-id="882d4734-bdba-9fb8-22c2-caa882fbd4f5" className="animation-content-wrap">
          <div style={{
            WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
            MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
            msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
            transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
            opacity: 0
          }} className="animation-content">
            <div className="hero-wrap">
              <h1 className="hero-title">India's fastest growing integrated development partner</h1>
              <div className="credibility-stats-box">
                <div className="credibility-stats-col">
                  <div className="credibility-stats-value">15 Million Sq. Ft.</div>
                  <div className="credibility-stats-label">Under Development</div>
                </div>
                <div className="credibility-stats-divider"></div>
                <div className="credibility-stats-col">
                  <div className="credibility-stats-value">₹ 2600 Crores</div>
                  <div className="credibility-stats-label">Order Book Value</div>
                </div>
              </div>
              <div className="hero-button-box">
                <Link to="/contact" data-w-id="cdc7e4fd-0d95-f65c-7db1-d63c73d49ad6" className="service-button w-inline-block">
                  <div className="service-button-content">
                    <div className="secondary-button-text-wrap">
                      <div className="secondary-button-text">Get in Touch</div>
                      <div className="secondary-button-hover-text white">Get in Touch</div>
                    </div>
                    <div className="service-arrow-box-wrap">
                      <div className="service-arrow-icon-box">
                        <img loading="lazy" src="/images/699abf09d762935571b2e5b0_Button Arrow In.svg" alt="Arrow In" className="service-arrow-in" />
                        <img loading="lazy" src="/images/699abf73d7562f0fa018fbcc_Button Arrow Out.svg" alt="Arrow Out" className="service-arrow-out" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
