import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsShowcase() {
  return (
    <section className="section hero-project">
      <div className="container">
        <div className="hero-project-wrap">
          <div data-w-id="869fa98b-2ebf-34d6-6568-df5a4dd102e3" style={{ opacity: 0 }} className="hero-project-title-box">
            <div className="section-sub-title">Projects</div>
            <h3 className="pricing-title">Projects That Stand the Test of Time</h3>
          </div>
          <div data-w-id="490aa4f6-43de-e02a-1df5-ab526e536cb6" style={{ opacity: 0 }} className="project-card-box">
            {/* Project 1 */}
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link data-w-id="5e9e0764-f7dc-b2eb-7f6b-f23a6d9f564e" to="/project" className="hero-project-single-card w-inline-block">
                    <div className="hero-project-imge-box">
                      <img src="/images/69ad0d330436119e562d47fe_project-home-image-2.webp" loading="lazy" alt="Project 1" className="hero-project-imge" />
                    </div>
                    <div data-w-id="6aab460c-a92b-b231-47d8-49cc6f65c89c" className="hero-project-overly-box">
                      <div className="hero-project-top-box">
                        <h4 className="hero-project-card-title">Precision Roofing for Modern Residences</h4>
                        <div className="description d">Delivering lasting protection and aesthetic harmony through expert craftsmanship and high-grade steel materials.</div>
                      </div>
                      <div className="hero-project-card-bottom-box">
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Project Type</div>
                          <div className="secondary-text white small">Residential Roofing</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Location</div>
                          <div className="secondary-text white small">Pacific Heights, San Francisco</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Roof Area</div>
                          <div className="secondary-text white small">320 m²</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Completion Year</div>
                          <div className="secondary-text white small">2024</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Material Used</div>
                          <div className="secondary-text white small">Galvanized Steel Panels</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link data-w-id="afb44dea-aeac-3223-8a35-f875a6a3763a" to="/project" className="hero-project-single-card w-inline-block">
                    <div className="hero-project-imge-box">
                      <img src="/images/69ad0d3fb866c188526eaf21_project-home-image-1.webp" loading="lazy" alt="Project 2" className="hero-project-imge" />
                    </div>
                    <div data-w-id="afb44dea-aeac-3223-8a35-f875a6a3763d" className="hero-project-overly-box">
                      <div className="hero-project-top-box">
                        <h4 className="hero-project-card-title">High-Performance Roofing for Industrial Spaces</h4>
                        <div className="description d">Engineered for durability and efficiency — designed to withstand heavy weather and long-term operation demands.</div>
                      </div>
                      <div className="hero-project-card-bottom-box">
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Project Type</div>
                          <div className="secondary-text white small">Industrial Roofing</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Location</div>
                          <div className="secondary-text white small">Dallas, Texas</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Roof Area</div>
                          <div className="secondary-text white small">1,200 m²</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Completion Year</div>
                          <div className="secondary-text white small">2023</div>
                        </div>
                        <div className="hero-project-single-address-box">
                          <div className="secondary-text white small">Material Used</div>
                          <div className="secondary-text white small">Corrugated Zinc-Coated Panels</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div data-w-id="f07854f1-95bc-af32-8706-11067dfff6d3" style={{ opacity: 0 }} className="hero-project-button-box">
            <Link to="/project" data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59" className="primary-button w-inline-block">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">See All Projects</div>
                <div className="primary-button-hover-text">See All Projects</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
