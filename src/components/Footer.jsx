import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className="section footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-top-box">
            <div data-w-id="564f99af-077a-9408-a510-71268355b584" className="footer-left-box">
              <h1 className="footer-title">Book a Consultation Today and Upgrade Your Roof with Confidence</h1>
            </div>
            <div data-w-id="564f99af-077a-9408-a510-71268355b587" className="footer-right-box">
              <Link to="/service" data-w-id="fbb0286b-ad31-48d3-9d93-26d997d86728" className="secondary-button w-inline-block">
                <div className="secondary-button-content">
                  <div className="secondary-button-text-wrap">
                    <div className="secondary-button-text">Schedule Service</div>
                    <div className="secondary-button-hover-text">Schedule Service</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-main-box-wrap">
            <div data-w-id="564f99af-077a-9408-a510-71268355b58b" className="footer-about-box">
              <Link to="/" className="footer-logo-box w-inline-block">
                <span className="footer-logo-text">RAMTEJA CONSTRUCTIONS</span>
              </Link>
              <p className="footer-about">Delivering high-quality roofing solutions with strength, style, and reliability. We combine expert craftsmanship and premium materials to protect your home while enhancing its look.</p>
              <div className="social-box-wrap">
                <a data-w-id="564f99af-077a-9408-a510-71268355b591" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-box w-inline-block">
                  <img loading="lazy" src="/images/6993f792141970206a9e459d_Social Icon 1.svg" alt="LinkedIn" className="social-icon-in" />
                  <img loading="lazy" src="/images/6993f792141970206a9e459d_Social Icon 1.svg" alt="LinkedIn" className="social-icon-out" />
                </a>
                <a data-w-id="564f99af-077a-9408-a510-71268355b594" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-box w-inline-block">
                  <img loading="lazy" src="/images/6993f9e7c2379a936bb6929e_Social Icon 2.svg" alt="YouTube" className="social-icon-in" />
                  <img loading="lazy" src="/images/6993f9e7c2379a936bb6929e_Social Icon 2.svg" alt="YouTube" className="social-icon-out" />
                </a>
                <a data-w-id="564f99af-077a-9408-a510-71268355b597" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-box w-inline-block">
                  <img loading="lazy" src="/images/6993f9e7a1103a4e1b0356eb_Social Icon 3.svg" alt="Facebook" className="social-icon-in" />
                  <img loading="lazy" src="/images/6993f9e7a1103a4e1b0356eb_Social Icon 3.svg" alt="Facebook" className="social-icon-out" />
                </a>
              </div>
            </div>
            <div className="footer-menu-wraps">
              <div data-w-id="564f99af-077a-9408-a510-71268355b59b" className="footer-menu-wrap">
                <div className="footer-menu-box">
                  <div className="widget-name">Pages</div>
                  <div className="widget-flex-box">
                    <Link to="/" className="footer-menu">Home</Link>
                    <Link to="/about" className="footer-menu">About</Link>
                    <Link to="/service" className="footer-menu">Services</Link>
                    <Link to="/project" className="footer-menu">Project</Link>
                    <Link to="/pricing" className="footer-menu">Pricing</Link>
                    <Link to="/blogs" className="footer-menu">Blogs</Link>
                  </div>
                </div>
                <div className="footer-menu-box">
                  <div className="widget-name">Inner Pages</div>
                  <div className="widget-flex-box">
                    <a href="https://steelcrest.webflow.io/service/residential-roofing-solutions" className="footer-menu">Services Single</a>
                    <a href="https://steelcrest.webflow.io/project/high-performance-roofing-for-industrial-spaces" className="footer-menu">Project Single</a>
                    <a href="https://steelcrest.webflow.io/plan/starter" className="footer-menu">Pricing Single</a>
                    <a href="https://steelcrest.webflow.io/blog-posts/metal-roofing-benefits-for-residential-and-commercial-buildings" className="footer-menu">Blog Single</a>
                    <Link to="/contact" className="footer-menu">Contact</Link>
                  </div>
                </div>
                <div id="w-node-_564f99af-077a-9408-a510-71268355b5ba-8355b580" className="footer-menu-box">
                  <div className="widget-name">Utility Page</div>
                  <div className="widget-flex-box">
                    <Link to="/style-guide" className="footer-menu">Styleguide</Link>
                    <Link to="/licenses" className="footer-menu">Licenses</Link>
                    <Link to="/change-log" className="footer-menu">Changelog</Link>
                    <Link to="/401" className="footer-menu">Password</Link>
                    <Link to="/404" className="footer-menu">404 Not Found</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-box">
        <div data-w-id="564f99af-077a-9408-a510-71268355b5c9" className="footrer-copyright-box">
          <div className="description gray">Design & Developed By <a href="https://webflow.com/templates/designers/waida-studio" target="_blank" rel="noopener noreferrer" className="black-link">Waida Studio </a>- <a href="/licenses" className="black-link">License </a>| Powered By <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="black-link">Webflow</a></div>
        </div>
      </div>
    </section>
  );
}
