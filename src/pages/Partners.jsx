import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="partners-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        
        {/* ── Hero Section ── */}
        <section className="partners-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`partners-animate-item ${animate ? 'partners-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>Partners</div>
              </div>
            </div>
            <h1 className="partners-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              Partner with Ramteja
            </h1>
            <p className="partners-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              We collaborate with premium vendors, material suppliers, and specialized subcontractors who align with our standards of speed and precision.
            </p>
          </div>
        </section>

        {/* ── Partners Info Content ── */}
        <section className={`partners-content-section partners-animate-item partners-delay-1 ${animate ? 'partners-visible' : ''}`} style={{ paddingBottom: '140px' }}>
          <div className="partners-card" style={{
            background: '#ffffff',
            border: '1px solid rgba(184, 144, 71, 0.08)',
            borderRadius: '16px',
            padding: '56px 48px',
            boxShadow: '0 10px 30px -10px rgba(12, 12, 12, 0.04)',
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px'
          }}>
            <div className="partners-section">
              <h2 className="partners-section-title">Subcontractor Collaboration</h2>
              <p className="partners-text">
                At Ramteja Constructions, we maintain a highly structured partner ecosystem. Subcontractors are vetted on safety compliance, workforce capabilities, and structural execution performance. We require zero-accident records and high-quality craftsmanship across all engineering works.
              </p>
            </div>

            <div className="partners-section">
              <h2 className="partners-section-title">Vetted Material Vendors</h2>
              <p className="partners-text">
                To safeguard our procurement timelines and structural guarantees, we source only certified Grade-A materials (cement, structural steel, facade elements, and plumbing/electrical fixtures). We maintain long-term, transparent relationships with direct manufacturers.
              </p>
            </div>

            <div className="partners-section" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0c0c0c', margin: 0 }}>Join Our Network</h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '560px' }}>
                Enquire to register as a certified vendor or sub-contractor. Our procurement team will review your credentials and compliance files.
              </p>
              <div style={{ display: 'flex', marginTop: '8px' }}>
                <Link to="/contact" className="partners-cta-btn">
                  Submit Credentials
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .partners-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .partners-animate-item.partners-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .partners-delay-1 { transition-delay: 0.15s; }

        .partners-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .partners-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #0c0c0c;
          margin: 0;
          border-left: 3px solid #b89047;
          padding-left: 16px;
        }

        .partners-text {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          color: #555555;
          margin: 0;
          text-align: justify;
          padding-left: 19px;
        }

        .partners-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
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
        .partners-cta-btn:hover {
          background: #b89047;
          box-shadow: 0 8px 32px rgba(184, 144, 71, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .partners-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .partners-card {
            padding: 36px 24px !important;
            gap: 28px !important;
          }
          .partners-text {
            padding-left: 0 !important;
          }
          .partners-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

    </div>
  );
}
