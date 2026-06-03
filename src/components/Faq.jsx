import React from 'react';

const faqs = [
  {
    q: 'How long does a roof replacement take?',
    a: 'Most residential roofs can be replaced within 2–5 days, depending on size, material, and weather conditions. We provide a clear timeline before starting the project.'
  },
  {
    q: 'What roofing materials do you offer?',
    a: 'We offer galvanized steel, zinc alloy panels, shingles, clay tiles, polycarbonate sheets, and copper panels.'
  },
  {
    q: 'Do you provide warranties?',
    a: 'Yes — all installations and materials come with warranty options for long-term protection.'
  },
  {
    q: 'How do I know if my roof needs repairs or replacement?',
    a: 'If you notice leaks, cracks, sagging, missing shingles, or rising energy bills, it’s time for an inspection.'
  },
  {
    q: 'Can I schedule a consultation online?',
    a: 'Absolutely — book your inspection directly through our website.'
  },
  {
    q: 'Do you handle emergency repairs?',
    a: 'Yes, we offer fast emergency repair services for urgent issues.'
  }
];

export default function Faq() {
  return (
    <section className="section faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left-box">
            <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2ec" className="faq-sub-title">FAQs</div>
            <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2ee" className="inner-title-box faq">
              <h3 className="inner-title white">Clear answers you can trust — find what you need about your roofing project.</h3>
            </div>
          </div>
          <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2f1" className="faq-right-box">
            {faqs.map((faq, index) => (
              <div key={index} data-delay="300" data-hover="false" className="accordion w-dropdown">
                <div className="accordion-title-wrap w-dropdown-toggle">
                  <div className="accordion-title">{faq.q}</div>
                  <div className="accordion-icon-wrapper">
                    <img loading="lazy" src="/images/699d46ee6a9500f2ee2a60f3_Faq.svg" alt="Arrow" className="accordion-icon-in" />
                  </div>
                </div>
                <nav className="accordion-description-wrap w-dropdown-list">
                  <div className="accordion-text-wrap">
                    <p className="faq-ans">{faq.a}</p>
                  </div>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
