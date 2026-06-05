import React, { useEffect, useRef } from 'react';
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
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('srv-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="section inner-hero" style={{ paddingBottom: '60px' }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap">
            <div className="inner-content-box">
              <div className="animation-content-wrap">
                <div className="animation-content">
                  <div className="utlity-center-box">
                    <h1
                      className="style-guide-inner-title"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: '900',
                        letterSpacing: '-0.03em',
                        lineHeight: '1.06',
                        color: '#0c0c0c',
                      }}
                    >
                      Delivering projects of<br />every magnitude.
                    </h1>
                    <div style={{ marginTop: '24px', maxWidth: '560px', margin: '24px auto 0' }}>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '1.75',
                          color: '#666',
                          textAlign: 'center',
                          letterSpacing: '0.01em',
                        }}
                      >
                        From residential towers to commercial complexes and end-to-end
                        turnkey delivery — engineered at scale, executed with precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Blocks ── */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              ref={addRef}
              className="srv-block"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                borderTop: index === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                minHeight: '420px',
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Text Column */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '56px 48px 56px 0',
                }}
              >
                {/* Category Label */}
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#b89047',
                    marginBottom: '16px',
                  }}
                >
                  {service.category}
                </div>

                {/* Title */}
                <Link to={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <h2
                    className="service-card-title-hover"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: '900',
                      fontSize: 'clamp(28px, 3.5vw, 44px)',
                      lineHeight: '1.1',
                      letterSpacing: '-0.03em',
                      color: '#0c0c0c',
                      margin: '0 0 20px 0',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.title}
                  </h2>
                </Link>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: '400',
                    fontSize: '15px',
                    lineHeight: '1.75',
                    color: '#666',
                    margin: '0 0 32px 0',
                    maxWidth: '440px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  to={`/services/${service.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#0c0c0c',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b89047'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#0c0c0c'; }}
                >
                  Explore Service
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Image Column */}
              <Link
                to={`/services/${service.slug}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderLeft: '1px solid rgba(0,0,0,0.08)',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Warm overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(184,144,71,0.04) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inline styles for scroll reveal ── */}
      <style>{`
        .srv-block.srv-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .srv-block a:hover .service-card-title-hover {
          color: #b89047 !important;
        }
        @media (max-width: 768px) {
          .srv-block {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .srv-block > div:first-child {
            padding: 40px 0 !important;
          }
          .srv-block > div:last-child {
            border-left: none !important;
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </>
  );
}
