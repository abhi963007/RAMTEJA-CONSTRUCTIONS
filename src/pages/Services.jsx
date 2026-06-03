import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        
        {/* Intro */}
        <div className="hero-about-wrap" style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div className="section-sub-title">Capabilities</div>
          <h1 className="hero-about-title" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '20px' }}>
            Delivering Projects of Every Magnitude
          </h1>
          <p className="description" style={{ color: '#ccc', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Design, engineering, procurement, and construction delivered through a unified, disciplined system.
          </p>
        </div>

        {/* Section 1: Residential */}
        <div style={{ padding: '60px', backgroundColor: '#161616', borderRadius: '12px', marginBottom: '60px' }}>
          <div className="section-sub-title">Residential</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Where Homes Take Shape</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '40px' }}>
            From high-rise apartment towers to large-scale townships, we build residential spaces engineered for speed and structural legacy.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>High-Rise Towers</h3>
              <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                <li><strong>Structural Execution:</strong> High-rise concrete systems engineered for load, height, and long-term performance.</li>
                <li><strong>Advanced Construction:</strong> Aluminum and climbing formwork for fast floor cycles without compromising structural precision.</li>
                <li><strong>MEP Coordination:</strong> Technical integration of HVAC, electrical, plumbing, fire protection, and vertical transport.</li>
                <li><strong>Safety & Compliance:</strong> Strict vertical safety screens and QA/QC structural logging.</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Townships</h3>
              <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                <li><strong>Residential Development:</strong> Diverse density villas and apartment clusters executed in parallel phases.</li>
                <li><strong>Infrastructure:</strong> Road networks, drainage, water supply grids, STPs, and electrical distribution lines.</li>
                <li><strong>Amenities:</strong> Premium clubhouse, recreational structures, and landscaping executed on schedule.</li>
                <li><strong>Logistics:</strong> Multi-zone coordination so that no zone is ever waiting for materials or labor.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Commercial */}
        <div style={{ padding: '60px', backgroundColor: '#161616', borderRadius: '12px', marginBottom: '60px' }}>
          <div className="section-sub-title">Commercial</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Built For Public Life</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem', marginBottom: '40px' }}>
            Commercial developments demand technical precision, disciplined timelines, and zero tolerance for error.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Commercial High Rise</h3>
              <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                <li><strong>Structural Steel:</strong> Steel-concrete composite frames enabling column-free commercial spaces.</li>
                <li><strong>MEP & Technical:</strong> Complex building management systems (BMS), high-volume HVAC, and emergency power backup.</li>
                <li><strong>Facade & Finishes:</strong> Structural glazing, curtain wall systems, and high-spec lobby/interior fits.</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Institutional Buildings</h3>
              <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.8' }}>
                <li><strong>Schools & Universities:</strong> Acoustic isolation, load-bearing lecture halls, and complex campus infrastructure.</li>
                <li><strong>Hospitals:</strong> Specialized sanitary piping, medical gas line routing, and strict clean-room HVAC setups.</li>
                <li><strong>Compliance:</strong> Complete regulatory certifications for immediate public occupancy.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Turnkey EPC Delivery */}
        <div style={{ padding: '60px', backgroundColor: '#1a2215', borderRadius: '12px', border: '1px solid #2d451e' }}>
          <div className="section-sub-title" style={{ color: '#8cd462' }}>Integrated Delivery</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Turnkey EPC (Design, Build, Handover)</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '40px' }}>
            We own the entire project lifecycle. One contract, one team, complete accountability.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
            <div style={{ padding: '20px', backgroundColor: '#12190e', borderRadius: '6px' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>1. Design & Engineering</h4>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4' }}>Resolving spatial and structural complexity on paper before site execution begins.</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#12190e', borderRadius: '6px' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>2. Procurement & Supply</h4>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4' }}>Sourcing raw materials and specialized technical equipment through a verified supplier network.</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#12190e', borderRadius: '6px' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>3. Construction & Controls</h4>
              <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4' }}>Civil and mechanical works managed under a single, transparent milestone-reporting dashboard.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/contact" className="primary-button w-inline-block">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">Start Turnkey Project</div>
                <div className="primary-button-hover-text">Start Turnkey Project</div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
