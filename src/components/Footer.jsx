import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="section footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-main-box-wrap">
            {/* Left Column: Logo and Social Links */}
            <div className="footer-left-side">
              <Link to="/" className="footer-logo-box w-inline-block">
                <img loading="lazy" src="/images/logo.png" alt="Ramteja Constructions Logo" className="footer-logo" />
              </Link>
              <div className="footer-social-wrap">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Horizontal Corporate Links */}
            <div className="footer-links-side">
              <div className="footer-links-row">
                <Link to="/news-room" className="footer-nav-link">News Room</Link>
                <Link to="/careers" className="footer-nav-link">Careers</Link>
                <Link to="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
                <Link to="/partners" className="footer-nav-link">Partners</Link>
                <Link to="/cookie-policy" className="footer-nav-link">Cookie Policy</Link>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright Box */}
          <div className="footer-bottom-box">
            <div className="footrer-copyright-box">
              <div className="description gray">© {new Date().getFullYear()} Ramteja Constructions. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
