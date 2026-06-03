import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSummary() {
  return (
    <section className="section hero-about">
      <div className="container">
        <div className="hero-about-wrap">
          <div data-w-id="44d45131-b59e-0576-f877-639f59ac891f" style={{ opacity: 0 }} className="section-sub-title">About Us</div>
          <div top-box="" data-w-id="6a1919dc-7dc4-dee6-66cc-ba7a8c13293d" style={{ opacity: 0 }} className="hero-about-title-box">
            <h2 fade-heading="" className="hero-about-title">Ramteja Constructions builds developments that last — strong, precise, and crafted with enduring care. Every project reflects our dedication to quality, structural integrity, and long-term value. From residences to commercial hubs, we build structures that endure — combining durability with refined engineering. </h2>
          </div>
          <div data-w-id="da2c7009-148b-6977-93e1-bc92ed9d505c" style={{ opacity: 0 }} className="hero-about-image-grid">
            <div className="hero-about-image-box"><img src="/images/69a40527aceed181fd6a4715_About Image V1.webp" loading="lazy" alt="About V1" className="hero-about-image" /></div>
            <div className="hero-about-image-box"><img src="/images/69a405272da741dc9bfd7e8b_About Image V2.webp" loading="lazy" alt="About V2" className="hero-about-image" /></div>
            <div className="hero-about-image-box"><img src="/images/69a4052768a2017f969dff09_About Image V3.webp" loading="lazy" alt="About V3" className="hero-about-image" /></div>
          </div>
          <div data-w-id="3ef8c5cd-16a2-0cd9-d844-f7575dcc2b17" style={{ opacity: 0 }} className="hero-about-button-box">
            <Link to="/about" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">Read More About Us</div>
                <div className="primary-button-hover-text">Read More About Us</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
