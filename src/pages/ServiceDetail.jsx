import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

// Localized construction data to map the Webflow reference layout (Neatenn sections) to Ramteja Constructions context
const serviceExtraData = {
  residential: {
    subtitle: '#RESIDENTIAL CONSTRUCTION',
    heroSubtitle: 'residential',
    workingProcess: [
      {
        number: '//01',
        title: 'Geotechnical & Structural Design',
        description: 'Before breaking ground, we run detailed soil testing and load analyses to design RCC systems engineered specifically for high-rise stability.'
      },
      {
        number: '//02',
        title: 'Structural Execution & Core Pouring',
        description: 'Our concrete engineering teams execute columns, shear walls, and floor cycles utilizing high-durability modern formwork.'
      },
      {
        number: '//03',
        title: 'Premium Handover & Utilities',
        description: 'We manage full mechanical, electrical, and plumbing (MEP) integration along with high-end facade installation, handing over ready-to-occupy spaces.'
      }
    ],
    chooseUs: {
      title: 'Delivering premium housing developments with structural endurance.',
      cards: [
        {
          title: 'Licensed & ISO Certified',
          description: 'Fully compliant with national building regulations, ISO quality standards, and municipal codes.'
        },
        {
          title: 'Real, Delivered Portfolios',
          description: 'We have built a strong presence across key regions. Our clients trust us and invite us back.'
        },
        {
          title: 'Eco-Compliant Materials',
          description: 'Sustainable construction materials and energy-efficient building systems that reduce carbon footprints.'
        },
        {
          title: 'Specialized Engineering Team',
          description: 'In-house architects, civil designers, and project managers keeping all site work aligned and accountable.'
        },
        {
          title: 'Modern Workflows & Tech',
          description: 'Deploying high-efficiency aluminum formwork, mechanized material logistics, and real-time project controls.'
        }
      ]
    },
    centerImage: '/images/value_structure.png',
    results: {
      intro: 'Our residential structures are built to withstand time, load, and environment. We maintain consistent quality across high-rise towers and township developments.',
      desc: 'We combine meticulous craftsmanship with advanced project tracking to complete developments on schedule, ensuring that your property value begins maximizing from the moment of handover.',
      images: [
        '/images/service_residential.png',
        '/images/value_reliability.png',
        '/images/value_structure.png'
      ]
    }
  },
  commercial: {
    subtitle: '#COMMERCIAL DEVELOPMENTS',
    heroSubtitle: 'commercial',
    workingProcess: [
      {
        number: '//01',
        title: 'Design & Structural Logic',
        description: 'Resolving complex column spans, architectural logic, and buildability metrics during the early technical drawing phase.'
      },
      {
        number: '//02',
        title: 'Fast-Track Construction',
        description: 'Operating parallel construction fronts and optimized resource cycles to keep commercial developments moving at pace.'
      },
      {
        number: '//03',
        title: 'MEP Integration & Commissioning',
        description: 'Installing and testing high-capacity HVAC, fire suppression, BMS systems, and specialized utility networks.'
      }
    ],
    chooseUs: {
      title: 'Engineering functional, institutional-grade commercial spaces.',
      cards: [
        {
          title: 'Tighter Structural Tolerances',
          description: 'We build commercial frames to exact dimensional tolerances, allowing flexible tenant layout modifications.'
        },
        {
          title: 'Proven Corporate Delivery',
          description: 'Delivered major corporate offices, healthcare facilities, and academic institutions on time.'
        },
        {
          title: 'Specialized HVAC & MEP Controls',
          description: 'Deploying sophisticated environmental, fire safety, and smart building management integrations.'
        },
        {
          title: 'Compliant & Accredited',
          description: 'Every site adheres to strict local safety codes, fire regulations, and structural compliance measures.'
        },
        {
          title: 'Value Engineering',
          description: 'Optimizing cost structures and materials without compromising build strength or operational quality.'
        }
      ]
    },
    centerImage: '/images/value_precision.png',
    results: {
      intro: 'From commercial corporate offices to highly specialized medical and educational institutions, our spaces are designed and built to support public life.',
      desc: 'We deliver structural durability, regulatory compliance, and system-level coordination, ensuring a seamless occupancy process and immediate operational readiness.',
      images: [
        '/images/service_commercial.png',
        '/images/value_precision.png',
        '/images/699ad4296d0caee63d801419_Common Img 1.webp'
      ]
    }
  },
  turnkey: {
    subtitle: '#TURNKEY EPC DELIVERY',
    heroSubtitle: 'turnkey',
    workingProcess: [
      {
        number: '//01',
        title: 'EPC Engineering Coordination',
        description: 'Our in-house design and engineering teams resolve structural, civil, and aesthetic details on paper before site mobilization.'
      },
      {
        number: '//02',
        title: 'Integrated Procurement Pipeline',
        description: 'Sourcing, vetting, and scheduling premium materials through our long-standing supply chain networks.'
      },
      {
        number: '//03',
        title: 'Continuous Quality Handover',
        description: 'Performing multi-point inspections at every milestone so that final handover is clean, certified, and snag-free.'
      }
    ],
    chooseUs: {
      title: 'Taking complete accountability from first draft to final handover.',
      cards: [
        {
          title: 'Single Point of Command',
          description: 'No contractor handoffs or accountability gaps. One dedicated partner managing the entire roadmap.'
        },
        {
          title: 'Predictable Timelines & Budgets',
          description: 'Real-time project controls and budget monitoring to ensure no cost overruns or scheduling delays.'
        },
        {
          title: 'Vetted Material Pipeline',
          description: 'Direct procurement channels with premium manufacturers, guaranteeing material quality and flow.'
        },
        {
          title: 'Comprehensive Quality Auditing',
          description: 'Dedicated QA/QC site engineers checking every pour, run, and finish against project drawings.'
        },
        {
          title: 'Accredited Safety Standards',
          description: 'Maintaining zero-accident safety protocols and regulatory certifications on every turnkey site.'
        }
      ]
    },
    centerImage: '/images/699ad48a6eda4aba3f460beb_Common Img 4.webp',
    results: {
      intro: 'We run turnkey operations with total transparency, managing architectural design, material logistics, civil works, and finishing under one team.',
      desc: 'Our predictive controls system flags scheduling and budget risks early, resulting in a streamlined delivery path and immediate structural readiness.',
      images: [
        '/images/service_turnkey.png',
        '/images/699ad48a6eda4aba3f460beb_Common Img 4.webp',
        '/images/699ad49d3057f15b69842cef_Common Img 6.webp'
      ]
    }
  }
};

