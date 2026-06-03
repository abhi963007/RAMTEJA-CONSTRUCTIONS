import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSummary() {
  return (
    <section className="section hero-service">
      <div className="container">
        <div className="services-wrap">
          <div className="hero-service-title-box">
            <div style={{ opacity: 1 }} className="section-sub-title white">Our Offerings</div>
            <h3 style={{ opacity: 1, fontFamily: "'Old Standard TT', serif" }} className="hero-service-title">Capabilities for all levels of complexity</h3>
            <p style={{ color: 'rgba(0,0,0,0.8)', fontSize: '20px', marginTop: '10px', fontFamily: "'Old Standard TT', serif", fontStyle: 'italic' }}>Every square foot. On time. On quality. As promised.</p>
          </div>
          <div data-w-id="a7b3b0d5-2bac-d199-c422-4a822b927aab" className="service-inner-wrap">
            {/* Service 1: Residential */}
            <div className="hero-service-single-card one">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da06c7c47b666b3362e4_Roof Installation Work 1.jpg" loading="lazy" alt="Residential Development" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">01</div>
                  <div className="hero-service-name">Residential</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content" style={{ fontFamily: "'Old Standard TT', serif", fontSize: 'clamp(20px, 1.9vw, 26px)', lineHeight: '1.65', color: '#333' }}>From high-rise apartment towers to large-scale townships. Engineered for speed, built for the legacy.</div>
                <Link to="/service" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Explore (1/3)</div>
                    <div className="primary-button-hover-text">Explore (1/3)</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 2: Commercial */}
            <div className="hero-service-single-card two">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da0696fb07bb9b0f4056_Roof Maintenance Scene 1.jpg" loading="lazy" alt="Commercial Development" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">02</div>
                  <div className="hero-service-name">Commercial</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content" style={{ fontFamily: "'Old Standard TT', serif", fontSize: 'clamp(20px, 1.9vw, 26px)', lineHeight: '1.65', color: '#333' }}>Office buildings, schools, hospitals, and public infrastructure delivered with precision and accountability.</div>
                <Link to="/service" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Explore (2/3)</div>
                    <div className="primary-button-hover-text">Explore (2/3)</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 3: Turnkey Delivery */}
            <div className="hero-service-single-card three">
              <div className="hero-service-image-box-wrap">
                <div className="hero-service-image-box">
                  <img src="/images/69c8da07143f526da3152aaa_Roof Installation Scene (2) 1.jpg" loading="lazy" alt="Turnkey Handover" className="hero-service-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="hero-servoce-overly-wrap">
                  <div className="hero-service-card-name">03</div>
                  <div className="hero-service-name">Turnkey Delivery</div>
                </div>
              </div>
              <div className="hero-service-content-box">
                <div className="hero-servoce-content" style={{ fontFamily: "'Old Standard TT', serif", fontSize: 'clamp(20px, 1.9vw, 26px)', lineHeight: '1.65', color: '#333' }}>Full project delivery from design to final handover. One team, one contract, zero gaps.</div>
                <Link to="/service" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Explore (3/3)</div>
                    <div className="primary-button-hover-text">Explore (3/3)</div>
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
