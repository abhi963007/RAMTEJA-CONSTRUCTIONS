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
      <div className="brand-ticker-track scroll-left">
        {[0, 1, 2, 3].map((clone) => (
          <div className="brand-ticker-set" key={clone} aria-hidden={clone > 0 ? 'true' : undefined}>
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