const getCardIcon = (title) => {
  const t = title.toLowerCase();
  
  // 1. Compliance / Shield / Certification Icon
  if (t.includes('licensed') || t.includes('compliant') || t.includes('safety') || t.includes('certified') || t.includes('accredited')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <polyline points="9 11 11 13 15 9" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
      </svg>
    );
  }
  
  // 2. Building / Portfolio / Corporate Icon
  if (t.includes('portfolio') || t.includes('delivered') || t.includes('corporate') || t.includes('development')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <line x1="9" y1="22" x2="9" y2="16" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <line x1="15" y1="22" x2="15" y2="16" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <line x1="9" y1="16" x2="15" y2="16" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <path d="M8 6h8M8 10h8" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
      </svg>
    );
  }
  
  // 3. Materials / Leaf / Supply / Green Icon
  if (t.includes('materials') || t.includes('eco') || t.includes('vetted') || t.includes('pipeline')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
        <path d="M19 2L11 10" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
      </svg>
    );
  }
  
  // 4. Engineering / Gears / Hardhat / Technical Icon
  if (t.includes('engineering') || t.includes('team') || t.includes('tolerances') || t.includes('controls') || t.includes('hvac')) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
      </svg>
    );
  }
  
  // 5. Workflow / Clock / Checklist / Timeline Icon (Default fallback)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b89047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
      <polyline points="12 6 12 12 16 14" className="choose-us-svg-path" style={{ transition: 'stroke 0.4s ease' }} />
    </svg>
  );
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const revealRefs = useRef([]);

  // Reset scroll position on slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Observer for reveal-on-scroll animations
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRefs = revealRefs.current.filter(Boolean);
    currentRefs.forEach((el) => observer.observe(el));

    return () => {
      currentRefs.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [slug]);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Safe checks for slug validation
  if (!slug || !servicesData[slug] || !serviceExtraData[slug]) {
    return <Navigate to="/" replace />;
  }

  const service = servicesData[slug];
  const extra = serviceExtraData[slug];

  return (
    <div className="service-detail-page blueprint-grid-bg" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6' }}>
      
      {/* ── Ambient Radial Glows ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1200px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184, 144, 71, 0.12) 0%, rgba(250, 249, 246, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '1200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184, 144, 71, 0.08) 0%, rgba(250, 249, 246, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* ── 1. Hero / Title Section ── */}
        <section className="reveal-on-scroll" ref={addRef} style={{ padding: '80px 0 48px 0' }}>
          <div className="projects-details-content" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="projects-details-top-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
              <div className="projects-details-subtitle-date">
                <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                    <div>{extra.subtitle}</div>
                  </div>
                </div>
              </div>
              <h1 className="projects-details-name" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(38px, 6vw, 68px)', lineHeight: '1.04', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em' }}>
                {service.pageTitle} Construction
              </h1>
              <div className="projects-details-button-wrapper" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#0c0c0c',
                    color: '#ffffff',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '16px 32px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  }}
                  className="hero-cta-btn"
                >
                  Request Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid rgba(12, 12, 12, 0.15)',
                    background: 'transparent',
                    color: '#0c0c0c',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '15px 32px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="hero-secondary-btn"
                >
                  Explore Projects
                </Link>
              </div>
            </div>
            
            {/* Hero Main Visual */}
            <div className="projects-details-image-wrapper" style={{ width: '100%', aspectRatio: '16 / 9', height: 'auto', maxHeight: '560px', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', position: 'relative' }}>
              <img
                src={service.heroImage}
                alt={`${service.pageTitle} Construction`}
                className="projects-details-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
            </div>
          </div>
        </section>

        {/* ── 2. Overview & Working Process Section (Premium Timeline & Micro-Stats Redesign) ── */}
        <section className="reveal-on-scroll" ref={addRef} style={{ padding: '64px 0 96px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="projects-details-bottom-content split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px' }}>
            
            {/* Overview Column with Editorial Left Border and Micro-stats */}
            <div className="projects-details-title-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                  <div>Overview</div>
                </div>
              </div>
              <div className="overview-description" style={{ borderLeft: '3px solid #b89047', paddingLeft: '24px' }}>
                <p className="overview-description-text" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '400', fontSize: '17px', lineHeight: '1.85', color: '#0c0c0c', margin: 0, textAlign: 'justify', letterSpacing: '0.01em' }}>
                  At Ramteja Constructions, we combine structural discipline, modern vertical logistics, and deep engineering capabilities to execute {service.pageTitle.toLowerCase()} projects of any scale. We ensure consistent material testing, predictive timeline control, and robust quality management from foundation pouring to interior finish.
                </p>
              </div>

              {/* Editorial Micro-stats */}
              <div style={{ display: 'flex', gap: '32px', marginTop: '16px', flexWrap: 'wrap' }}>
                <div className="micro-stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px', fontWeight: '900', color: '#b89047', lineHeight: '1' }}>100%</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>Compliance</div>
                </div>
                <div className="micro-stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px', fontWeight: '900', color: '#b89047', lineHeight: '1' }}>Zero</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>Risk Errors</div>
                </div>
                <div className="micro-stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '28px', fontWeight: '900', color: '#b89047', lineHeight: '1' }}>Grade-A</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>Materials</div>
                </div>
              </div>
            </div>

            {/* Working Process Column with Dotted Connector Track and Cards */}
            <div className="working-process" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                  <div>working Process</div>
                </div>
              </div>
              <div className="project-working-process-list-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', paddingLeft: '48px' }}>
                
                {/* Timeline vertical connector line */}
                <div style={{
                  position: 'absolute',
                  left: '19px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  background: 'linear-gradient(to bottom, #b89047 0%, rgba(184, 144, 71, 0.1) 100%)',
                  zIndex: 1
                }} />
                
                {extra.workingProcess.map((step, idx) => (
                  <div key={idx} className="project-working-process-list-item" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                    
                    {/* Timeline bullet node */}
                    <div className="step-bullet" style={{
                      position: 'absolute',
                      left: '-48px',
                      top: '4px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#faf9f6',
                      border: '2px solid #b89047',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '12px',
                      fontWeight: '800',
                      color: '#b89047',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                      zIndex: 3
                    }}>
                      {idx + 1}
                    </div>

                    {/* Glassmorphic step card */}
                    <div className="process-step-card" style={{
                      flex: 1,
                      padding: '24px 28px',
                      border: '1px solid rgba(0,0,0,0.05)',
                      backgroundColor: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '800', fontSize: '16px', color: '#0c0c0c' }}>
                          {step.title}
                        </div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', color: '#b89047', letterSpacing: '0.05em' }}>
                          {step.number}
                        </div>
                      </div>
                      <p style={{ fontFamily: "'Elms Sans', sans-serif", fontSize: '13.5px', lineHeight: '1.65', color: '#666', margin: 0, textAlign: 'justify' }}>
                        {step.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. Choose Us / Value Proposition Section ── */}
        <section className="reveal-on-scroll" ref={addRef} style={{ padding: '80px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          
          {/* Header Row */}
          <div className="section-title-wrapper flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '640px' }}>
              <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <div className="subtitle gray" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                  <div>Why Choose Us</div>
                </div>
              </div>
              <h2 className="section-title choose-us" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.1', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em' }}>
                {extra.chooseUs.title}
              </h2>
            </div>
            <div className="section-button-wrapper" style={{ alignSelf: 'flex-end' }}>
              <Link
                to="/about-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#0c0c0c',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(12,12,12,0.2)',
                  paddingBottom: '4px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
                className="section-link"
              >
                About our capability
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ marginLeft: '4px' }}>
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="choose-us-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            
            {/* Top row: 3 cards */}
            <div className="choose-us-top-content">
              <div className="choose-us-top-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
                {extra.chooseUs.cards.slice(0, 3).map((card, idx) => (
                  <div key={idx} className="services-choose-us-card">
                    <div className="services-choose-us-icon-wrapper">
                      {getCardIcon(card.title)}
                    </div>
                    <div className="services-choose-us-card-typography" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div className="services-choose-us-card-title">
                        {card.title}
                      </div>
                      <p className="services-choose-us-card-description">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Visual Banner */}
            <div className="services-choose-us-image-wrapper" style={{ width: '100%', aspectRatio: '21 / 9', height: 'auto', maxHeight: '420px', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', position: 'relative' }}>
              <img
                src={extra.centerImage}
                alt="Construction execution quality"
                className="services-choose-us-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,12,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
              <div className="services-choose-us-tag-wrapper" style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '12px' }}>
                <div className="services-choose-us-tag" style={{ background: 'rgba(250, 249, 246, 0.95)', border: '1px solid rgba(0,0,0,0.1)', color: '#0c0c0c', fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 14px', borderRadius: '100px' }}>PLANNING</div>
                <div className="services-choose-us-tag" style={{ background: '#b89047', color: '#ffffff', fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '6px 14px', borderRadius: '100px' }}>EXECUTION</div>
              </div>
            </div>

            {/* Bottom row: 2 cards */}
            <div className="choose-us-bottom-card-wrapper">
              <div className="choose-us-bottom-card-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {extra.chooseUs.cards.slice(3, 5).map((card, idx) => (
                  <div key={idx} className="services-choose-us-card">
                    <div className="services-choose-us-icon-wrapper">
                      {getCardIcon(card.title)}
                    </div>
                    <div className="services-choose-us-card-typography" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div className="services-choose-us-card-title">
                        {card.title}
                      </div>
                      <p className="services-choose-us-card-description">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. Project Results Showcase Section (Premium Portfolio Redesign) ── */}
        <section className="reveal-on-scroll" ref={addRef} style={{ padding: '100px 0 120px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="project-results-content" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            
            {/* Header info with Premium Split Editorial Layout */}
            <div className="project-results-top-content split-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'start' }}>
              
              {/* Left Column: Title & Main Intro Statement */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="subtitle-wrapper">
                  <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                    <div>results</div>
                  </div>
                </div>
                <div style={{ borderLeft: '4px solid #b89047', paddingLeft: '28px' }}>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(20px, 3.5vw, 26px)', fontWeight: '300', lineHeight: '1.5', color: '#0c0c0c', margin: 0, letterSpacing: '-0.02em', textAlign: 'justify' }}>
                    {extra.results.intro}
                  </h3>
                </div>
              </div>

              {/* Right Column: Supporting Description & Custom Stats Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', lineHeight: '1.8', color: '#666', margin: 0, textAlign: 'justify' }}>
                  {extra.results.desc}
                </p>

                {/* Subpage-specific Stats Panel */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  {(() => {
                    const statsMap = {
                      residential: [
                        { val: '30+', label: 'Towers Completed' },
                        { val: '100%', label: 'Safety Standard' },
                        { val: 'Grade-A', label: 'Steel & Concrete' }
                      ],
                      commercial: [
                        { val: '15+', label: 'Business Parks' },
                        { val: 'Zero', label: 'Snag Handover' },
                        { val: 'M50', label: 'Concrete Mix' }
                      ],
                      turnkey: [
                        { val: '25+', label: 'Design-Build Sites' },
                        { val: '100%', label: 'Material Trace' },
                        { val: 'Primavera', label: 'Timeline Sync' }
                      ]
                    };

                    const currentStats = statsMap[slug] || statsMap.residential;

                    return currentStats.map((stat, sIdx) => (
                      <div key={sIdx} className="micro-stat-item" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '22px', fontWeight: '900', color: '#b89047', lineHeight: '1' }}>
                          {stat.val}
                        </div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#666', lineHeight: '1.3' }}>
                          {stat.label}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>

            </div>

            {/* Results Image Grid with Interactive Glassmorphic Cards */}
            <div className="project-results-image-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
              {(() => {
                const projectLabels = {
                  residential: [
                    {
                      label: 'High-Rise Structural Core',
                      subtitle: 'PHASE 01: ZONING & FRAMES',
                      specs: ['Excavation & shoring checks', 'High-strength RCC core (M40)', 'Laser-aligned formwork checks']
                    },
                    {
                      label: 'Completed Luxury Towers',
                      subtitle: 'PHASE 02: RESIDENTIAL CLUSTERS',
                      specs: ['Fast floor cycles', 'External blockwork execution', 'Accredited facade glazing']
                    },
                    {
                      label: 'Site Infrastructure Layout',
                      subtitle: 'PHASE 03: TOWNSHIP AMENITIES',
                      specs: ['Integrated MEP networks', 'Stormwater drainage pipelines', 'Internal roads & landscaping']
                    }
                  ],
                  commercial: [
                    {
                      label: 'Corporate Office Complex',
                      subtitle: 'PHASE 01: COLUMN-FREE SPANS',
                      specs: ['Post-tensioned slab designs', 'Long-span structural steel', 'Double-height lobby frames']
                    },
                    {
                      label: 'Specialized Medical Facility',
                      subtitle: 'PHASE 02: MEP & COMPLIANCE',
                      specs: ['Cleanroom HVAC ducting', 'Medical gas pipe grids', 'Dedicated generator substations']
                    },
                    {
                      label: 'Institutional Learning Center',
                      subtitle: 'PHASE 03: FUNCTIONAL DESIGN',
                      specs: ['Acoustic insulation barriers', 'High-occupancy fire safety', 'Eco-friendly building credits']
                    }
                  ],
                  turnkey: [
                    {
                      label: 'Design & Engineering Phase',
                      subtitle: 'PHASE 01: EPC COORDINATION',
                      specs: ['Detailed BIM design files', 'Value engineering audits', 'Soil & geo-technical checks']
                    },
                    {
                      label: 'Strategic Material Supply',
                      subtitle: 'PHASE 02: PROCUREMENT LOGISTICS',
                      specs: ['Direct manufacturer pipelines', 'QA/QC batch checking', 'Milestone-based delivery']
                    },
                    {
                      label: 'Completed Handover Site',
                      subtitle: 'PHASE 03: SNAG-FREE DELIVERY',
                      specs: ['Snag-free final inspection', 'Integrated commissioning tests', 'Regulatory occupancy approvals']
                    }
                  ]
                };

                const cards = projectLabels[slug] || projectLabels.residential;

                return extra.results.images.map((img, idx) => (
                  <div key={idx} className="results-card-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0',
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(184, 144, 71, 0.08)',
                    borderRadius: '16px',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div className="results-image-container" style={{
                      width: '100%',
                      height: '340px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <img
                        src={img}
                        alt={`Delivered project showcase ${idx + 1}`}
                        className="project-results-image"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                      
                      {/* Ambient Bottom Gradient (Default state) */}
                      <div className="project-results-gradient" style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(12,12,12,0.6) 0%, rgba(12,12,12,0.1) 40%, transparent 100%)',
                        transition: 'opacity 0.4s ease'
                      }} />
                      
                      {/* Premium Top Corner Phase Indicator */}
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(12, 12, 12, 0.75)',
                        border: '1px solid rgba(184, 144, 71, 0.3)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '11px',
                        fontWeight: '800',
                        color: '#b89047',
                        zIndex: 3
                      }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Interactive Glassmorphic Slide-up Overlay */}
                      <div className="project-results-overlay" style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(12,12,12,0.96) 0%, rgba(12,12,12,0.7) 70%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '24px',
                        opacity: 0,
                        transform: 'translateY(16px)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 2
                      }}>
                        <span style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '8.5px',
                          fontWeight: '800',
                          color: '#b89047',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          marginBottom: '6px'
                        }}>
                          {cards[idx]?.subtitle || 'DELIVERED'}
                        </span>
                        
                        <h4 style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: '16px',
                          fontWeight: '900',
                          color: '#ffffff',
                          margin: 0,
                          letterSpacing: '-0.02em',
                          lineHeight: '1.2'
                        }}>
                          {cards[idx]?.label || `Project Phase ${idx + 1}`}
                        </h4>

                        {/* Interactive Specs Details (Fades/slides up on hover) */}
                        <div className="results-specs-list" style={{
                          opacity: 0,
                          maxHeight: 0,
                          overflow: 'hidden',
                          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}>
                          {cards[idx]?.specs?.map((spec, specIdx) => (
                            <div key={specIdx} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '12px',
                              color: 'rgba(255, 255, 255, 0.75)'
                            }}>
                              <span style={{ color: '#b89047', fontSize: '14px' }}>•</span>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Interactive Circular CTA Icon */}
                        <div className="results-card-cta" style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          marginTop: '16px',
                          alignSelf: 'flex-start',
                          transition: 'all 0.3s ease'
                        }}>
                          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>

        {/* ── 5. Bottom Call-to-Action Section ── */}
        <section className="reveal-on-scroll" ref={addRef} style={{ padding: '60px 0 140px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '900', lineHeight: '1.15', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em' }}>
              Ready to build your next project?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: '1.7', color: '#666', margin: '0 0 16px 0', maxWidth: '520px' }}>
              Partner with Ramteja Constructions for predictable execution, structural durability, and institutional-grade delivery. Let's discuss your roadmap.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#0c0c0c',
                  color: '#ffffff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '18px 36px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
                className="hero-cta-btn"
              >
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* ── Localized CSS overrides and micro-animations ── */}
      <style>{`
        /* Reveal on scroll rules */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.srv-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Interactive scaling on visual visual elements */
        .projects-details-image-wrapper:hover .projects-details-image,
        .services-choose-us-image-wrapper:hover .services-choose-us-image,
        .results-card-wrapper:hover .project-results-image {
          transform: scale(1.08) !important;
        }

        /* Results image cards and overlay hover mechanics */
        .results-card-wrapper:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(184, 144, 71, 0.3) !important;
          box-shadow: 0 30px 60px rgba(184, 144, 71, 0.15) !important;
        }
        .results-card-wrapper:hover .project-results-overlay {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .results-card-wrapper:hover .results-specs-list {
          opacity: 1 !important;
          max-height: 120px !important;
          margin-top: 12px !important;
        }
        .results-card-wrapper:hover .project-results-gradient {
          opacity: 0 !important;
        }
        .results-card-wrapper:hover .results-card-cta {
          background-color: #b89047 !important;
          border-color: #b89047 !important;
          transform: rotate(360deg);
        }

        /* Premium Choose Us Cards Default & Hover States */
        .services-choose-us-card {
          position: relative !important;
          background: #ffffff !important;
          border: 1px solid rgba(184, 144, 71, 0.08) !important;
          border-radius: 16px !important;
          padding: 36px 32px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 24px !important;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
          box-shadow: 
            0 10px 30px -10px rgba(12, 12, 12, 0.04), 
            0 1px 3px rgba(12, 12, 12, 0.02) !important;
          overflow: hidden !important;
        }

        .services-choose-us-card::before {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 3px !important;
          background: linear-gradient(90deg, #b89047 0%, #d1ab66 100%) !important;
          opacity: 0 !important;
          transition: opacity 0.4s ease !important;
        }

        .services-choose-us-card:hover::before {
          opacity: 1 !important;
        }

        .services-choose-us-card:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(184, 144, 71, 0.3) !important;
          box-shadow: 
            0 30px 60px -15px rgba(184, 144, 71, 0.12),
            0 0 0 1px rgba(184, 144, 71, 0.1) !important;
        }

        .services-choose-us-icon-wrapper {
          width: 52px !important;
          height: 52px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(184, 144, 71, 0.06) !important;
          border: 1px solid rgba(184, 144, 71, 0.15) !important;
          border-radius: 12px !important;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .services-choose-us-card:hover .services-choose-us-icon-wrapper {
          background: #b89047 !important;
          border-color: #b89047 !important;
          transform: scale(1.05) rotate(5deg) !important;
        }

        .services-choose-us-card:hover .choose-us-svg-path {
          stroke: #ffffff !important;
        }

        .services-choose-us-card-title {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: 800 !important;
          font-size: 18px !important;
          color: #0c0c0c !important;
          transition: color 0.3s ease !important;
        }

        .services-choose-us-card:hover .services-choose-us-card-title {
          color: #b89047 !important;
        }

        .services-choose-us-card-description {
          font-family: 'Inter', sans-serif !important;
          font-size: 13.5px !important;
          line-height: 1.7 !important;
          color: #555555 !important;
          margin: 0 !important;
          text-align: justify !important;
          transition: color 0.3s ease !important;
        }

        .services-choose-us-card:hover .services-choose-us-card-description {
          color: #333333 !important;
        }

        /* Timeline bullet transitions */
        .step-bullet {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-working-process-list-item:hover .step-bullet {
          background-color: #b89047 !important;
          color: #ffffff !important;
          transform: scale(1.1);
          box-shadow: 0 0 12px rgba(184, 144, 71, 0.35);
        }

        /* Glassmorphic step cards hover */
        .process-step-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-working-process-list-item:hover .process-step-card {
          transform: translateX(8px);
          background-color: rgba(255, 255, 255, 0.95) !important;
          border-color: #b89047 !important;
          box-shadow: 0 10px 30px rgba(184, 144, 71, 0.06) !important;
        }

        .micro-stat-item {
          transition: transform 0.3s ease;
        }
        .micro-stat-item:hover {
          transform: translateY(-2px);
        }

        /* Button hover styles */
        .hero-cta-btn:hover {
          background-color: #b89047 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(184, 144, 71, 0.3) !important;
        }
        .hero-secondary-btn:hover {
          border-color: #0c0c0c !important;
          background-color: rgba(12, 12, 12, 0.03) !important;
          transform: translateY(-2px);
        }
        .section-link:hover {
          color: #b89047 !important;
          border-color: #b89047 !important;
        }

        /* Desktop split grids & order rules */
        @media (max-width: 991px) {
          .split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .choose-us-top-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .project-results-image-wrapper {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 768px) {
          .choose-us-top-grid {
            grid-template-columns: 1fr !important;
          }
          .choose-us-bottom-card-grid {
            grid-template-columns: 1fr !important;
          }
          .project-results-image-wrapper {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .results-image-container {
            height: 300px !important;
          }
          .projects-details-image-wrapper {
            aspect-ratio: 16 / 9 !important;
            height: auto !important;
          }
          .services-choose-us-image-wrapper {
            aspect-ratio: 16 / 9 !important;
            height: auto !important;
          }
          .project-working-process-list-item {
            padding-left: 48px;
            position: relative;
          }
          .project-working-process-list-wrapper {
            padding-left: 0 !important;
          }
          .project-working-process-list-wrapper > div:first-child {
            left: 19px !important;
          }
          .step-bullet {
            left: 0 !important;
          }
          .project-working-process-number-name {
            min-width: auto !important;
          }
        }
      `}</style>

    </div>
  );
}
