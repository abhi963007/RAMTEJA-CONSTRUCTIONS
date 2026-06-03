import React from 'react';

const brands = [
  '/images/69a2843d32e20b70ee3b6795_brand-1.svg',
  '/images/69a2843d4d7cf49613462d43_brand-2.svg',
  '/images/69a2843d7d228932ca57f0d1_brand-3.svg',
  '/images/69a2843d1a9224ce1920e73e_brand-4.svg',
  '/images/69a2843e7605edb1b932fc56_brand-5.svg',
  '/images/69a2843fb0ebeeac64fa1eec_brand-6.svg',
];

export default function BrandTicker() {
  return (
    <section className="section hero-brand brand-ticker-section">
      {/* Duplicate set for seamless infinite loop — no JS needed */}
      <div className="brand-ticker-track">
        {[0, 1].map((clone) => (
          <div className="brand-ticker-set" key={clone} aria-hidden={clone === 1 ? 'true' : undefined}>
            {brands.map((logo, i) => (
              <div className="brand-ticker-item" key={i}>
                <img loading="lazy" src={logo} alt={`brand-${i + 1}`} className="brand-logo" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
