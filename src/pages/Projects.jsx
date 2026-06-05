import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Ramteja Residential Towers',
    desc: 'A premium multi-tower high-rise residential complex built for endurance, speed, and structural scale.',
    type: 'Residential',
    location: 'Hyderabad, Telangana',
    area: '42,000 m²',
    year: '2024',
    material: 'High-Strength RCC (M40) & Climbing Formwork',
    image: '/images/service_residential.png'
  },
  {
    title: 'TechPark Commercial Center',
    desc: 'State-of-the-art office spaces featuring long column-free spans, high-specification glazing, and advanced MEP system coordination.',
    type: 'Commercial',
    location: 'Bengaluru, Karnataka',
    area: '68,000 m²',
    year: '2023',
    material: 'Post-Tensioned Slabs & Double-Glazed Facade',
    image: '/images/service_commercial.png'
  },
  {
    title: 'Metro Logistics Warehouse',
    desc: 'Fast-track turnkey EPC delivery of a massive logistics and distribution park with high-durability structural steel frames.',
    type: 'Turnkey',
    location: 'Chennai, Tamil Nadu',
    area: '110,000 m²',
    year: '2024',
    material: 'Galvanized Structural Steel & PEB Panels',
    image: '/images/service_turnkey.png'
  },
  {
    title: 'Prestige Plaster Housing Phase II',
    desc: 'A large-scale township development incorporating sustainable building materials and fast-cycle concrete pouring.',
    type: 'Residential',
    location: 'Pune, Maharashtra',
    area: '35,000 m²',
    year: '2024',
    material: 'Eco-Compliant Concretes & System Formwork',
    image: '/images/value_reliability.png'
  },
  {
    title: 'Capital Business Hub',
    desc: 'Contemporary corporate headquarters with specialized structural engineering and high-occupancy fire safety integrations.',
    type: 'Commercial',
    location: 'Mumbai, Maharashtra',
    area: '28,000 m²',
    year: '2023',
    material: 'Grade-A Reinforced Concrete & HVAC Control Network',
    image: '/images/value_precision.png'
  },
  {
    title: 'Industrial Manufacturing Facility',
    desc: 'An institutional manufacturing plant engineered for heavy structural load capacities, safety standards, and operational flow.',
    type: 'Turnkey',
    location: 'Vizag, Andhra Pradesh',
    area: '54,000 m²',
    year: '2024',
    material: 'High-Yield Rebars & High-Load Foundation Pours',
    image: '/images/value_structure.png'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Entrance animation trigger
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.type === filter
  );

  return (
    <div className="projects-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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
        
        {/* ── 1. Hero Section ── */}
        <section className="prj-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`prj-animate-item ${animate ? 'prj-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>Projects</div>
              </div>
            </div>
            <h1 className="prj-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              Projects delivered to date
            </h1>
            <p className="prj-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              A curated showcase of our residential towers, commercial hubs, and turnkey EPC deliveries built with structural precision.
            </p>
          </div>
        </section>

        {/* ── 2. Filters Row ── */}
        <section className={`prj-filter-section prj-animate-item prj-delay-1 ${animate ? 'prj-visible' : ''}`} style={{ paddingBottom: '48px', display: 'flex', justifyContent: 'center' }}>
          <div className="prj-filter-row" style={{ display: 'inline-flex', gap: '12px', background: 'rgba(12, 12, 12, 0.03)', padding: '6px', borderRadius: '100px', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
            {['All', 'Residential', 'Commercial', 'Turnkey'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`prj-filter-btn ${filter === cat ? 'active' : ''}`}
                style={{
                  border: 'none',
                  background: filter === cat ? '#0c0c0c' : 'transparent',
                  color: filter === cat ? '#ffffff' : '#555555',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── 3. Projects Grid ── */}
        <section className={`prj-grid-section prj-animate-item prj-delay-2 ${animate ? 'prj-visible' : ''}`} style={{ paddingBottom: '96px' }}>
          <div className="prj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="prj-card">
                
                {/* Visual Image Banner with Curved Corners */}
                <div className="prj-card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="prj-card-image"
                  />
                  <div className="prj-card-tag">{project.type}</div>
                </div>

                {/* Typography and Project Details */}
                <div className="prj-card-body">
                  <h3 className="prj-card-title">{project.title}</h3>
                  <p className="prj-card-desc">{project.desc}</p>
                  
                  {/* Detailed Spec Panel */}
                  <div className="prj-spec-grid">
                    <div className="prj-spec-item">
                      <span className="prj-spec-label">Location</span>
                      <span className="prj-spec-value">{project.location}</span>
                    </div>
                    <div className="prj-spec-item">
                      <span className="prj-spec-label">Built Area</span>
                      <span className="prj-spec-value">{project.area}</span>
                    </div>
                    <div className="prj-spec-item">
                      <span className="prj-spec-label">Completion Year</span>
                      <span className="prj-spec-value">{project.year}</span>
                    </div>
                    <div className="prj-spec-item" style={{ gridColumn: 'span 2' }}>
                      <span className="prj-spec-label">Material & Systems</span>
                      <span className="prj-spec-value">{project.material}</span>
                    </div>
                  </div>

                  {/* View case study CTA */}
                  <div className="prj-card-footer">
                    <Link to="/contact" className="prj-card-link">
                      View Case Study
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Explore All Projects Section ── */}
        <section className={`prj-cta-section prj-animate-item prj-delay-3 ${animate ? 'prj-visible' : ''}`} style={{ paddingBottom: '140px', textAlign: 'center' }}>
          <Link to="/contact" className="prj-cta-btn">
            Explore All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </section>

      </div>

      {/* ── Scoped Layout and Hover CSS overrides ── */}
      <style>{`
        /* Entrance animation triggers */
        .prj-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .prj-animate-item.prj-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .prj-delay-1 { transition-delay: 0.15s; }
        .prj-delay-2 { transition-delay: 0.3s; }
        .prj-delay-3 { transition-delay: 0.45s; }

        /* Filter Row Buttons Hover */
        .prj-filter-btn:not(.active):hover {
          color: #b89047 !important;
          background: rgba(12, 12, 12, 0.05) !important;
        }

        /* Premium Project Card Grid */
        .prj-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(184, 144, 71, 0.08);
          border-radius: 16px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 
            0 10px 30px -10px rgba(12, 12, 12, 0.04), 
            0 1px 3px rgba(12, 12, 12, 0.02);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .prj-card:hover {
          transform: translateY(-8px);
          border-color: rgba(184, 144, 71, 0.3);
          box-shadow: 
            0 30px 60px -15px rgba(184, 144, 71, 0.12),
            0 0 0 1px rgba(184, 144, 71, 0.1);
        }

        /* Image Wrapper with Rounded Corners and Hover Scaling */
        .prj-card-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
          position: relative;
          background: #f5f3f0;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .prj-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .prj-card:hover .prj-card-image {
          transform: scale(1.06);
        }

        /* Category Tag overlay */
        .prj-card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(250, 249, 246, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #0c0c0c;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: 100px;
          z-index: 2;
        }

        /* Card Content Body styling */
        .prj-card-body {
          padding: 12px 16px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .prj-card-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #0c0c0c;
          margin: 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .prj-card:hover .prj-card-title {
          color: #b89047;
        }

        .prj-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: #666;
          margin: 0;
          text-align: justify;
        }

        /* Specs Panel Grid */
        .prj-spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 20px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .prj-spec-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .prj-spec-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #999999;
        }

        .prj-spec-value {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #222222;
        }

        /* Footer Link */
        .prj-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0c0c0c;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .prj-card-link svg {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .prj-card-link:hover {
          color: #b89047;
        }

        .prj-card-link:hover svg {
          transform: translateX(3px);
        }

        /* Symmetrical CTA Button */
        .prj-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #fff;
          background: #0c0c0c;
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .prj-cta-btn:hover {
          background: #b89047;
          box-shadow: 0 8px 32px rgba(184, 144, 71, 0.25);
          transform: translateY(-2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .prj-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 768px) {
          .prj-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .prj-hero-title {
            font-size: clamp(30px, 8vw, 44px) !important;
          }
          .prj-hero-desc {
            font-size: 15px !important;
          }
          .prj-cta-btn {
            width: 100%;
            justify-content: center;
          }
          .prj-card-body {
            padding: 12px 8px 16px 8px !important;
          }
        }
      `}</style>

    </div>
  );
}
