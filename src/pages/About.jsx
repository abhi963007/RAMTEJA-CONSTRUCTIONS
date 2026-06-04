import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/Faq';

const chooseUsSteps = [
  {
    tab: 'Tab 1',
    title: 'Free Consultation',
    summary: 'We carefully listen to your needs, thoroughly inspect your project plan, and fully understand all your development requirements.',
    img: '/images/69a321e3ecb9ad2daf30aa04_Choose 1.webp'
  },
  {
    tab: 'Tab 2',
    title: 'Site Inspection',
    summary: 'Our experts carefully inspect your site topography and geological reports to identify technical requirements and recommend the best foundation.',
    img: '/images/69a321e6ba013a513dba5ed5_Choose 2.webp'
  },
  {
    tab: 'Tab 3',
    title: 'Detailed Quotation',
    summary: 'You’ll receive a clear, transparent quote detailing the full scope of engineering, materials, machinery, and project timeline.',
    img: '/images/69a321e2b67f8ccc6c176228_Choose 3.webp'
  },
  {
    tab: 'Tab 4',
    title: 'Material Selection',
    summary: 'Our procurement team helps you choose structural materials carefully, balancing durability, premium aesthetics, and cost-efficiency.',
    img: '/images/69a321e4802dde44d045d848_Choose 4.webp'
  },
  {
    tab: 'Tab 5',
    title: 'Quality Inspection',
    summary: 'After structure completion, we thoroughly inspect the work to ensure it meets our strict quality standards and exceeds safety compliance.',
    img: '/images/69a321e47aacd01f6285c2fe_Choose 5.webp'
  }
];

const brands = [
  '/images/69a2843d32e20b70ee3b6795_brand-1.svg',
  '/images/69a2843d4d7cf49613462d43_brand-2.svg',
  '/images/69a2843d7d228932ca57f0d1_brand-3.svg',
  '/images/69a2843d1a9224ce1920e73e_brand-4.svg',
  '/images/69a2843e7605edb1b932fc56_brand-5.svg',
  '/images/69a2843fb0ebeeac64fa1eec_brand-6.svg',
];

