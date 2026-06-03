import React from 'react';

const posts = [
  {
    title: 'Metal Roofing Benefits for Residential and Commercial Buildings',
    desc: 'An in-depth look at why metal and steel roofing structures are becoming the go-to choice for modern architects.',
    date: 'April 12, 2026'
  },
  {
    title: 'How to Identify Roof Leaks Before They Cause Structural Damage',
    desc: 'A checklist of signs that your roof needs urgent repairs, from attic dampness to sagging spots.',
    date: 'March 28, 2026'
  }
];

export default function Blogs() {
  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container">
        
        {/* Intro */}
        <div className="hero-about-wrap" style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div className="section-sub-title">Resources</div>
          <h1 className="hero-about-title" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '20px' }}>
            Latest News & Roofing Insights
          </h1>
          <p className="description" style={{ color: '#ccc', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Stay updated with current industry trends, care instructions, and material engineering updates.
          </p>
        </div>

        {/* Blog Grids */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {posts.map((post, idx) => (
            <div key={idx} className="pricing-left-card" style={{ padding: '40px', border: '1px solid #222', borderRadius: '12px' }}>
              <div style={{ color: '#8cd462', fontSize: '0.9rem', marginBottom: '10px' }}>{post.date}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>{post.title}</h3>
              <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.5', marginBottom: '20px' }}>{post.desc}</p>
              <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Read Full Post &rarr;</a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
