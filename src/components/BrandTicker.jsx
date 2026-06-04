import React from 'react';

const brands = [
  '/images/client-logo-1.png',
  '/images/client-logo-2.png',
  '/images/client-logo-3.png',
  '/images/client-logo-4.png',
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
