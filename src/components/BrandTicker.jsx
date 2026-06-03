import React from 'react';

const brands = [
  '/images/69a2843d32e20b70ee3b6795_brand-1.svg',
  '/images/69a2843d4d7cf49613462d43_brand-2.svg',
  '/images/69a2843d7d228932ca57f0d1_brand-3.svg',
  '/images/69a2843d1a9224ce1920e73e_brand-4.svg',
  '/images/69a2843e7605edb1b932fc56_brand-5.svg',
  '/images/69a2843fb0ebeeac64fa1eec_brand-6.svg'
];

export default function BrandTicker() {
  return (
    <section className="section hero-brand">
      <div className="container">
        <div data-w-id="65d3ba6b-22dc-4c25-e749-88acb158a41f" style={{ opacity: 0 }} className="brand-wrap">
          <div className="ticker">
            <div data-w-id="55dc41e8-d613-d8a7-c616-db38d772b59b" className="ticker-wrapper">
              {[1, 2, 3].map((setIndex) => (
                <div key={setIndex} className="ticker-item-wrap">
                  {brands.map((logo, index) => (
                    <div key={index} className="brand-single-card">
                      <img loading="lazy" src={logo} alt={`brand-${index}`} className="brand-logo" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
