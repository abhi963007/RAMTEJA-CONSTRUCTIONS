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
                <p className="description" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', lineHeight: '1.45', fontFamily: "'Manrope', sans-serif", fontWeight: '400', color: '#0c0c0c' }}>
                  From high-rise residential towers to large-scale infrastructure developments, Ramteja Constructions delivers projects engineered for speed and crafted for a lasting legacy.
                </p>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b89047', margin: 0 }}>
                  Vision
                </h3>
              </div>
              <h2 className="choose-title" style={{ fontSize: 'clamp(34px, 4.5vw, 58px)', fontWeight: '900', fontFamily: "'Montserrat', sans-serif", margin: '16px 0 32px 0', lineHeight: '1.08', letterSpacing: '-0.03em', color: '#0c0c0c' }}>
                Shape the future of urban India.
              </h2>
              <div className="description black" style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: '600', marginBottom: '16px' }}>
                Our vision is not simply to build more.
              </div>
              <p className="description" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', lineHeight: '1.45', marginBottom: '24px', fontFamily: "'Manrope', sans-serif", fontWeight: '400', color: '#0c0c0c' }}>
                As cities expand vertically and infrastructure demands grow increasingly complex, the need for disciplined, reliable, and execution-focused EPC partners has never been greater.
              </p>
              <p className="description" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', lineHeight: '1.45', fontFamily: "'Manrope', sans-serif", fontWeight: '400', color: '#0c0c0c' }}>
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

      {/* 6. Mission Section (Bento Grid Redesign) */}
      <section className="bento-section">
        <div className="container">
          <div className="valus-title-box reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '18px', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b89047', margin: 0 }}>
                Mission
              </h3>
            </div>
            <h3 className="valus-title" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: '700', color: '#0c0c0c', margin: '0 auto', maxWidth: '800px', lineHeight: '1.2' }}>
              How vision is translated to execution
            </h3>
          </div>
          
          <div className="bento-grid">
            {/* Column 1 */}
            <div className="bento-column bento-col-1">
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="bento-card-title">Engineering Excellence</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  We uphold rigorous engineering and construction standards across every stage of project execution, from planning to handover.
                </div>
              </div>
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.2s', height: '420px' }}>
                <img src="/images/service_residential.png" alt="Engineering Excellence" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="bento-column bento-col-2">
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.15s', height: '200px' }}>
                <img src="/images/value_precision.png" alt="Precision construction" />
              </div>
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.25s', height: '200px' }}>
                <img src="/images/value_structure.png" alt="Steel structures" />
              </div>
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.35s' }}>
                <div className="bento-card-title">Safety & Compliance</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  We prioritize workforce safety, regulatory compliance, and disciplined site management across all projects and operations.
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bento-column bento-col-3">
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="bento-card-title">Time Discipline</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  We maintain structured execution systems designed to improve predictability, accelerate delivery cycles, and minimize delays.
                </div>
              </div>
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                <div className="bento-card-title">Cost Efficiency</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  Our integrated in-house execution model enables stronger operational control, optimized procurement, and efficient resource deployment.
                </div>
              </div>
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.3s', height: '220px' }}>
                <img src="/images/699ad48a6eda4aba3f460beb_Common Img 4.webp" alt="Resource optimization" />
              </div>
            </div>

            {/* Column 4 */}
            <div className="bento-column bento-col-4">
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.15s', height: '380px' }}>
                <img src="/images/value_reliability.png" alt="Disciplined execution" />
              </div>
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.25s', height: '220px' }}>
                <img src="/images/699ad4296d0caee63d801419_Common Img 1.webp" alt="Workforce ecosystem" />
              </div>
            </div>

            {/* Column 5 */}
            <div className="bento-column bento-col-5">
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <div className="bento-card-title">Workforce Capability</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  We continue to strengthen our engineering, technical, and labour ecosystem to support increasingly complex and large-scale developments.
                </div>
              </div>
              <div className="bento-card image-card reveal-on-scroll" style={{ transitionDelay: '0.2s', height: '220px' }}>
                <img src="/images/service_commercial.png" alt="Commercial build" />
              </div>
              <div className="bento-card text-card reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                <div className="bento-card-title">Long-Term Partnerships</div>
                <div className="bento-card-line"></div>
                <div className="bento-card-desc">
                  We focus on building lasting relationships grounded in trust, transparency, accountability, and consistent execution performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Scoped Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .bento-section {
          padding: 100px 0 120px 0;
          background-color: #faf9f6;
          overflow: hidden;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          width: 100%;
        }

        .bento-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Bento Cards */
        .bento-card {
          border-radius: 16px;
          overflow: hidden;
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, box-shadow;
        }

        .bento-card.text-card {
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          flex: 1;
        }

        .bento-card.image-card {
          position: relative;
          cursor: pointer;
        }

        .bento-card.image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover animations */
        .bento-card.text-card:hover {
          transform: translateY(-6px);
          border-color: rgba(184, 144, 71, 0.25);
          box-shadow: 0 15px 35px rgba(184, 144, 71, 0.08);
        }

        .bento-card.image-card:hover img {
          transform: scale(1.06);
        }

        .bento-card.image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
        }

        /* Text styling inside card */
        .bento-card-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 21px;
          font-weight: 700;
          color: #0c0c0c;
          margin-bottom: 8px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .bento-card-line {
          width: 28px;
          height: 2px;
          background-color: #b89047;
          margin-bottom: 16px;
        }

        .bento-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #666666;
          text-align: justify;
        }

        /* Responsive Layouts */
        @media (max-width: 991px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .bento-section {
            padding: 60px 0 80px 0;
          }
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .bento-column {
            gap: 16px;
          }
          .bento-card.image-card {
            height: 280px !important;
          }
          .bento-card.text-card {
            padding: 28px 24px;
          }
        }

        /* Section-wise Scroll Reveal custom behaviors */

        /* Commitment Section custom image slide overlay reveal */
        .image-wrap.reveal-on-scroll {
          opacity: 1 !important;
          transform: none !important;
        }
        .image-wrap .view-image-overlay {
          background-color: #ffffff !important;
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          inset: 100% 0% 0% !important;
          transform: translate3d(0, -100%, 0) !important;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          z-index: 2 !important;
        }
        .image-wrap.is-visible .view-image-overlay {
          transform: translate3d(0, 0%, 0) !important;
        }
      `}</style>

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
              <h3 className="commitment-title reveal-on-scroll slide-left" style={{ transitionDelay: '0.1s' }}>
                We are committed to delivering high-quality constructions, investing in advanced engineering tools, continuous technical training, strict safety compliance, transparent stakeholder communication, and on-time project handovers to protect your investment and exceed expectations always.
              </h3>
              <div className="commitment-button-box reveal-on-scroll slide-left" style={{ transitionDelay: '0.2s' }}>
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
              <div className="image-wrap radius reveal-on-scroll" style={{ transitionDelay: '0.25s' }}>
                <img 
                  alt="Commitment to Excellence" 
                  src="/images/value_structure.png" 
                  loading="lazy" 
                  className="view-image radius-tweenty" 
                />
                <div className="view-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
