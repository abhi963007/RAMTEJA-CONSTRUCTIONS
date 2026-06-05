import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    slug: 'residential',
    category: 'Residential',
    title: 'Where Homes Take Shape',
    description:
      'Residential mixed-use developments engineered for speed, built to last, delivered without compromise.',
    image: '/images/service_residential.png',
    alt: 'Modern residential high-rise development',
  },
  {
    slug: 'commercial',
    category: 'Commercial',
    title: 'Built For Public Life',
    description:
      'Commercial developments demand technical precision, disciplined timelines, and zero tolerance for error. We deliver all three.',
    image: '/images/service_commercial.png',
    alt: 'Contemporary commercial building exterior',
  },
  {
    slug: 'turnkey',
    category: 'Turnkey Delivery',
    title: 'Simplifying Complexity at Scale',
    description:
      'Integrated design, engineering, procurement, and construction solutions managed through a single execution framework from planning to handover.',
    image: '/images/service_turnkey.png',
    alt: 'Large-scale turnkey construction site',
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const cardRefs = useRef([]);
  const [heroVisible, setHeroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    // Hero entrance animation
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    // Card scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.cardIndex, 10);
            setVisibleCards((prev) => new Set(prev).add(idx));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── Hero Banner Section ── */}
      <section className="srv-hero-banner" ref={heroRef}>
        <div className="srv-hero-gradient-bg" />
        <div className="srv-hero-inner">
          <div className={`srv-hero-subtitle-wrap ${heroVisible ? 'srv-animate-in' : ''}`}>
            <div className="srv-hero-subtitle">
              <span className="srv-hero-dot" />
              <span>Services</span>
            </div>
          </div>

          <div className={`srv-hero-title-wrap ${heroVisible ? 'srv-animate-in srv-delay-1' : ''}`}>
            <h1 className="srv-hero-title">
              Delivering projects of<br />every magnitude.
            </h1>
          </div>

          <div className={`srv-hero-desc-wrap ${heroVisible ? 'srv-animate-in srv-delay-2' : ''}`}>
            <p className="srv-hero-desc">
              From residential towers to commercial complexes and end-to-end
              turnkey delivery — engineered at scale, executed with precision.
            </p>
          </div>

          <div className={`srv-hero-cta-wrap ${heroVisible ? 'srv-animate-in srv-delay-3' : ''}`}>
            <Link to="/contact" className="srv-hero-cta-btn">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="srv-hero-shape" />
      </section>

      {/* ── Main Services Section ── */}
      <section className="srv-main-section">
        <div className="srv-main-container">
          <div className="srv-cards-list">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-card-index={index}
                className={`srv-card ${visibleCards.has(index) ? 'srv-card-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Text Content */}
                <div className="srv-card-text">
                  <div className="srv-card-top">
                    <div className="srv-card-name-wrap">
                      <Link to={`/services/${service.slug}`} className="srv-card-name">
                        {service.title}
                      </Link>
                    </div>
                    <div className="srv-card-desc-wrap">
                      <p className="srv-card-desc">{service.description}</p>
                    </div>
                  </div>

                  <div className="srv-card-bottom">
                    <div className="srv-card-category-wrap">
                      <div className="srv-card-category-label">Service Type</div>
                      <div className="srv-card-category-value">{service.category}</div>
                    </div>
                    <div className="srv-card-cta-wrap">
                      <Link to={`/services/${service.slug}`} className="srv-card-cta">
                        <span>Explore Service</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <Link
                  to={`/services/${service.slug}`}
                  className="srv-card-image-wrap"
                  aria-label={service.alt}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="srv-card-image"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scoped Styles ── */}
      <style>{`
        /* ═══════════════════════════════════════════
           HERO BANNER
           ═══════════════════════════════════════════ */
        .srv-hero-banner {
          position: relative;
          padding: 200px 0 100px;
          overflow: hidden;
          background-color: #faf8f4;
        }

        .srv-hero-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(184, 144, 71, 0.10) 0%,
            rgba(184, 144, 71, 0.04) 40%,
            rgba(255, 255, 255, 0) 100%
          );
          z-index: 0;
        }

        .srv-hero-shape {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(184, 144, 71, 0.06) 0%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        .srv-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* Subtitle pill */
        .srv-hero-subtitle-wrap {
          overflow: hidden;
          margin-bottom: 28px;
        }

        .srv-hero-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b89047;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .srv-hero-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #b89047;
        }

        /* Title */
        .srv-hero-title-wrap {
          overflow: hidden;
          margin-bottom: 32px;
          padding-bottom: 12px;
        }

        .srv-hero-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: clamp(36px, 5.5vw, 76px);
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: #1a1a1a;
          margin: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Description */
        .srv-hero-desc-wrap {
          overflow: hidden;
          max-width: 620px;
          margin-bottom: 40px;
        }

        .srv-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.7;
          color: #666;
          letter-spacing: -0.01em;
          margin: 0;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* CTA */
        .srv-hero-cta-wrap {
          overflow: hidden;
        }

        .srv-hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          background: #1a1a1a;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.3s ease,
                      box-shadow 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .srv-hero-cta-btn:hover {
          background: #b89047;
          box-shadow: 0 8px 32px rgba(184, 144, 71, 0.25);
          transform: translateY(-2px) !important;
        }

        /* Entrance animation triggers */
        .srv-animate-in .srv-hero-subtitle,
        .srv-animate-in .srv-hero-title,
        .srv-animate-in .srv-hero-desc,
        .srv-animate-in .srv-hero-cta-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .srv-delay-1 .srv-hero-title { transition-delay: 0.15s; }
        .srv-delay-2 .srv-hero-desc { transition-delay: 0.3s; }
        .srv-delay-3 .srv-hero-cta-btn { transition-delay: 0.45s; }

        /* ═══════════════════════════════════════════
           MAIN SERVICES SECTION
           ═══════════════════════════════════════════ */
        .srv-main-section {
          padding: 80px 0 140px;
          background: #fff;
        }

        .srv-main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .srv-cards-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Service Card ── */
        .srv-card {
          display: flex;
          align-items: stretch;
          gap: 20px;
          background: #f5f3f0;
          border-radius: 14px;
          padding: 12px 12px 12px 28px;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease;
          will-change: opacity, transform;
        }

        .srv-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
        }

        .srv-card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Text column */
        .srv-card-text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 30px 10px 30px 0;
          gap: 32px;
          min-width: 0;
        }

        .srv-card-top {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
          align-items: flex-start;
        }

        .srv-card-name-wrap {
          width: 100%;
          max-width: 320px;
        }

        .srv-card-name {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: clamp(24px, 2.5vw, 34px);
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .srv-card-name:hover {
          color: #b89047;
        }

        .srv-card-desc-wrap {
          flex: 1;
          min-width: 240px;
          max-width: 460px;
        }

        .srv-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
          color: #666;
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* Bottom row */
        .srv-card-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: space-between;
          align-items: flex-end;
        }

        .srv-card-category-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .srv-card-category-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #999;
        }

        .srv-card-category-value {
          font-family: 'Manrope', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }

        .srv-card-cta-wrap {
          display: flex;
          align-items: flex-end;
        }

        .srv-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          padding: 12px 24px;
          background: rgba(26, 26, 26, 0.05);
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .srv-card-cta:hover {
          background: #b89047;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(184, 144, 71, 0.25);
        }

        .srv-card-cta svg {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .srv-card-cta:hover svg {
          transform: translateX(3px);
        }

        /* Image column */
        .srv-card-image-wrap {
          display: block;
          width: 100%;
          max-width: 420px;
          min-height: 340px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
        }

        .srv-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .srv-card-image-wrap:hover .srv-card-image {
          transform: scale(1.06);
        }

        /* ═══════════════════════════════════════════
           RESPONSIVE
           ═══════════════════════════════════════════ */
        @media (max-width: 991px) {
          .srv-hero-banner {
            padding: 170px 0 80px;
          }

          .srv-card {
            flex-direction: column-reverse;
            padding: 12px;
          }

          .srv-card-text {
            padding: 20px 16px;
          }

          .srv-card-image-wrap {
            max-width: 100%;
            min-height: 260px;
            aspect-ratio: 16 / 9;
          }

          .srv-card-name-wrap {
            max-width: 100%;
          }

          .srv-card-top {
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 767px) {
          .srv-hero-banner {
            padding: 150px 0 60px;
          }

          .srv-hero-title {
            font-size: clamp(30px, 8vw, 44px);
          }

          .srv-hero-desc {
            font-size: 15px;
          }

          .srv-main-section {
            padding: 50px 0 100px;
          }

          .srv-card-image-wrap {
            min-height: 220px;
          }

          .srv-card-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (max-width: 479px) {
          .srv-hero-banner {
            padding: 130px 0 50px;
          }

          .srv-hero-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .srv-card {
            border-radius: 12px;
          }

          .srv-card-text {
            padding: 16px 10px;
          }

          .srv-card-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
