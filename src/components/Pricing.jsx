import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="section hero-pricing">
      <div className="container">
        <div data-w-id="68c8c5fe-93d8-4e3c-2671-3e5d33b85345" style={{ opacity: 0 }} className="pricing-title-box">
          <div className="section-sub-title">Pricing Plans</div>
          <h3 className="pricing-title">Choose the Plan That Fits Your Roof</h3>
        </div>
        <div className="pricing-tabs">
          <div data-w-id="ad77897b-b179-a7fa-f8e2-9bd68423add4" style={{ opacity: 0 }} className="pricing-single-card">
            
            {/* Starter Plan */}
            <div className="w-dyn-list">
              <div data-w-id="ad77897b-b179-a7fa-f8e2-9bd68423add6" style={{ opacity: 0 }} role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="pricing-left-card">
                    <div className="plan-name-box">
                      <div className="plan-name">Starter</div>
                      <div className="secondary-text">Ideal for minor leaks and quick repairs</div>
                    </div>
                    <div className="plan-price-box">
                      <h2 className="plan-price">$49</h2>
                      <div className="price-service">/Service</div>
                    </div>
                    <div className="plan-feature-box">
                      <div className="secondary-text">Includes</div>
                      <ul role="list" className="feature-list">
                        <li className="feature-list-item">
                          <div className="secondary-text">Quick patching for small leaks and cracks</div>
                        </li>
                        <li className="feature-list-item">
                          <div className="secondary-text">Replace up to 10 shingles or tiles</div>
                        </li>
                        <li data-w-id="ad77897b-b179-a7fa-f8e2-9bd68423aded" className="feature-list-item">
                          <div className="secondary-text">Roof condition check</div>
                        </li>
                        <li className="feature-list-item">
                          <div className="secondary-text">Standard material installation</div>
                        </li>
                        <li className="feature-list-item">
                          <div className="secondary-text">4-month service guarantee</div>
                        </li>
                      </ul>
                    </div>
                    <div className="plan-button-box">
                      <Link to="/pricing" data-w-id="49e53a03-8126-b6a9-c0c5-efae92f14d93" className="secondary-button plan w-inline-block">
                        <div className="secondary-button-content">
                          <div className="secondary-button-text-wrap">
                            <div className="secondary-button-text">Book Your Fix</div>
                            <div className="secondary-button-hover-text">Book Your Fix</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Plan */}
            <div className="w-dyn-list">
              <div data-w-id="ad77897b-b179-a7fa-f8e2-9bd68423ae02" style={{ opacity: 0 }} role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="pricing-active-card">
                    <div className="plan-name-box">
                      <div className="plan-name">Advanced</div>
                      <div className="secondary-text">Ideal for minor leaks and quick repairs</div>
                    </div>
                    <div className="plan-price-box">
                      <h2 className="plan-price">$999</h2>
                      <div className="price-service">/Service</div>
                    </div>
                    <div className="plan-feature-box">
                      <div className="secondary-text">Includes</div>
                      <div className="feature-flex-box">
                        <ul role="list" className="feature-list">
                          <li className="feature-list-item">
                            <div className="secondary-text">All features from Starter</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Replace up to 55 shingles or tiles</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Full roof waterproof coating</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Gutter inspection and minor adjustment</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Roof ventilation check</div>
                          </li>
                        </ul>
                        <ul role="list" className="feature-list">
                          <li className="feature-list-item">
                            <div className="secondary-text">Roof structural assessment</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Debris removal</div>
                          </li>
                          <li className="feature-list-item">
                            <div className="secondary-text">Gutter inspection</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="plan-button-box">
                      <Link to="/pricing" data-w-id="a4c4af1f-b8cb-031e-9ee0-dd7d7763dae6" className="primary-button w-inline-block">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Schedule Now</div>
                          <div className="primary-button-hover-text">Schedule Now</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
