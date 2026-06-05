import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    date: 'June 02, 2026',
    tag: 'Accreditation',
    title: 'Ramteja Constructions Receives ISO 9001:2015 Certification for EPC Excellence',
    desc: 'Our commitment to structural quality, safety standards, and predictive material auditing has been recognized under international compliance standards.',
    link: '/contact'
  },
  {
    date: 'May 14, 2026',
    tag: 'Milestone',
    title: 'Ramteja Constructions Awarded Landmark High-Rise Township in Hyderabad',
    desc: 'The project spans over 42,000 m² and will utilize advanced climbing aluminium formwork systems to achieve rapid, safe, and robust floor cycles.',
    link: '/contact'
  },
  {
    date: 'April 22, 2026',
    tag: 'Innovation',
    title: 'Pioneering Eco-Compliant Materials in Modern Concrete Engineering',
    desc: 'We are integrating green concrete mixes and optimized steel reinforcement across all our structural phases, reducing carbon footprints without sacrificing load capacity.',
    link: '/contact'
  }
];

export default function NewsRoom() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="news-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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
        <section className="news-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`news-animate-item ${animate ? 'news-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>News Room</div>
              </div>
            </div>
            <h1 className="news-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              News & Press Releases
            </h1>
            <p className="news-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              Stay updated with our latest project milestones, technical innovations, and structural compliance achievements.
            </p>
          </div>
        </section>

        {/* ── Articles List ── */}
        <section className={`news-list-section news-animate-item news-delay-1 ${animate ? 'news-visible' : ''}`} style={{ paddingBottom: '140px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '860px', margin: '0 auto' }}>
            {newsItems.map((item, idx) => (
              <div key={idx} className="news-card" style={{
                background: '#ffffff',
                border: '1px solid rgba(184, 144, 71, 0.08)',
                borderRadius: '16px',
                padding: '36px',
                boxShadow: '0 10px 30px -10px rgba(12, 12, 12, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', color: '#b89047', letterSpacing: '0.05em' }}>{item.date}</span>
                  <span style={{
                    background: 'rgba(184, 144, 71, 0.06)',
                    color: '#b89047',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '9px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '6px 12px',
                    borderRadius: '100px'
                  }}>{item.tag}</span>
                </div>
                <h3 className="news-card-title" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0c0c0c', margin: 0, transition: 'color 0.3s ease' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', lineHeight: '1.7', color: '#666', margin: 0, textAlign: 'justify' }}>
                  {item.desc}
                </p>
                <div style={{ display: 'flex', paddingTop: '8px' }}>
                  <Link to={item.link} className="news-card-link" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#0c0c0c',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}>
                    Read full release
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style>{`
        .news-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .news-animate-item.news-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .news-delay-1 { transition-delay: 0.15s; }

        .news-card:hover {
          transform: translateY(-4px);
          border-color: rgba(184, 144, 71, 0.25);
          box-shadow: 0 20px 45px rgba(184, 144, 71, 0.08);
        }
        .news-card:hover .news-card-title {
          color: #b89047;
        }
        .news-card-link:hover {
          color: #b89047;
        }
        .news-card-link svg {
          transition: transform 0.3s ease;
        }
        .news-card-link:hover svg {
          transform: translateX(3px);
        }
        @media (max-width: 768px) {
          .news-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .news-card {
            padding: 24px !important;
          }
        }
      `}</style>

    </div>
  );
}
