import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSummary() {
  return (
    <section className="section hero-service">
      <div className="container">
        <div className="services-wrap">
          <div className="hero-service-title-box">
            <div data-w-id="a15a12e9-751e-391f-7138-bce7951180b3" style={{ opacity: 0 }} className="section-sub-title white">Services</div>
            <h3 data-w-id="ba61c031-9849-706d-2681-a2c07b3e2287" style={{ opacity: 0 }} className="hero-service-title">Trusted roofing built for strength, precision, and lasting protection.</h3>
          </div>
          <div data-w-id="a7b3b0d5-2bac-d199-c422-4a822b927aab" className="service-inner-wrap">
            {/* Service 1 */}
            <div className="hero-service-single-card one">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da06c7c47b666b3362e4_Roof Installation Work 1.jpg" loading="lazy" alt="Roof Installation" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">01</div>
                  <div className="hero-service-name">Roof Installation</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content">Expert installation using durable materials for long-lastingperformance and clean design.</div>
                <Link to="/contact" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Start Project</div>
                    <div className="primary-button-hover-text">Start Project</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="hero-service-single-card two">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da0696fb07bb9b0f4056_Roof Maintenance Scene 1.jpg" loading="lazy" alt="Roof Repair" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">02</div>
                  <div className="hero-service-name">Roof Repair</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content">Fast, reliable repairs for leaks, damaged shingles, or structuralissues — restoring safety and performance.</div>
                <Link to="/contact" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Start Project</div>
                    <div className="primary-button-hover-text">Start Project</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="hero-service-single-card three">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da07143f526da3152aaa_Roof Installation Scene (2) 1.jpg" loading="lazy" alt="Roof Replacement" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">03</div>
                  <div className="hero-service-name">Roof Replacement</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content">Upgrade to a stronger, longer-lasting roof with premiummaterials and exceptional workmanship.</div>
                <Link to="/contact" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Start Project</div>
                    <div className="primary-button-hover-text">Start Project</div>
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
