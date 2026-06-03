import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="auto-container w-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo-link w-nav-brand">
            <img loading="lazy" src="/images/logo.png" alt="Ramteja Constructions Logo" className="navbar-logo-image" />
          </Link>
          
          <nav role="navigation" className="nave-menu w-nav-menu">
            <div className="nav-menu-content display-none">
              <NavLink to="/" className={({ isActive }) => `nav-link _1 white w-nav-link ${isActive ? 'w--current' : ''}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link _2 white w-nav-link ${isActive ? 'w--current' : ''}`}>About</NavLink>
              

              <NavLink to="/service" className={({ isActive }) => `nav-link _3 white w-nav-link ${isActive ? 'w--current' : ''}`}>Services</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link _4 white w-nav-link ${isActive ? 'w--current' : ''}`}>Contact</NavLink>
              
              <div className="primary-button-wrapper-two mobile">
                <Link to="/contact" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Start Project</div>
                    <div className="primary-button-hover-text">Start Project</div>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="nav-menu-main-wrap mobile">
              <div className="nav-all-menu-wrap">
                <div className="nav-inner-flex-wrap">
                  <div className="nav-page-wrap">
                    <div className="bold-description">Pages</div>
                  </div>
                  <div className="nav-dropdown-left-wrap">
                    <div className="nav-link-wrapper fast">
                      <div className="nav-menu-wrap">
                        <Link to="/" className="nav-menu w-nav-link">Home</Link>
                        <Link to="/about" className="nav-menu w-nav-link">About</Link>
                        <Link to="/project" className="nav-menu w-nav-link">Projects</Link>
                        <Link to="/service" className="nav-menu w-nav-link">Services</Link>
                        <Link to="/blogs" className="nav-menu w-nav-link">Blog</Link>
                        <Link to="/product-page" className="nav-menu w-nav-link">Product</Link>
                        <Link to="/pricing" className="nav-menu w-nav-link">Pricing</Link>
                        <Link to="/contact" className="nav-menu w-nav-link">Contact</Link>
                      </div>
                    </div>
                    <div className="nav-link-wrapper second">
                      <div className="bold-description">Inner Pages</div>
                      <div className="nav-menu-wrap">
                        <a href="https://steelcrest.webflow.io/project/high-performance-roofing-for-industrial-spaces" className="nav-menu w-nav-link">Project Single</a>
                        <a href="https://steelcrest.webflow.io/service/residential-roofing-solutions" className="nav-menu w-nav-link">Services Single</a>
                        <a href="https://steelcrest.webflow.io/blog-posts/metal-roofing-benefits-for-residential-and-commercial-buildings" className="nav-menu w-nav-link">Blog Single</a>
                        <a href="https://steelcrest.webflow.io/product/galvanized-steel" className="nav-menu w-nav-link">Product Single</a>
                        <a href="https://steelcrest.webflow.io/plan/starter" className="nav-menu w-nav-link">Pricing Single</a>
                      </div>
                      <div className="nav-link-wrapper _3rd">
                        <div className="bold-description">Utility</div>
                        <div className="nav-menu-wrap">
                          <Link to="/style-guide" className="nav-menu w-nav-link">Style Guide</Link>
                          <Link to="/licenses" className="nav-menu w-nav-link">Licenses</Link>
                          <Link to="/change-log" className="nav-menu w-nav-link">Changelog</Link>
                          <Link to="/401" className="nav-menu w-nav-link">Password</Link>
                          <Link to="/404" className="nav-menu w-nav-link">404</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="navbar-right-content">
            <div className="primary-button-wrapper-two">
              <div className="nav-right-btn-wrap">

                <div className="nav-button-wrap desktop">
                  <Link to="/contact" data-w-id="fbb0286b-ad31-48d3-9d93-26d997d86728" className="secondary-button w-inline-block">
                    <div className="secondary-button-content">
                      <div className="secondary-button-text-wrap">
                        <div className="secondary-button-text">Let’s Talk</div>
                        <div className="secondary-button-hover-text">Let’s Talk</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div data-w-id="5d8cf49d-db2d-bc90-bd95-2afe767d0fee" className="menu-button bg-color w-nav-button">
                <div data-is-ix2-target="1" className="menu-icon" data-w-id="5d8cf49d-db2d-bc90-bd95-2afe767d0fef" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/677e23a5de2c702a06fbea3f/6795d72cfd134d30ab197d3b_menu-bars-animation%20.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="0.9666666666666667" data-loading="eager" data-ix2-initial-state="0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
