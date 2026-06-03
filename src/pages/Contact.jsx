import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    location: '',
    landArea: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inner-page-content" style={{ padding: '120px 0 80px', backgroundColor: '#0f0f0f', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Intro */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
          <div className="section-sub-title">Contact</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Planning at Scale Starts Here</h1>
          <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '1.1rem' }}>
            RamTeja Constructions partners with developers, landowners, and institutions to execute high-rise and large-scale EPC developments with precision, speed, and reliability.
          </p>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: '#161616', padding: '40px', borderRadius: '12px', border: '1px solid #222' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h3 style={{ color: '#8cd462', fontSize: '1.75rem', marginBottom: '15px' }}>Message Sent Successfully!</h3>
              <p style={{ color: '#aaa' }}>Thank you for reaching out. A representative from RamTeja Constructions will contact you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="secondary-button" 
                style={{ marginTop: '20px', cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Company *</label>
                  <input 
                    type="text" 
                    name="company" 
                    required 
                    value={formData.company} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Designation</label>
                  <input 
                    type="text" 
                    name="designation" 
                    value={formData.designation} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Project Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Estimated Land Area (Sq. Ft. / Acres)</label>
                <input 
                  type="text" 
                  name="landArea" 
                  value={formData.landArea} 
                  onChange={handleChange} 
                  style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>Message / Project Description</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  style={{ width: '100%', padding: '12px', backgroundColor: '#222', border: '1px solid #333', borderRadius: '6px', color: '#fff', resize: 'vertical' }} 
                />
              </div>

              <div style={{ marginTop: '10px' }}>
                <button type="submit" className="primary-button" style={{ width: '100%', cursor: 'pointer', border: 'none' }}>
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Submit Request</div>
                    <div className="primary-button-hover-text">Submit Request</div>
                  </div>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
