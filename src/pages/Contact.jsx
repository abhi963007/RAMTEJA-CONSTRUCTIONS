import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    propertyType: '',
    serviceNeeded: '',
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
    <>
      <section className="section inner-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap">
            <div className="inner-content-box">
              <div data-w-id="c3b8cf2f-a21f-7d0e-e126-1f569cf7724b" className="animation-content-wrap">
                <div style={{
                  WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                  MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                  msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                  transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                  opacity: 0
                }} className="animation-content">
                  <div className="utlity-center-box contact">
                    <h1 className="style-guide-inner-title">Let’s Discuss Your Construction Needs</h1>
                    <div className="inner-hero-description-box contact">
                      <div className="secondary-text center">We provide construction estimates, project guidance, support services, and partnership opportunities tailored to your needs.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <div className="contact-form w-form">
            {!submitted ? (
              <form id="email-form" name="email-form" data-name="Email Form" onSubmit={handleSubmit} className="contact-from-wrap" data-wf-page-id="6992bba8cdc518727404d3d9" data-wf-element-id="f23e304c-1f7e-0e78-8c7d-ba5a28e4fd41">
                <div className="single-field-wrap">
                  <div className="single-field-box">
                    <label htmlFor="name">Your full name</label>
                    <input className="field w-input" maxLength={256} name="name" data-name="Name" placeholder="Name" type="text" id="name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="single-field-box">
                    <label htmlFor="Email">Email address</label>
                    <input className="field w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" type="email" id="Email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="single-field-wrap _2nd">
                  <div className="single-field-box">
                    <label htmlFor="commercial">Type of Property</label>
                    <input className="field w-input" maxLength={256} name="propertyType" data-name="PropertyType" placeholder="Residential / Commercial" type="text" id="commercial" required value={formData.propertyType} onChange={handleChange} />
                  </div>
                  <div className="single-field-box">
                    <label htmlFor="Replacement">Service Needed</label>
                    <input className="field w-input" maxLength={256} name="serviceNeeded" data-name="ServiceNeeded" placeholder="New Build / Renovation / Turnkey EPC" type="text" id="Replacement" required value={formData.serviceNeeded} onChange={handleChange} />
                  </div>
                </div>
                <div className="single-field-box">
                  <label htmlFor="field">Message / Project Description</label>
                  <textarea required placeholder="Type here" maxLength={5000} id="field" name="message" data-name="Field" className="text-areea w-input" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <input type="submit" data-wait="Please wait..." data-w-id="f23e304c-1f7e-0e78-8c7d-ba5a28e4fd48" style={{ opacity: 0 }} className="contact-submit-button w-button" value="Submit" />
              </form>
            ) : null}

            <div className="success-message w-form-done" style={{ display: submitted ? 'block' : 'none' }}>
              <div>Thank you! Your submission has been received!</div>
            </div>

            <div className="error-message w-form-fail" style={{ display: 'none' }}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>

          <div className="w-layout-grid contact-grid">
            <div data-w-id="15fba8df-cea5-d203-7e91-afc9331b804e" style={{ opacity: 0 }} className="contact-single-card">
              <div data-w-id="9bcfab07-2cfe-f2dc-01dd-3521e01068af" style={{ opacity: 0 }} className="contact-single-title-box">
                <div className="contact-single-icon-box">
                  <img src="/images/699556873b7558fb60595523_Contact%20Icon%201.svg" loading="lazy" alt="Sales Inquiry Icon" />
                </div>
                <div className="contact-single-title">Sales Inquiry</div>
              </div>
              <div data-w-id="48a53d83-776e-c1aa-e0ae-3ecbe1fd32da" style={{ opacity: 0 }} className="contact-single-content-box">
                <div className="secondary-text">Free quote, engineering consultation, or pricing</div>
                <a href="mailto:sales@ramtejaconstructions.com" className="secondary-text">sales@ramtejaconstructions.com</a>
              </div>
            </div>

            <div data-w-id="0a7f4de4-5dfa-44b4-465e-4a7d84d68c47" style={{ opacity: 0 }} className="contact-single-card">
              <div data-w-id="0a7f4de4-5dfa-44b4-465e-4a7d84d68c48" style={{ opacity: 0 }} className="contact-single-title-box">
                <div className="contact-single-icon-box">
                  <img src="/images/69955813062607ebe8a8ec81_Contact%20Icon%202.svg" loading="lazy" alt="Customer Support Icon" />
                </div>
                <div className="contact-single-title">Customer Support</div>
              </div>
              <div data-w-id="0a7f4de4-5dfa-44b4-465e-4a7d84d68c4d" style={{ opacity: 0 }} className="contact-single-content-box">
                <div className="secondary-text">Questions on ongoing or completed work</div>
                <a href="mailto:support@ramtejaconstructions.com" className="secondary-text">support@ramtejaconstructions.com</a>
              </div>
            </div>

            <div id="w-node-_6f08fb79-dd45-912f-6abe-bf1e43be2bd5-7404d3d9" data-w-id="6f08fb79-dd45-912f-6abe-bf1e43be2bd5" style={{ opacity: 0 }} className="contact-single-card">
              <div data-w-id="6f08fb79-dd45-912f-6abe-bf1e43be2bd6" style={{ opacity: 0 }} className="contact-single-title-box">
                <div className="contact-single-icon-box">
                  <img src="/images/69955812a7d81d9ef5c854b9_Contact%20Icon%203.svg" loading="lazy" alt="Partnerships Icon" />
                </div>
                <div className="contact-single-title">Partnerships</div>
              </div>
              <div data-w-id="6f08fb79-dd45-912f-6abe-bf1e43be2bdb" style={{ opacity: 0 }} className="contact-single-content-box">
                <div className="secondary-text">Suppliers, contractors, collaborations</div>
                <a href="mailto:partners@ramtejaconstructions.com" className="secondary-text">partners@ramtejaconstructions.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
