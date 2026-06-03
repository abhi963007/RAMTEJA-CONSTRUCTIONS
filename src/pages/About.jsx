import React from 'react';

export default function About() {
  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        
        {/* Intro */}
        <div className="hero-about-wrap" style={{ marginBottom: '80px' }}>
          <div className="section-sub-title">About Us</div>
          <div className="hero-about-title-box">
            <h1 className="hero-about-title" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '20px' }}>
              Built on Trust, Precision, and Enduring Quality
            </h1>
            <p className="description" style={{ color: '#ccc', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 40px' }}>
              Ramteja Constructions builds structures that last — strong, precise, and crafted with enduring care. Every project reflects our dedication to quality, protection, and long-term value.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px', alignItems: 'center' }}>
          <div>
            <div className="section-sub-title">Our Vision</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Shape the Future of Urban India</h2>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '1.1rem' }}>
              As cities expand vertically and infrastructure demands grow increasingly complex, the need for disciplined, reliable, and execution-focused EPC partners has never been greater. 
              Ramteja Constructions aims to be at the forefront of this transformation — delivering large-scale residential and township developments with engineering precision, operational excellence, and uncompromising execution standards.
            </p>
          </div>
          <div>
            <img src="/images/69ad0d330436119e562d47fe_project-home-image-2.webp" alt="Vision" style={{ width: '100%', borderRadius: '12px' }} />
          </div>
        </div>

        {/* What We Stand For */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-sub-title" style={{ textAlign: 'center', marginBottom: '40px' }}>What We Stand For</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
            <div className="pricing-left-card" style={{ padding: '30px', border: '1px solid #333' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>Precision over Promises</h3>
              <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5' }}>We deliver accuracy down to the millimeter. We commit to what we can do, and we execute exactly as promised.</p>
            </div>
            <div className="pricing-left-card" style={{ padding: '30px', border: '1px solid #333' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>Scale Requires Structure</h3>
              <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5' }}>Complex high-rise developments demand rigorous process. Our systems are built to scale safely, fast, and without compromise.</p>
            </div>
            <div className="pricing-left-card" style={{ padding: '30px', border: '1px solid #333' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>Reliability is the Real Deliverable</h3>
              <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5' }}>Beyond concrete and steel, we deliver peace of mind. Developers trust us to protect their timelines and reputations.</p>
            </div>
          </div>
        </div>

        {/* Mission / Pillars */}
        <div>
          <div className="section-sub-title" style={{ textAlign: 'center' }}>Our Mission</div>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>How Vision is Translated to Execution</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {[
              {
                title: 'Engineering Excellence',
                desc: 'We uphold rigorous engineering and construction standards across every stage of project execution, from planning to handover.'
              },
              {
                title: 'Time Discipline',
                desc: 'We maintain structured execution systems designed to improve predictability, accelerate delivery cycles, and minimize delays.'
              },
              {
                title: 'Cost Efficiency',
                desc: 'Our integrated in-house execution model enables stronger operational control, optimized procurement, and efficient resource deployment.'
              },
              {
                title: 'Safety & Compliance',
                desc: 'We prioritize workforce safety, regulatory compliance, and disciplined site management across all projects and operations.'
              },
              {
                title: 'Workforce Capability',
                desc: 'We continue to strengthen our engineering, technical, and labour ecosystem to support increasingly complex and large-scale developments.'
              },
              {
                title: 'Long-Term Partnerships',
                desc: 'We focus on building lasting relationships grounded in trust, transparency, accountability, and consistent execution performance.'
              }
            ].map((pillar, idx) => (
              <div key={idx} style={{ padding: '30px', backgroundColor: '#161616', borderRadius: '8px' }}>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '10px' }}>{pillar.title}</h4>
                <p style={{ color: '#aaa', lineHeight: '1.5', fontSize: '1rem' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
