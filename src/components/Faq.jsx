import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does a typical construction project take?',
    a: 'Most residential and commercial developments take between 12 to 24 months, depending on scope, structural complexity, and site conditions. We provide a rigorous execution timeline prior to site mobilization.'
  },
  {
    q: 'What construction services do you offer?',
    a: 'We provide full EPC (Engineering, Procurement, and Construction) services including residential townships, commercial complexes, structural steel fabrication, and turnkey project delivery.'
  },
  {
    q: 'Do you provide warranties on structural work?',
    a: 'Yes — all construction projects are backed by comprehensive structural warranties, ensuring long-term reliability and peace of mind.'
  },
  {
    q: 'How do you ensure quality and structural safety?',
    a: 'We utilize top-grade materials, employ experienced site engineers, and adhere to strict IS code regulations and safety standards through every phase of development.'
  },
  {
    q: 'Can we schedule a project consultation online?',
    a: 'Absolutely — you can request a consultation or site inspection directly through our Contact page.'
  },
  {
    q: 'Do you handle custom turnkey project handovers?',
    a: 'Yes, we manage full turnkey delivery from conceptual design and architectural layouts to final interior and structural handover.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left-box">
            <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2ec" className="faq-sub-title" style={{ opacity: 1 }}>FAQs</div>
            <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2ee" className="inner-title-box faq" style={{ opacity: 1 }}>
              <h3 className="inner-title white">Clear answers you can trust — find what you need about your construction project.</h3>
            </div>
          </div>
          <div data-w-id="14e6d451-d83e-3d79-a65e-4184cd64e2f1" className="faq-right-box" style={{ opacity: 1 }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`accordion w-dropdown ${isOpen ? 'w--open' : ''}`}
                >
                  <div 
                    className={`accordion-title-wrap w-dropdown-toggle ${isOpen ? 'w--open' : ''}`}
                    onClick={() => toggleFaq(index)}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="accordion-title">{faq.q}</div>
                    <div 
                      className="accordion-icon-wrapper"
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <img loading="lazy" src="/images/699d46ee6a9500f2ee2a60f3_Faq.svg" alt="Arrow" className="accordion-icon-in" />
                    </div>
                  </div>
                  <nav 
                    className={`accordion-description-wrap w-dropdown-list ${isOpen ? 'w--open' : ''}`}
                    style={{ 
                      display: isOpen ? 'block' : 'none',
                      maxHeight: isOpen ? '1000px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease-out'
                    }}
                  >
                    <div className="accordion-text-wrap">
                      <p className="faq-ans">{faq.a}</p>
                    </div>
                  </nav>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