const teamMembers = [
  { name: 'Michael Turner', role: 'Managing Director', img: '/images/699ebb9bab06aa49bee6d9b5_Team 8.webp' },
  { name: 'James Wilson', role: 'Project Manager', img: '/images/699ebbaa4072136d8f0c296f_Team 7.webp' },
  { name: 'Robert Martinez', role: 'Construction Supervisor', img: '/images/699ebb9bb8401bdc6c52eca3_Team 6.webp' },
  { name: 'Daniel Carter', role: 'Lead Engineering Tech', img: '/images/699ebb9ad351954209b94607_Team 5.webp' },
  { name: 'Anthony Rodriguez', role: 'Compliance Officer', img: '/images/699ebb9a85c9b396a47b40fc_Team 4.webp' },
  { name: 'Brian Thom', role: 'Logistics Manager', img: '/images/699ebb9aab06aa49bee6d932_Team 3.webp' },
  { name: 'Emily Parker', role: 'Customer Relations', img: '/images/699ebb9954becf7d49749848_Team 2.webp' },
  { name: 'Kevin Anderson', role: 'Quality Control Inspector', img: '/images/699ebb9a877c549927c605d3_Team 1.webp' }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div className="about-page-react">
      {/* 1. Inner Hero Section */}
      <section className="section inner-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="inner-hero-wrap">
            <div className="inner-content-box">
              <div className="animation-content-wrap">
                <div className="animation-content" style={{ opacity: 1, transform: 'none' }}>
                  <div className="about-hero-wrap">
                    <h1 className="about-hero-title">Built on Trust, Precision, and Enduring Quality</h1>
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
            <div className="trust-single-card" style={{ opacity: 1 }}>
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">Built on Trust</div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6f4e6c4ca470b574d7_About Image 1.webp" loading="lazy" alt="Trust" className="trust-image" />
              </div>
            </div>
            <div className="trust-single-card" style={{ opacity: 1 }}>
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">Precision Engineering</div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6fc23e2054584fbe38_About Image 2.webp" loading="lazy" alt="Precision" className="trust-image" />
              </div>
            </div>
            <div className="trust-single-card" style={{ opacity: 1 }}>
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">Execution with Integrity</div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6e33dd21f5b1e8fccd_About Image 3.webp" loading="lazy" alt="Integrity" className="trust-image" />
              </div>
            </div>
            <div className="trust-single-card" style={{ opacity: 1 }}>
              <div className="trust-content-box">
                <div className="trust-dot"></div>
                <div className="description black">Quality Starts Here</div>
              </div>
              <div className="trust-image-box">
                <img src="/images/69a27a6ec658b1a9e5aa962e_About Image 4.webp" loading="lazy" alt="Quality" className="trust-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brand Section */}
      <section className="section brand brand-ticker-section">
        <div className="container">
          <div className="brand-wrap" style={{ opacity: 1 }}>
            <div className="ticker">
              <div className="brand-ticker-track" style={{ display: 'flex', width: 'max-content' }}>
                {[0, 1].map((clone) => (
                  <div className="brand-ticker-set" key={clone} style={{ display: 'flex', alignItems: 'center', gap: '60px', padding: '0 30px' }}>
                    {brands.map((logo, i) => (
                      <div className="brand-ticker-item" key={i}>
                        <img loading="lazy" src={logo} alt={`brand-${i + 1}`} className="brand-logo" style={{ filter: 'grayscale(1) opacity(0.55)' }} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="brand-button-box" style={{ marginTop: '40px' }}>
              <Link to="/contact" className="brand-button w-inline-block">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">Trusted by leading brands who believe in our team and quality solutions</div>
                  <div className="primary-button-hover-text">Trusted by leading brands who believe in our team and quality solutions</div>
                </div>
                <div className="barnd-button-icon-box">
                  <img src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" loading="lazy" alt="" className="brand-button-icon-in" />
                  <img src="/images/69a285a970b00744a2a7f0cd_arrow-right.svg" loading="lazy" alt="" className="brand-button-icon-out" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Choose Us Section (Tabs) */}
      <section className="section choose">
        <div className="container">
          <div className="valus-title-box">
            <div className="section-sub-title" style={{ opacity: 1 }}>Why choose us</div>
            <h2 className="choose-title" style={{ opacity: 1 }}>We follow a clear and simple step-by-step process to ensure smooth, high-quality construction services.</h2>
          </div>
          <div className="chooser-relative-box">
            <div className="solutions-tabs-wrap w-tabs">
              <div className="solutions-tabs-menu w-tab-menu" style={{ opacity: 1 }}>
                {chooseUsSteps.map((step) => (
                  <button
                    key={step.tab}
                    onClick={() => setActiveTab(step.tab)}
                    className={`single-solution-tabs-link w-inline-block w-tab-link ${activeTab === step.tab ? 'w--current' : ''}`}
                    style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%', display: 'block' }}
                  >
                    <div className="solution-accordion-wrap">
                      <div className="solution-accordion-header">
                        <div className="solution-accordion-header-flex">
                          <div className="solution-accordion-question">{step.title}</div>
                        </div>
                      </div>
                      <div className="solution-accordion-ans-wrap" style={{ display: activeTab === step.tab ? 'block' : 'none' }}>
                        <p className="faq-qus" style={{ margin: 0 }}>{step.summary}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="solution-tab-contant w-tab-content" style={{ opacity: 1 }}>
                {chooseUsSteps.map((step) => (
                  <div
                    key={step.tab}
                    className={`solutions-tab-pane w-tab-pane ${activeTab === step.tab ? 'w--tab-active' : ''}`}
                    style={{ display: activeTab === step.tab ? 'block' : 'none' }}
                  >
                    <div className="choose-right-box" style={{ opacity: 1 }}>
                      <div className="rt-service-v2-image-wrapper">
                        <img src={step.img} alt={step.title} className="rt-service-v2-image" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="choose-button-box-wrapper" style={{ opacity: 1, marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
              <Link to="/contact" className="primary-button w-inline-block">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">Let’s Talk</div>
                  <div className="primary-button-hover-text">Let’s Talk</div>
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
              <div className="number-content-box" style={{ opacity: 1 }}>
                <div className="section-sub-title gray">By the numbers</div>
                <h3 className="number-title">Building strength that lasts</h3>
                <div className="description white">
                  Ramteja Constructions delivers high-performance structural solutions backed by experience, precision engineering, and consistent results. Every project reflects our commitment to durability, safety, and long-term value.
                </div>
              </div>
              <div className="number-image-box-wrap" style={{ opacity: 1 }}>
                <div className="number-image-box">
                  <img src="/images/69a28f6f58539d323175dee7_Number Image.webp" loading="lazy" alt="Number insights" className="number-image" />
                </div>
                <div className="secondary-text white">Comprehensive Residential and Commercial Infrastructure Insights 2026</div>
              </div>
            </div>
            <div className="number-right-box" style={{ opacity: 1 }}>
              {/* Counters */}
              <div className="counter-top-box">
                <div className="counter-single">
                  <div className="counter-divider"></div>
                  <div className="laboratory-counter-wrapper two">
                    <div className="whole-counter large">
                      <div className="heading-three large">4,250+</div>
                    </div>
                  </div>
                  <div className="counter-description">
                    <div className="counter-sub-title">Completed Projects</div>
                  </div>
                </div>

                <div className="counter-single">
                  <div className="counter-divider"></div>
                  <div className="laboratory-counter-wrapper two">
                    <div className="whole-counter large">
                      <div className="heading-three large">12+</div>
                    </div>
                  </div>
                  <div className="counter-description">
                    <div className="counter-sub-title">Years Industry Experience</div>
                  </div>
                </div>

                <div className="counter-single">
                  <div className="counter-divider"></div>
                  <div className="laboratory-counter-wrapper two">
                    <div className="whole-counter large">
                      <div className="heading-three large">3,850+</div>
                    </div>
                  </div>
                  <div className="counter-description">
                    <div className="counter-sub-title">Satisfied Clients</div>
                  </div>
                </div>
              </div>

              <div className="counter-bottom-box" style={{ background: 'none', border: 'none', padding: 0 }}>
                <div className="counter-bottom-single-box">
                  <div className="counter-divider"></div>
                  <div className="counter-flex-box">
                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div className="whole-counter">
                          <div className="heading-three">98%</div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">Finished on time</div>
                    </div>

                    <div className="counter-single">
                      <div className="laboratory-counter-wrapper two">
                        <div className="whole-counter">
                          <div className="heading-three">$2.8M+</div>
                        </div>
                      </div>
                      <div className="secondary-text black-gray">Quality Value Delivered</div>
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
        <div className="testimonial-vh">
          <div className="testimonial-sticky">
            <div className="container">
              <div className="valus-title-box">
                <div className="section-sub-title" style={{ opacity: 1 }}>Values</div>
                <h3 className="valus-title" style={{ opacity: 1 }}>Our Commitment To Excellence Drives Every Project Forward</h3>
              </div>
              <div className="values-wrap">
                <div className="values-single-card">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">001</div>
                    <div className="values-inner-title">Integrity</div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We conduct all our operations with honesty, transparency, and ethical practices, ensuring trust and reliability in every partnership.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-two">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">002</div>
                    <div className="values-inner-title">Quality Workmanship</div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We commit to excellent engineering and top-grade materials, ensuring each township or high-rise achievements lasting durability.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-three">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">003</div>
                    <div className="values-inner-title">Customer Commitment</div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our clients always come first, and we ensure transparent, clear communication from the very beginning through structural handover.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-four">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">004</div>
                    <div className="values-inner-title">Safety First</div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      Our team adheres to rigorous safety standards, keeping both workforce and your property safe throughout the duration of every project.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-five">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">005</div>
                    <div className="values-inner-title">Professional Team</div>
                  </div>
                  <div className="values-inner-bottom-box">
                    <div className="description gray">
                      We employ trained engineering specialists who provide reliable, consistent, and expert service, ensuring each project meets code standards.
                    </div>
                  </div>
                </div>
                <div className="values-single-card card-six">
                  <div className="values-inner-top-box">
                    <div className="description text-gray">006</div>
                    <div className="values-inner-title">Continuous Improvement</div>
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
            <div className="story-lerft-box" style={{ opacity: 1 }}>
              <div className="story-title-box-wrap">
                <div className="section-sub-title">Our Story</div>
                <h2 className="story-title">Building Lasting Structures Through Engineering & Commitment</h2>
                <p className="description black">
                  At Ramteja Constructions, we began with a simple goal: to provide developers and businesses with reliable, high-quality structural and infrastructure solutions they can trust.
                </p>
              </div>
              <div className="story-card-box">
                <div className="story-single-card">
                  <div className="story-card-number">01</div>
                  <div className="story-card-tiltle">2021 — Building a Reputation</div>
                  <p className="description text-gray">
                    Ramteja Constructions was founded by a small team of experienced engineers with a shared goal: deliver reliable structural construction work without shortcuts. Early projects focused on residential structures.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">02</div>
                  <div className="story-card-tiltle">2022 — Expanding Materials & Expertise</div>
                  <p className="description text-gray">
                    Ramteja Constructions introduced steel structure fabrication and high-rise core engineering to meet growing demand for long-lasting solutions. Technical training became a priority to ensure strict safety compliance.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">03</div>
                  <div className="story-card-tiltle">2023 — Entering Commercial Construction</div>
                  <p className="description text-gray">
                    With increased experience and crew capacity, Ramteja took on its first commercial projects, including office buildings and small industrial properties. This marked a major step in the company’s growth.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">04</div>
                  <div className="story-card-tiltle">2024 — Strength Through Challenges</div>
                  <p className="description text-gray">
                    Despite industry disruptions, Ramteja Constructions maintained steady operations by focusing on safety, scheduling efficiency, and core shell construction. Customer trust and repeat business continued to drive growth.
                  </p>
                </div>
                <div className="story-single-card">
                  <div className="story-card-number">05</div>
                  <div className="story-card-tiltle">2025 — Trusted Construction Partner</div>
                  <p className="description text-gray">
                    Ramteja Constructions became a recognized name for reliable residential and commercial EPC projects. The team continued investing in advanced machinery, safety standards, and BIM modelling systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="story-right-box">
              <div className="sticky" style={{ position: 'sticky', top: '120px' }}>
                <div className="image-wrap radius">
                  <img src="/images/699ec2275e4ca90e7721e0cd_Story.webp" loading="lazy" alt="Story image" className="view-image radius-tweenty" style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Team Section */}
      <section className="section team">
        <div className="container">
          <div className="team-wrap">
            <div className="section-sub-title" style={{ opacity: 1 }}>Team</div>
            <h3 className="team-titlle" style={{ opacity: 1 }}>Dedicated Construction Professionals Serving You with Excellence</h3>
            <div className="team-grid">
              {teamMembers.map((member, i) => (
                <div className="team-single-card" key={i}>
                  <div className="team-image-box">
                    <img src={member.img} loading="lazy" alt={member.name} className="team-image" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="team-content-box">
                    <div className="team-content-left-box">
                      <div className="secondary-text black">{member.name}</div>
                      <div className="description">{member.role}</div>
                    </div>
                    <div className="team-social-icon-box">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-box-team w-inline-block">
                        <img loading="lazy" alt="LinkedIn" src="/images/69b1809b6d1a6662937e7d4e_ac-linkedln.svg" className="social-icon-in" style={{ transform: 'none' }} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Commitment Section */}
      <section className="section commitment">
        <div className="container">
          <div className="commitment-wrap">
            <div className="commitment-left-box">
              <div className="section-sub-title" style={{ opacity: 1 }}>commitment</div>
              <h3 className="commitment-title" style={{ opacity: 1 }}>
                We are committed to delivering high-quality constructions, investing in advanced engineering tools, continuous technical training, strict safety compliance, transparent stakeholder communication, and on-time project handovers to protect your investment and exceed expectations always.
              </h3>
              <div className="commitment-button-box" style={{ opacity: 1 }}>
                <Link to="/contact" className="primary-button w-inline-block">
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Let’s Talk</div>
                    <div className="primary-button-hover-text">Let’s Talk</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="commitment-right-box">
              <div className="image-wrap radius">
                <img src="/images/699eb41a48de5cd46c89f073_commitment.webp" loading="lazy" alt="Commitment" className="view-image radius-tweenty" style={{ width: '100%', height: 'auto' }} />
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
