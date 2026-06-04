import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';

export default function About() {
  const [activeTab, setActiveTab] = useState('Tab 2');

  return (
    <div className="about-page-react">
      {/* 1. Inner Hero Section */}
      <section className="section inner-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap">
            <div className="inner-content-box">
              <div data-w-id="6981f8cc-e752-e78c-e0f8-d50f52c24a69" className="animation-content-wrap">
                <div 
                  className="animation-content"
                  style={{
                    WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                    MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                    msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                    transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 5deg)',
                    opacity: 0
                  }}
                >
                  <div className="about-hero-wrap">
                    <h1 className="about-hero-title">
                      Built on Trust, Precision, and Enduring Quality
                    </h1>
                    <div className="secondary-text black">
                      From high-rise residential towers to large-scale infrastructure developments, Ramteja Constructions delivers projects engineered for speed and crafted for a lasting legacy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <section className="section trust">
        <div className="container">
          <div className="trust-wrap">
            <div data-w-id="62beb10e-2e5b-1083-2e68-1662f4ce8400" style={{ opacity: 0 }} className="trust-single-card">
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">
                  Built on Trust
                </div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6f4e6c4ca470b574d7_About Image 1.webp" loading="lazy" alt="Trust" className="trust-image" />
              </div>
            </div>
            <div data-w-id="ce81fdd5-d397-bfc7-3146-d281c7f3dd05" style={{ opacity: 0 }} className="trust-single-card">
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">
                  Precision Engineering
                </div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6fc23e2054584fbe38_About Image 2.webp" loading="lazy" alt="Precision" className="trust-image" />
              </div>
            </div>
            <div data-w-id="02c1ef83-e10b-9283-b077-fb3f524cad5e" style={{ opacity: 0 }} className="trust-single-card">
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">
                  Execution with Integrity
                </div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6e33dd21f5b1e8fccd_About Image 3.webp" loading="lazy" alt="Integrity" className="trust-image" />
              </div>
            </div>
            <div data-w-id="635eb09c-f5ec-534e-e1f3-e74ffcf5f706" style={{ opacity: 0 }} className="trust-single-card">
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">
                  Quality Starts Here
                </div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6ec658b1a9e5aa962e_About Image 4.webp" loading="lazy" alt="Quality" className="trust-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Section */}
      <section className="section brand">
        <div className="container">
          <div data-w-id="24c66f18-04a3-6af1-7e61-cf3a883076ef" style={{ opacity: 0 }} className="brand-wrap">
            <div className="ticker">
              <div data-w-id="55dc41e8-d613-d8a7-c616-db38d772b59b" className="ticker-wrapper">
                <div className="ticker-item-wrap">
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d32e20b70ee3b6795_brand-1.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d4d7cf49613462d43_brand-2.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d7d228932ca57f0d1_brand-3.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d1a9224ce1920e73e_brand-4.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843e7605edb1b932fc56_brand-5.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843fb0ebeeac64fa1eec_brand-6.svg" alt="" className="brand-logo" />
                  </div>
                </div>
                <div className="ticker-item-wrap">
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d32e20b70ee3b6795_brand-1.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d4d7cf49613462d43_brand-2.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d7d228932ca57f0d1_brand-3.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d1a9224ce1920e73e_brand-4.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843e7605edb1b932fc56_brand-5.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843fb0ebeeac64fa1eec_brand-6.svg" alt="" className="brand-logo" />
                  </div>
                </div>
                <div className="ticker-item-wrap">
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d32e20b70ee3b6795_brand-1.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d4d7cf49613462d43_brand-2.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d7d228932ca57f0d1_brand-3.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843d1a9224ce1920e73e_brand-4.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843e7605edb1b932fc56_brand-5.svg" alt="" className="brand-logo" />
                  </div>
                  <div className="brand-single-card">
                    <img loading="lazy" src="/images/69a2843fb0ebeeac64fa1eec_brand-6.svg" alt="" className="brand-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-button-box">
              <Link to="/contact" data-w-id="01ba8f5b-86c1-2181-0cee-fa3d6ee96dc8" className="brand-button w-inline-block">
                <div className="primary-button-text-wrap">
                  <div 
                    style={{
                      WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    className="primary-button-text"
                  >
                    Trusted by leading brands who believe in our team and quality solutions
                  </div>
                  <div 
                    style={{
                      WebkitTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    className="primary-button-hover-text"
                  >
                    Trusted by leading brands who believe in our team and quality solutions
                  </div>
                </div>
                <div className="barnd-button-icon-box">
                  <img 
                    src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" 
                    loading="lazy" 
                    style={{
                      WebkitTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    alt="" 
                    className="brand-button-icon-in" 
                  />
                  <img 
                    src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" 
                    loading="lazy" 
                    style={{
                      WebkitTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    alt="" 
                    className="brand-button-icon-out" 
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Choose Us Section */}
      <section className="section choose">
        <div className="container">
          <div className="valus-title-box">
            <div data-w-id="7e13bebc-93e0-0ac2-4bd0-0fba9350e14e" style={{ opacity: 0 }} className="section-sub-title">
              Why choose us
            </div>
            <h2 data-w-id="7e13bebc-93e0-0ac2-4bd0-0fba9350e150" style={{ opacity: 0 }} className="choose-title">
              We follow a clear and simple step-by-step process to ensure smooth, high-quality construction services.
            </h2>
          </div>
          <div className="chooser-relative-box">
            <div className="solutions-tabs-wrap w-tabs">
              <div 
                id="w-node-d35dba3b-35d6-2f5f-ad03-2722b0f25f8e-7404d3d0" 
                data-w-id="d35dba3b-35d6-2f5f-ad03-2722b0f25f8e" 
                style={{ opacity: 0 }} 
                className="solutions-tabs-menu w-tab-menu"
              >
                <a 
                  onClick={() => setActiveTab('Tab 1')} 
                  className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === 'Tab 1' ? 'w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="solution-accordion-wrap top">
                    <div className="solution-accordion-header">
                      <div className="solution-accordion-header-flex">
                        <div className="solution-accordion-question">
                          Free Consultation
                        </div>
                      </div>
                    </div>
                    <div className="solution-accordion-ans-wrap" style={{ display: activeTab === 'Tab 1' ? 'block' : 'none' }}>
                      <p className="faq-qus">
                        We carefully listen to your needs, thoroughly inspect your project plan, and fully understand all your development requirements.
                      </p>
                    </div>
                  </div>
                </a>
                <a 
                  onClick={() => setActiveTab('Tab 2')} 
                  className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === 'Tab 2' ? 'w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="solution-accordion-wrap">
                    <div className="solution-accordion-header">
                      <div className="solution-accordion-header-flex">
                        <div className="solution-accordion-question">
                          Site Inspection
                        </div>
                      </div>
                    </div>
                    <div className="solution-accordion-ans-wrap" style={{ display: activeTab === 'Tab 2' ? 'block' : 'none' }}>
                      <p className="faq-qus">
                        Our experts carefully inspect your site topography and geological reports to identify technical requirements and recommend the best foundation.
                      </p>
                    </div>
                  </div>
                </a>
                <a 
                  onClick={() => setActiveTab('Tab 3')} 
                  className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === 'Tab 3' ? 'w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="solution-accordion-wrap">
                    <div className="solution-accordion-header">
                      <div className="solution-accordion-header-flex">
                        <div className="solution-accordion-question">
                          Detailed Quotation
                        </div>
                      </div>
                    </div>
                    <div className="solution-accordion-ans-wrap" style={{ display: activeTab === 'Tab 3' ? 'block' : 'none' }}>
                      <p className="faq-qus">
                        You’ll receive a clear, transparent quote detailing the full scope of engineering, materials, machinery, and project timeline.
                      </p>
                    </div>
                  </div>
                </a>
                <a 
                  onClick={() => setActiveTab('Tab 4')} 
                  className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === 'Tab 4' ? 'w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="solution-accordion-wrap">
                    <div className="solution-accordion-header">
                      <div className="solution-accordion-header-flex">
                        <div className="solution-accordion-question">
                          Material Selection
                        </div>
                      </div>
                    </div>
                    <div className="solution-accordion-ans-wrap" style={{ display: activeTab === 'Tab 4' ? 'block' : 'none' }}>
                      <p className="faq-qus">
                        Our procurement team helps you choose structural materials carefully, balancing durability, premium aesthetics, and cost-efficiency.
                      </p>
                    </div>
                  </div>
                </a>
                <a 
                  onClick={() => setActiveTab('Tab 5')} 
                  className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === 'Tab 5' ? 'w--current' : ''}`}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="solution-accordion-wrap">
                    <div className="solution-accordion-header">
                      <div className="solution-accordion-header-flex">
                        <div className="solution-accordion-question">
                          Quality Inspection
                        </div>
                      </div>
                    </div>
                    <div className="solution-accordion-ans-wrap" style={{ display: activeTab === 'Tab 5' ? 'block' : 'none' }}>
                      <p className="faq-qus">
                        After structure completion, we thoroughly inspect the work to ensure it meets our strict quality standards and exceeds safety compliance.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div data-w-id="d35dba3b-35d6-2f5f-ad03-2722b0f25fcb" style={{ opacity: 0 }} className="solution-tab-contant w-tab-content">
                <div className={`solutions-tab-pane w-tab-pane ${activeTab === 'Tab 1' ? 'w--tab-active' : ''}`} style={{ display: activeTab === 'Tab 1' ? 'block' : 'none' }}>
                  <div data-w-id="361fb456-38fa-28e7-71e3-3a2a0ddb01d3" style={{ opacity: 0 }} className="choose-right-box">
                    <div className="rt-service-v2-image-wrapper">
                      <img src="/images/69a321e3ecb9ad2daf30aa04_Choose 1.webp" alt="Consultation" className="rt-service-v2-image" />
                    </div>
                  </div>
                </div>
                <div className={`solutions-tab-pane w-tab-pane ${activeTab === 'Tab 2' ? 'w--tab-active' : ''}`} style={{ display: activeTab === 'Tab 2' ? 'block' : 'none' }}>
                  <div data-w-id="4ea918ea-48dd-5acd-b5f6-35425039f182" style={{ opacity: 0 }} className="choose-right-box">
                    <div className="rt-service-v2-image-wrapper">
                      <img src="/images/69a321e6ba013a513dba5ed5_Choose 2.webp" alt="Inspection" className="rt-service-v2-image" />
                    </div>
                  </div>
                </div>
                <div className={`solutions-tab-pane w-tab-pane ${activeTab === 'Tab 3' ? 'w--tab-active' : ''}`} style={{ display: activeTab === 'Tab 3' ? 'block' : 'none' }}>
                  <div data-w-id="901c67af-73ac-913c-80ec-e8084f312fc6" style={{ opacity: 0 }} className="choose-right-box">
                    <div className="rt-service-v2-image-wrapper">
                      <img src="/images/69a321e2b67f8ccc6c176228_Choose 3.webp" alt="Quotation" className="rt-service-v2-image" />
                    </div>
                  </div>
                </div>
                <div className={`solutions-tab-pane w-tab-pane ${activeTab === 'Tab 4' ? 'w--tab-active' : ''}`} style={{ display: activeTab === 'Tab 4' ? 'block' : 'none' }}>
                  <div data-w-id="cd022c60-212a-23b7-9491-f2dd44dae5a2" style={{ opacity: 0 }} className="choose-right-box">
                    <div className="rt-service-v2-image-wrapper">
                      <img src="/images/69a321e4802dde44d045d848_Choose 4.webp" alt="Materials" className="rt-service-v2-image" />
                    </div>
                  </div>
                </div>
                <div className={`solutions-tab-pane w-tab-pane ${activeTab === 'Tab 5' ? 'w--tab-active' : ''}`} style={{ display: activeTab === 'Tab 5' ? 'block' : 'none' }}>
                  <div data-w-id="614dd880-7f70-c308-bc78-3f0bfe171eca" style={{ opacity: 0 }} className="choose-right-box">
                    <div className="rt-service-v2-image-wrapper">
                      <img src="/images/69a321e47aacd01f6285c2fe_Choose 5.webp" alt="Inspection" className="rt-service-v2-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="32d0a341-405a-cf4d-ce8a-6b714e2a49f7" style={{ opacity: 0 }} className="choose-button-box-wrapper">
              <Link to="/contact" className="primary-button w-inline-block">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">
                    Let’s Talk
                  </div>
                  <div className="primary-button-hover-text">
                    Let’s Talk
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Numbers Section */}
      <section className="section number">
        <div className="container">
          <div className="number-wrap">
            <div className="numbers-left-box">
              <div data-w-id="ee45131c-f54c-f1d9-9dda-33be9d9a1e58" style={{ opacity: 0 }} className="number-content-box">
                <div className="section-sub-title gray">
                  By the numbers
                </div>
                <h3 className="number-title">
                  Building strength that lasts
                </h3>
                <div className="description white">
                  Ramteja Constructions delivers high-performance structural solutions backed by experience, precision engineering, and consistent results. Every project reflects our commitment to durability, safety, and long-term value.
                </div>
              </div>
              <div data-w-id="038f27f6-d87c-19da-ddd2-27a4744cb755" style={{ opacity: 0 }} className="number-image-box-wrap">
                <div className="number-image-box">
                  <img src="/images/69a28f6f58539d323175dee7_Number Image.webp" loading="lazy" alt="Numbers" className="number-image" />
                </div>
                <div className="secondary-text white">
                  Comprehensive Residential and Commercial Infrastructure Insights 2026
                </div>
              </div>
            </div>
            <div data-w-id="f955b63a-46ba-ca82-755e-d89124bed81d" style={{ opacity: 0 }} className="number-right-box">
              <div className="counter-top-box">
                <div className="counter-single">
                  <div className="counter-divider"></div>
                  <div className="laboratory-counter-wrapper two">
                    <div data-w-id="6f7267a2-34f4-56cc-4025-9a9bdcbf8b26" className="whole-counter large">
                      <div className="counter-marque">
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train"
                        >
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train"
                        >
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                      </div>
                      <div className="coma">,</div>
                      <div className="counter-marque-two">
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train-two"
                        >
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train-two"
                        >
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                      </div>
                      <div className="counter-marque">
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train"
                        >
                          <div className="heading-three large">0</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train"
                        >
                          <div className="heading-three large">0</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                      </div>
                      <div className="counter-marque-two">
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train-two"
                        >
                          <div className="heading-three large">0</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                        <div 
                          style={{
                            WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                            transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                          }} 
                          className="counter-train-two"
                        >
                          <div className="heading-three large">0</div>
                          <div className="heading-three large">1</div>
                          <div className="heading-three large">2</div>
                          <div className="heading-three large">3</div>
                          <div className="heading-three large">4</div>
                          <div className="heading-three large">5</div>
                          <div className="heading-three large">6</div>
                          <div className="heading-three large">7</div>
                          <div className="heading-three large">8</div>
                          <div className="heading-three large">9</div>
                        </div>
                      </div>
                      <div className="heading-three">
                        <span className="count-text text-transform-chnage">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="counter-description">
                    <div className="counter-sub-title">Completed Projects</div>
                  </div>
                </div>
              </div>

              <div className="counter-bottom-box">
                <div className="counter-bottom-single-box">
                  <div className="counter-divider"></div>
                  <div className="counter-flex-box">
                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div data-w-id="06c78cf1-3971-a43d-4486-c2d8eb22f745" className="whole-counter">
                          <div className="counter-marque">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">1</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">1</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="counter-marque-two">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">2</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">2</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="heading-three">
                            <span className="count-text">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">
                        Years Industry Experience
                      </div>
                    </div>
                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div data-w-id="daeb90b5-59f0-fd7e-cfe0-b6fce173dceb" className="whole-counter">
                          <div className="counter-marque">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">3</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">3</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="counter-marque-two">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="counter-marque">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">0</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">0</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="heading-three">
                            <span className="count-text">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">
                        Satisfied Clients
                      </div>
                    </div>
                  </div>
                </div>

                <div className="counter-bottom-single-box">
                  <div className="counter-divider"></div>
                  <div className="counter-flex-box">
                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div data-w-id="03313bd4-c108-ee6c-7380-82ce895d542b" className="whole-counter">
                          <div className="counter-marque">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">9</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">9</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="counter-marque-two">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="heading-three">
                            <span className="count-text">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">
                        Finished on time
                      </div>
                    </div>
                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div data-w-id="03313bd4-c108-ee6c-7380-82ce895d53c9" className="whole-counter">
                          <div className="dot">$</div>
                          <div className="counter-marque">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">2</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train"
                            >
                              <div className="heading-three">2</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="dot">.</div>
                          <div className="counter-marque-two">
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                            <div 
                              style={{
                                WebkitTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                              }} 
                              className="counter-train-two"
                            >
                              <div className="heading-three">8</div>
                              <div className="heading-three">1</div>
                              <div className="heading-three">2</div>
                              <div className="heading-three">3</div>
                              <div className="heading-three">4</div>
                              <div className="heading-three">5</div>
                              <div className="heading-three">6</div>
                              <div className="heading-three">7</div>
                              <div className="heading-three">8</div>
                              <div className="heading-three">9</div>
                            </div>
                          </div>
                          <div className="heading-three">
                            <span className="count-text">M+</span>
                          </div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">
                        Quality Value Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Values Section */}
      <section className="section values">
        <div data-w-id="a6f0b2bd-759a-6690-f691-dd9ad5292575" className="testimonial-vh">
          <div className="testimonial-sticky">
            <div className="container">
              <div className="valus-title-box">
                <div data-w-id="edc51ca1-960d-a470-a623-4d98069df25c" style={{ opacity: 0 }} className="section-sub-title">
                  Values
                </div>
                <h3 data-w-id="edc51ca1-960d-a470-a623-4d98069df25e" style={{ opacity: 0 }} className="valus-title">
                  Our Commitment To Excellence Drives Every Project Forward
                </h3>
              </div>
              <div className="values-wrap">
                <div className="values-single-card">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      001
                    </div>
                    <div className="values-inner-title">
                      Integrity
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We conduct all our operations with honesty, transparency, and ethical practices, ensuring trust and reliability in every partnership.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-two">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      002
                    </div>
                    <div className="values-inner-title">
                      Quality Workmanship
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We commit to excellent engineering and top-grade materials, ensuring each township or high-rise achievements lasting durability.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-three">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      003
                    </div>
                    <div className="values-inner-title">
                      Customer Commitment
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our clients always come first, and we ensure transparent, clear communication from the very beginning through structural handover.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-four">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      004
                    </div>
                    <div className="values-inner-title">
                      Safety First
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our team adheres to rigorous safety standards, keeping both workforce and your property safe throughout the duration of every project.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-five">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      005
                    </div>
                    <div className="values-inner-title">
                      Professional Team
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We employ trained engineering specialists who provide reliable, consistent, and expert service, ensuring each project meets code standards.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-six">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">
                      006
                    </div>
                    <div className="values-inner-title">
                      Continuous Improvement
                    </div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our commitment to better tools, advanced training, and innovative construction methods allows us to deliver improved service every time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Story Section */}
      <section className="section our-story">
        <div className="container relative">
          <div className="story-wrap">
            <div data-w-id="e4a1520a-9837-4db3-bdf8-99df82db3142" style={{ opacity: 0 }} className="story-lerft-box">
              <div className="story-title-box-wrap">
                <div className="section-sub-title">
                  Our Story
                </div>
                <h2 className="story-title">
                  Building Lasting Structures Through Engineering & Commitment
                </h2>
                <p className="description black">
                  At Ramteja Constructions, we began with a simple goal: to provide developers and businesses with reliable, high-quality structural and infrastructure solutions they can trust.
                </p>
              </div>
              <div className="story-card-box">
                <div className="story-single-card">
                  <div className="story-card-number">
                    01
                  </div>
                  <div className="story-card-tiltle">
                    2021 — Building a Reputation
                  </div>
                  <p className="description text-gray">
                    Ramteja Constructions was founded by a small team of experienced engineers with a shared goal: deliver reliable structural construction work without shortcuts. Early projects focused on residential structures.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">
                    02
                    <br />
                  </div>
                  <div className="story-card-tiltle">
                    2022 — Expanding Materials & Expertise
                  </div>
                  <p className="description text-gray">
                    Ramteja Constructions introduced steel structure fabrication and high-rise core engineering to meet growing demand for long-lasting solutions. Technical training became a priority to ensure strict safety compliance.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">
                    03
                  </div>
                  <div className="story-card-tiltle">
                    2023 — Entering Commercial Construction
                  </div>
                  <p className="description text-gray">
                    With increased experience and crew capacity, Ramteja took on its first commercial projects, including office buildings and small industrial properties. This marked a major step in the company’s growth.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">
                    04
                  </div>
                  <div className="story-card-tiltle">
                    2024 — Strength Through Challenges
                  </div>
                  <p className="description text-gray">
                    Despite industry disruptions, Ramteja Constructions maintained steady operations by focusing on safety, scheduling efficiency, and core shell construction. Customer trust and repeat business continued to drive growth.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">
                    05
                  </div>
                  <div className="story-card-tiltle">
                    2025 — Trusted Construction Partner
                  </div>
                  <p className="description text-gray">
                    Ramteja Constructions became a recognized name for reliable residential and commercial EPC projects. The team continued investing in advanced machinery, safety standards, and BIM modelling systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-right-box">
              <div className="sticky">
                <div data-w-id="06bca72b-10c1-68cf-cdd6-4bb0c2970632" className="image-wrap radius">
                  <img 
                    sizes="(max-width: 1320px) 100vw, 1320px" 
                    srcSet="/images/699ec2275e4ca90e7721e0cd_Story-p-500.webp 500w, /images/699ec2275e4ca90e7721e0cd_Story-p-800.webp 800w, /images/699ec2275e4ca90e7721e0cd_Story-p-1080.webp 1080w, /images/699ec2275e4ca90e7721e0cd_Story.webp 1320w" 
                    alt="Story" 
                    src="/images/699ec2275e4ca90e7721e0cd_Story.webp" 
                    loading="lazy" 
                    className="view-image radius-tweenty" 
                  />
                  <div 
                    style={{
                      WebkitTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} 
                    className="view-image-overlay"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Commitment Section */}
      <section className="section commitment">
        <div className="container">
          <div className="commitment-wrap">
            <div className="commitment-left-box">
              <div data-w-id="a4e234e6-57ed-2f42-d11c-f14790ea75b4" style={{ opacity: 0 }} className="section-sub-title">
                commitment
              </div>
              <h3 data-w-id="48110768-39ef-bc50-5d0b-dbae3cc3aab4" style={{ opacity: 0 }} className="commitment-title">
                We are committed to delivering high-quality constructions, investing in advanced engineering tools, continuous technical training, strict safety compliance, transparent stakeholder communication, and on-time project handovers to protect your investment and exceed expectations always.
              </h3>
              <div data-w-id="69dd8f71-3198-88cc-b2fc-278268174999" style={{ opacity: 0 }} className="commitment-button-box">
                <Link to="/contact" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">
                      Let’s Talk
                    </div>
                    <div className="primary-button-hover-text">
                      Let’s Talk
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="commitment-right-box">
              <div data-w-id="fc8c7e5f-d2d0-ad38-7b78-2087f2875a7f" className="image-wrap radius">
                <img 
                  sizes="(max-width: 866px) 100vw, 866px" 
                  srcSet="/images/699eb41a48de5cd46c89f073_commitment-p-500.webp 500w, /images/699eb41a48de5cd46c89f073_commitment-p-800.webp 800w, /images/699eb41a48de5cd46c89f073_commitment.webp 866w" 
                  alt="Commitment" 
                  src="/images/699eb41a48de5cd46c89f073_commitment.webp" 
                  loading="lazy" 
                  className="view-image radius-tweenty" 
                />
                <div 
                  style={{
                    WebkitTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    MozTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    msTransform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    transform: 'translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                  }} 
                  className="view-image-overlay"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <Faq />
    </div>
  );
}
