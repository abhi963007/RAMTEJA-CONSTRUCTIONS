import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="privacy-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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
        <section className="privacy-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`privacy-animate-item ${animate ? 'privacy-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>Legal</div>
              </div>
            </div>
            <h1 className="privacy-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              Privacy Policy
            </h1>
            <p className="privacy-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              Please read our policy guidelines regarding how we safeguard your data and respect your privacy across all operations.
            </p>
          </div>
        </section>

        {/* ── Privacy Policy Content ── */}
        <section className={`privacy-content-section privacy-animate-item privacy-delay-1 ${animate ? 'privacy-visible' : ''}`} style={{ paddingBottom: '140px' }}>
          <div className="privacy-card" style={{
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
            <div className="privacy-section">
              <h2 className="privacy-section-title">1. Information We Collect</h2>
              <p className="privacy-text">
                We collect information directly from you when you enquire about our services, request a consultation, or submit forms on our website. This includes your name, email address, phone number, company name, and details regarding your prospective construction or EPC project.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">2. How We Use Your Data</h2>
              <p className="privacy-text">
                Your data is exclusively utilized to process your enquiries, deliver accurate consultation schedules, send project progress updates, and comply with safety regulations. We maintain strict internal logs and do not sell, rent, or distribute your private data to third-party advertising companies.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">3. Data Security & Integrity</h2>
              <p className="privacy-text">
                At Ramteja Constructions, we value your trust. We deploy industry-standard database encryption, SSL protocols, and restricted staff access levels to ensure your details are shielded from unauthorized exposures or data breaches.
              </p>
            </div>

            <div className="privacy-section">
              <h2 className="privacy-section-title">4. Compliance & Municipal Codes</h2>
              <p className="privacy-text">
                Our database systems comply with national data sovereignty regulations and regional compliance mandates. If you require absolute deletion of your submitted information, please submit a request through our contact page.
              </p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .privacy-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .privacy-animate-item.privacy-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .privacy-delay-1 { transition-delay: 0.15s; }

        .privacy-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .privacy-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #0c0c0c;
          margin: 0;
          border-left: 3px solid #b89047;
          padding-left: 16px;
        }

        .privacy-text {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          color: #555555;
          margin: 0;
          text-align: justify;
          padding-left: 19px;
        }

        @media (max-width: 768px) {
          .privacy-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .privacy-card {
            padding: 36px 24px !important;
            gap: 28px !important;
          }
          .privacy-text {
            padding-left: 0 !important;
          }
        }
      `}</style>

    </div>
  );
}
