import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeamSection from '../components/TeamSection';

const brands = [
  '/images/client-logo-1.png',
  '/images/client-logo-2.png',
  '/images/client-logo-3.png',
  '/images/client-logo-4.png',
];

export default function About() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="about-page-react">
      {/* Team Section */}
      <TeamSection />

      {/* 1. Inner Hero Section */}
      <section className="section inner-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap reveal-on-scroll">
            <div className="inner-content-box">
              <div className="about-hero-wrap">
                <div className="hero-gold-accent">
                  ESTABLISHED 1996 — EPC EXCELLENCE
                </div>
                <h1 className="about-hero-title">
                  Built on Trust, Precision, and Enduring Quality
                </h1>
                <div className="secondary-text black">
                  From high-rise residential towers to large-scale infrastructure developments, Ramteja Constructions delivers projects engineered for speed and crafted for a lasting legacy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="section trust">
        <div className="container">
          {/* Subtle divider above Vision section */}
          <div className="vision-divider reveal-on-scroll" />

          {/* Vision Header Block - Two Columns */}
          <div className="vision-header-grid">
            <div className="vision-text-box reveal-on-scroll">
              <h2 className="choose-title" style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', fontWeight: '900', fontFamily: "'Montserrat', sans-serif", margin: '16px 0 32px 0', lineHeight: '1.08', letterSpacing: '-0.03em', color: '#0c0c0c' }}>
                Shape the future of urban India.
              </h2>
              <div className="description black" style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '600', marginBottom: '16px' }}>
                Our vision is not simply to build more.
              </div>
              <p className="description text-gray" style={{ fontSize: '17px', lineHeight: '1.75', marginBottom: '16px', fontFamily: "'Montserrat', sans-serif", fontWeight: '400', letterSpacing: '0.01em' }}>
                As cities expand vertically and infrastructure demands grow increasingly complex, the need for disciplined, reliable, and execution-focused EPC partners has never been greater.
              </p>
              <p className="description text-gray" style={{ fontSize: '17px', lineHeight: '1.75', fontFamily: "'Montserrat', sans-serif", fontWeight: '400', letterSpacing: '0.01em' }}>
                Ramteja Constructions aims to be at the forefront of this transformation — delivering large-scale residential and township developments with engineering precision, operational excellence, and uncompromising execution standards.
              </p>
            </div>
            <div className="vision-image-box reveal-on-scroll">
              <img src="/images/vision_urban_india.png" loading="lazy" alt="Shape the future of urban India" />
            </div>
          </div>

          {/* What we stand for Title */}
          <div className="valus-title-box reveal-on-scroll" style={{ margin: '64px 0 32px 0', textAlign: 'left', alignItems: 'flex-start' }}>
            <h3 className="values-inner-title" style={{ fontSize: '24px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
              What we stand for
            </h3>
          </div>

          {/* 3-Column Grid */}
          <div className="trust-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {/* Card 1 */}
            <div className="trust-single-card reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="trust-image-box">
                <img src="/images/value_precision.png" loading="lazy" alt="Precision" className="trust-image" />
              </div>
              <div className="trust-content-box">
                <div className="secondary-text black">
                  Precision over promises
                </div>
                <p className="description text-gray">
                  We focus on engineered accuracy and rigorous site validation to deliver exactly what was designed, without compromises.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="trust-single-card reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="trust-image-box">
                <img src="/images/value_structure.png" loading="lazy" alt="Scale" className="trust-image" />
              </div>
              <div className="trust-content-box">
                <div className="secondary-text black">
                  Scale requires structure
                </div>
                <p className="description text-gray">
                  Handling large-scale township and residential developments successfully through disciplined, standardized execution systems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="trust-single-card reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="trust-image-box">
                <img src="/images/value_reliability.png" loading="lazy" alt="Reliability" className="trust-image" />
              </div>
              <div className="trust-content-box">
                <div className="secondary-text black">
                  Reliability is the real deliverable
                </div>
                <p className="description text-gray">
                  Beyond physical handovers, we deliver long-term predictability, consistent quality, and trust in every partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mission Section */}
      <section className="section values">
        <div data-w-id="a6f0b2bd-759a-6690-f691-dd9ad5292575" className="testimonial-vh">
          <div className="testimonial-sticky">
            <div className="container">
              <div className="valus-title-box reveal-on-scroll">
                <h3 data-w-id="edc51ca1-960d-a470-a623-4d98069df25e" style={{ opacity: 0 }} className="valus-title">
                  How vision is translated to execution
                </h3>
              </div>
              <div className="values-wrap">
                <div className="values-single-card reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Engineering Excellence
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We uphold rigorous engineering and construction standards across every stage of project execution, from planning to handover.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-two reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Time Discipline
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We maintain structured execution systems designed to improve predictability, accelerate delivery cycles, and minimize delays.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-three reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Cost Efficiency
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our integrated in-house execution model enables stronger operational control, optimized procurement, and efficient resource deployment.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-four reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Safety & Compliance
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We prioritize workforce safety, regulatory compliance, and disciplined site management across all projects and operations.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-five reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Workforce Capability
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We continue to strengthen our engineering, technical, and labour ecosystem to support increasingly complex and large-scale developments.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-six reveal-on-scroll" style={{ transitionDelay: '0.6s' }}>
                  <div className="values-inner-top-box">
                    <div className="values-inner-title">
                      Long-Term Partnerships
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We focus on building lasting relationships grounded in trust, transparency, accountability, and consistent execution performance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Section */}
      <section className="section brand brand-ticker-section" style={{ paddingTop: '56px', paddingBottom: '0px' }}>
        <div className="brand-ticker-track scroll-left">
          {[0, 1, 2, 3].map((clone) => (
            <div className="brand-ticker-set" key={clone} aria-hidden={clone > 0 ? 'true' : undefined}>
              {brands.map((logo, i) => (
                <div className="brand-ticker-item" key={i}>
                  <img loading="lazy" src={logo} alt={`brand-${i + 1}`} className="brand-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="container" style={{ marginTop: '32px' }}>
          <div data-w-id="24c66f18-04a3-6af1-7e61-cf3a883076ef" style={{ opacity: 1 }} className="brand-wrap">
            <div className="brand-button-box">
              <Link to="/contact" data-w-id="01ba8f5b-86c1-2181-0cee-fa3d6ee96dc8" className="brand-button w-inline-block">
                <div className="primary-button-text-wrap">
                  <div 
                    style={{
                      WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    className="primary-button-text"
                  >
                    Trusted by leading brands who believe in our team and quality solutions
                  </div>
                  <div 
                    style={{
                      WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    className="primary-button-hover-text"
                  >
                    Trusted by leading brands who believe in our team and quality solutions
                  </div>
                </div>
                <div className="barnd-button-icon-box">
                  <img 
                    src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" 
                    loading="lazy" 
                    style={{
                      WebkitTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    alt="" 
                    className="brand-button-icon-in" 
                  />
                  <img 
                    src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" 
                    loading="lazy" 
                    style={{
                      WebkitTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    alt="" 
                    className="brand-button-icon-out" 
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Commitment Section */}
      <section className="section commitment">
        <div className="container">
          <div className="commitment-wrap">
            <div className="commitment-left-box">
              <h3 data-w-id="48110768-39ef-bc50-5d0b-dbae3cc3aab4" style={{ opacity: 0 }} className="commitment-title">
                We are committed to delivering high-quality constructions, investing in advanced engineering tools, continuous technical training, strict safety compliance, transparent stakeholder communication, and on-time project handovers to protect your investment and exceed expectations always.
              </h3>
              <div data-w-id="69dd8f71-3198-88cc-b2fc-278268174999" style={{ opacity: 0 }} className="commitment-button-box">
                <Link to="/contact" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">
                      Let’s Talk
                    </div>
                    <div className="primary-button-hover-text">
                      Let’s Talk
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="commitment-right-box">
              <div data-w-id="fc8c7e5f-d2d0-ad38-7b78-2087f2875a7f" className="image-wrap radius">
                <img 
                  alt="Commitment to Excellence" 
                  src="/images/value_structure.png" 
                  loading="lazy" 
                  className="view-image radius-tweenty" 
                />
                <div 
                  style={{
                    WebkitTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    MozTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    msTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    transform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  }} 
                  className="view-image-overlay"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
