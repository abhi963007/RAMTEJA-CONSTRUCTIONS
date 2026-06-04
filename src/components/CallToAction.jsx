import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="cta-sec">
      <div className="cta-wrap">
        <h2 className="cta-title">Building for the next decade of Indian real estate</h2>
        <Link to="#" onClick={(e) => e.preventDefault()} className="primary-button w-inline-block">
          <div className="primary-button-text-wrap">
            <div className="primary-button-text">Contact Us</div>
            <div className="primary-button-hover-text">Contact Us</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
