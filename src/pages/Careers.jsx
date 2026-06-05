import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: 'Senior Structural Engineer',
    dept: 'Engineering & Design',
    location: 'Hyderabad Headquarters',
    type: 'Full-Time',
    desc: 'Lead the geotechnical analysis and structural engineering drafts for multi-tower residential developments and commercial high-rises.',
    link: '/contact'
  },
  {
    title: 'EPC Quality Inspector (QA/QC)',
    dept: 'Quality Assurance',
    location: 'Regional Site Operations',
    type: 'Full-Time',
    desc: 'Perform on-site inspections, concrete batch testing, and reinforcement audits to ensure zero structural risk and complete ISO compliance.',
    link: '/contact'
  },
  {
    title: 'Site Safety Manager',
    dept: 'HSE Compliance',
    location: 'Regional Site Operations',
    type: 'Full-Time',
    desc: 'Implement and monitor zero-accident safety protocols, active site training, and high-rise structural compliance programs.',
    link: '/contact'
  }
];

export default function Careers() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="careers-page-react" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
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
        <section className="careers-hero-section" style={{ padding: '180px 0 64px 0', textAlign: 'center' }}>
          <div className={`careers-animate-item ${animate ? 'careers-visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="subtitle-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div className="subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b89047', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                <div className="subtitle-circle" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#b89047' }}></div>
                <div>Careers</div>
              </div>
            </div>
            <h1 className="careers-hero-title" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '900', fontSize: 'clamp(36px, 5.5vw, 68px)', lineHeight: '1.06', color: '#0c0c0c', margin: 0, letterSpacing: '-0.03em', maxWidth: '850px' }}>
              Build your career with us.
            </h1>
            <p className="careers-hero-desc" style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', lineHeight: '1.7', color: '#666', margin: 0, maxWidth: '620px' }}>
              Join our engineering and construction team to deliver high-quality structures built on trust and execution discipline.
            </p>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section className={`careers-list-section careers-animate-item careers-delay-1 ${animate ? 'careers-visible' : ''}`} style={{ paddingBottom: '140px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '860px', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '24px', fontWeight: '800', color: '#0c0c0c', margin: 0 }}>Open Positions</h2>
              <div style={{ width: '40px', height: '3px', backgroundColor: '#b89047' }}></div>
            </div>

            {jobs.map((job, idx) => (
              <div key={idx} className="job-card" style={{
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: '700', color: '#b89047', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{job.dept}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="job-tag">{job.location}</span>
                    <span className="job-tag active">{job.type}</span>
                  </div>
                </div>
                <h3 className="job-card-title" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '20px', fontWeight: '800', color: '#0c0c0c', margin: 0, transition: 'color 0.3s ease' }}>
                  {job.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14.5px', lineHeight: '1.7', color: '#666', margin: 0, textAlign: 'justify' }}>
                  {job.desc}
                </p>
                <div style={{ display: 'flex', paddingTop: '8px' }}>
                  <Link to={job.link} className="job-card-link" style={{
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
                    Apply for this role
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
        .careers-animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .careers-animate-item.careers-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .careers-delay-1 { transition-delay: 0.15s; }

        .job-card:hover {
          transform: translateY(-4px);
          border-color: rgba(184, 144, 71, 0.25);
          box-shadow: 0 20px 45px rgba(184, 144, 71, 0.08);
        }
        .job-card:hover .job-card-title {
          color: #b89047;
        }
        
        .job-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(12, 12, 12, 0.04);
          color: #555;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .job-tag.active {
          background: rgba(184, 144, 71, 0.08);
          color: #b89047;
          border-color: rgba(184, 144, 71, 0.15);
        }

        .job-card-link:hover {
          color: #b89047;
        }
        .job-card-link svg {
          transition: transform 0.3s ease;
        }
        .job-card-link:hover svg {
          transform: translateX(3px);
        }
        @media (max-width: 768px) {
          .careers-hero-section {
            padding: 140px 0 48px 0 !important;
          }
          .job-card {
            padding: 24px !important;
          }
        }
      `}</style>

    </div>
  );
}
