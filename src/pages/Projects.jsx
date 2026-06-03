import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Precision Roofing for Modern Residences',
    desc: 'Delivering lasting protection and aesthetic harmony through expert craftsmanship and high-grade steel materials.',
    type: 'Residential Roofing',
    location: 'Pacific Heights, San Francisco',
    area: '320 m²',
    year: '2024',
    material: 'Galvanized Steel Panels',
    image: '/images/69ad0d330436119e562d47fe_project-home-image-2.webp'
  },
  {
    title: 'High-Performance Roofing for Industrial Spaces',
    desc: 'Engineered for durability and efficiency — designed to withstand heavy weather and long-term operation demands.',
    type: 'Industrial Roofing',
    location: 'Dallas, Texas',
    area: '1,200 m²',
    year: '2023',
    material: 'Corrugated Zinc-Coated Panels',
    image: '/images/69ad0d3fb866c188526eaf21_project-home-image-1.webp'
  },
  {
    title: 'Commercial Complex Skylight Setup',
    desc: 'High-durability polycarbonate sheets providing natural daylighting and UV resistance for a premium shopping mall atrium.',
    type: 'Commercial Roofing',
    location: 'Downtown Chicago, Illinois',
    area: '850 m²',
    year: '2024',
    material: 'Polycarbonate Translucent Sheets',
    image: '/images/69c8da07143f526da3152aaa_Roof Installation Scene (2) 1.jpg'
  }
];

export default function Projects() {
  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        
        {/* Intro */}
        <div className="hero-about-wrap" style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div className="section-sub-title">Portfolio</div>
          <h1 className="hero-about-title" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '20px' }}>
            Projects That Stand the Test of Time
          </h1>
          <p className="description" style={{ color: '#ccc', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            A showcase of our residential, commercial, and industrial engineering excellence.
          </p>
        </div>

        {/* Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {projects.map((project, idx) => (
            <div key={idx} style={{ 
              display: 'grid', 
              gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', 
              gap: '40px', 
              alignItems: 'center',
              backgroundColor: '#161616',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #222'
            }}>
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '40px' }}>
                    <div className="section-sub-title">{project.type}</div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '15px', color: '#fff' }}>{project.title}</h3>
                    <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5', marginBottom: '25px' }}>{project.desc}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', borderTop: '1px solid #333', paddingTop: '20px' }}>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Location</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.location}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Roof Area</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.area}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Completion Year</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.year}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Material Used</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.material}</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ padding: '40px' }}>
                    <div className="section-sub-title">{project.type}</div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '15px', color: '#fff' }}>{project.title}</h3>
                    <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5', marginBottom: '25px' }}>{project.desc}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', borderTop: '1px solid #333', paddingTop: '20px' }}>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Location</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.location}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Roof Area</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.area}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Completion Year</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.year}</div>
                      </div>
                      <div>
                        <div style={{ color: '#666', fontSize: '0.85rem' }}>Material Used</div>
                        <div style={{ color: '#fff', fontSize: '0.95rem' }}>{project.material}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
