import { useEffect, useState } from 'react';

export default function CookiePolicy() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cookie-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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
        <section className="cookie-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`cookie-animate-item ${animate ? 'cookie-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>Legal</div>
              </div>
            </div>
            <h1 className="cookie-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              Cookie Policy
            </h1>
            <p className="cookie-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              Understand how our website utilizes cookies to deliver optimized spatial visuals and seamless navigations.
            </p>
          </div>
        </section>

        {/* ── Cookie Policy Content ── */}
        <section className={`cookie-content-section cookie-animate-item cookie-delay-1 ${animate ? 'cookie-visible' : ''}`} style={{ paddingBottom: '140px' }}>
          <div className="cookie-card" style={{
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
            <div className="cookie-section">
              <h2 className="cookie-section-title">What are Cookies?</h2>
              <p className="cookie-text">
                Cookies are tiny text files placed on your browser or device when you navigate web pages. They serve to remember your website choices, language preferences, page loads, and interactions to provide a faster and smoother browsing experience.
              </p>
            </div>

            <div className="cookie-section">
              <h2 className="cookie-section-title">Types of Cookies We Use</h2>
              <p className="cookie-text">
                <strong>1. Essential Cookies:</strong> These cookies are critical to sustain database forms, layout frameworks, and route navigations. The website cannot function correctly without them.
                <br /><br />
                <strong>2. Preference Cookies:</strong> These remember details you choose (like forms values or regional settings) to personalize your experience.
                <br /><br />
                <strong>3. Analytical Cookies:</strong> We utilize anonymous tracking tools (such as Google Analytics) to measure website load speeds, page visits, and click metrics, helping us optimize layout responsiveness.
              </p>
            </div>

            <div className="cookie-section">
              <h2 className="cookie-section-title">Managing Cookie Settings</h2>
              <p className="cookie-text">
                You can block or disable cookies by adjusting your browser options. Please note that blocking essential cookies may cause some pages, like project listings or contact submission pages, to render improperly.
              </p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .cookie-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cookie-animate-item.cookie-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .cookie-delay-1 { transition-delay: 0.15s; }

        .cookie-section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cookie-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #0c0c0c;
          margin: 0;
          border-left: 3px solid #b89047;
          padding-left: 16px;
        }

        .cookie-text {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          color: #555555;
          margin: 0;
          text-align: justify;
          padding-left: 19px;
        }

        @media (max-width: 768px) {
          .cookie-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .cookie-card {
            padding: 36px 24px !important;
            gap: 28px !important;
          }
          .cookie-text {
            padding-left: 0 !important;
          }
        }
      `}</style>

    </div>
  );
}
