import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * ServicesSummary — "Our Offerings" section
 *
 * Structure mirrors the reference exactly (refer/index.html lines 1527-1638):
 *   - section.section.hero-service
 *     - div.container
 *       - div.services-wrap
 *         - div.hero-service-title-box
 *             data-w-id on subtitle + title (opacity:0 initial states for IX2)
 *         - div.service-inner-wrap  [data-w-id a7b3b0d5 → a-62 scroll scale]
 *             - div.hero-service-single-card.one/.two/.three
 *
 * Scroll-scale animation (a-62) applied to .card-scale-inner wrappers so that
 * position:sticky on the cards is never broken by transform.
 */
export default function ServicesSummary() {
  const navigate = useNavigate();

  const innerWrapRef = useRef(null);
  const inner1Ref    = useRef(null);
  const inner2Ref    = useRef(null);
  const inner3Ref    = useRef(null);

  /* ── Scroll-progress scale animation replicating Webflow a-62 ─────────── */
  useEffect(() => {
    const wrap   = innerWrapRef.current;
    const inner1 = inner1Ref.current;
    const inner2 = inner2Ref.current;
    const inner3 = inner3Ref.current;
    if (!wrap || !inner1 || !inner2 || !inner3) return;

    if (window.innerWidth <= 767) {
      inner1.style.transform = '';
      inner2.style.transform = '';
      inner3.style.transform = '';
      return;
    }

    const SMOOTHING = 0.12;
    let rawProgress      = 0;
    let smoothedProgress = 0;
    let rafId  = null;
    let running = false;

    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const lerp  = (a, b, t)   => a + (b - a) * t;

    function applyScales(p) {
      // a-62 keyframes: 0%→30% card1 1→0.7 | 30%→60% card2 1→0.8 | 60%→90% card3 1→0.9
      inner1.style.transform = `scale(${lerp(1, 0.7, clamp(p / 0.30, 0, 1)).toFixed(4)})`;
      inner2.style.transform = `scale(${lerp(1, 0.8, clamp((p - 0.30) / 0.30, 0, 1)).toFixed(4)})`;
      inner3.style.transform = `scale(${lerp(1, 0.9, clamp((p - 0.60) / 0.30, 0, 1)).toFixed(4)})`;
    }

    function tick() {
      smoothedProgress = lerp(smoothedProgress, rawProgress, SMOOTHING);
      applyScales(smoothedProgress);
      if (Math.abs(smoothedProgress - rawProgress) > 0.0005) {
        rafId = requestAnimationFrame(tick);
      } else {
        applyScales(rawProgress);
        running = false;
      }
    }

    function onScroll() {
      const rect  = wrap.getBoundingClientRect();
      const wrapH = wrap.offsetHeight;
      const viewH = window.innerHeight;
      const totalScrollRange = wrapH - viewH;
      if (totalScrollRange <= 0) return;

      rawProgress = clamp(-rect.top / totalScrollRange, 0, 1);
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const innerStyle = { width: '100%', transformOrigin: 'center top', willChange: 'transform' };

  return (
    <section className="section hero-service">
      <div className="container">
        <div className="services-wrap">

          {/* ── Title box — matches reference layout ── */}
          <div className="hero-service-title-box">
            <div
              data-w-id="a15a12e9-751e-391f-7138-bce7951180b3"
              style={{ opacity: 0 }}
              className="section-sub-title white"
            >
              Our Offerings
            </div>
            <h3
              data-w-id="ba61c031-9849-706d-2681-a2c07b3e2287"
              style={{ opacity: 0 }}
              className="hero-service-title"
            >
              Capabilities for all levels of complexity
            </h3>
            <p
              data-w-id="ba61c031-9849-706d-2681-a2c07b3e2287"
              style={{ opacity: 0 }}
              className="hero-service-desc"
            >
              From luxury residential developments and landmark commercial hubs to complex turnkey industrial engineering, we build high-specification structures with absolute precision.
            </p>
          </div>

          {/* ── service-inner-wrap ── */}
          <div
            ref={innerWrapRef}
            data-w-id="a7b3b0d5-2bac-d199-c422-4a822b927aab"
            className="service-inner-wrap"
          >

            {/* Card 1: Residential */}
            <div className="hero-service-single-card one">
              <div ref={inner1Ref} className="card-scale-inner" style={innerStyle}>
                <div className="hero-service-image-box-wrap">
                  <div className="hero-service-image-box">
                    <img
                      src="/media/residential.png"
                      loading="lazy"
                      alt="Residential Development"
                      className="hero-service-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  {/* Overlay content directly on top of the image container */}
                  <div className="hero-service-card-overlay-content">
                    <div className="card-content-header">
                      <div className="hero-service-card-name">01</div>
                      <h4 className="card-content-title">Residential</h4>
                      <div className="card-content-line"></div>
                    </div>
                    <div className="hero-service-content">
                      From high-rise apartment towers to large-scale townships. Engineered for speed, built for the legacy.
                    </div>
                    <div className="card-content-footer">
                      <Link
                        to="#"
                        onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                        data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59"
                        className="primary-button w-inline-block"
                      >
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Explore <span className="arrow-icon">&rarr;</span></div>
                          <div className="primary-button-hover-text">Explore <span className="arrow-icon">&rarr;</span></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Commercial */}
            <div className="hero-service-single-card two">
              <div ref={inner2Ref} className="card-scale-inner" style={innerStyle}>
                <div className="hero-service-image-box-wrap">
                  <div className="hero-service-image-box">
                    <img
                      src="/media/commercial.png"
                      loading="lazy"
                      alt="Commercial Development"
                      className="hero-service-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  {/* Overlay content directly on top of the image container */}
                  <div className="hero-service-card-overlay-content">
                    <div className="card-content-header">
                      <div className="hero-service-card-name">02</div>
                      <h4 className="card-content-title">Commercial</h4>
                      <div className="card-content-line"></div>
                    </div>
                    <div className="hero-service-content">
                      Office buildings, schools, hospitals, and public infrastructure delivered with precision and accountability.
                    </div>
                    <div className="card-content-footer">
                      <Link
                        to="#"
                        onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                        data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59"
                        className="primary-button w-inline-block"
                      >
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Explore <span className="arrow-icon">&rarr;</span></div>
                          <div className="primary-button-hover-text">Explore <span className="arrow-icon">&rarr;</span></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Turnkey Delivery */}
            <div className="hero-service-single-card three">
              <div ref={inner3Ref} className="card-scale-inner" style={innerStyle}>
                <div className="hero-service-image-box-wrap">
                  <div className="hero-service-image-box">
                    <img
                      src="/media/turnkey.png"
                      loading="lazy"
                      alt="Turnkey Handover"
                      className="hero-service-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  {/* Overlay content directly on top of the image container */}
                  <div className="hero-service-card-overlay-content">
                    <div className="card-content-header">
                      <div className="hero-service-card-name">03</div>
                      <h4 className="card-content-title">Turnkey Delivery</h4>
                      <div className="card-content-line"></div>
                    </div>
                    <div className="hero-service-content">
                      Full project delivery from design to final handover. One team, one contract, zero gaps.
                    </div>
                    <div className="card-content-footer">
                      <Link
                        to="#"
                        onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                        data-w-id="0315d2b4-80bd-39b0-4d41-02eb764f6d59"
                        className="primary-button w-inline-block"
                      >
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Explore <span className="arrow-icon">&rarr;</span></div>
                          <div className="primary-button-hover-text">Explore <span className="arrow-icon">&rarr;</span></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Explore All / More Services Segment */}
          <div className="services-explore-footer">
            <p className="services-explore-text">
              Looking for tailored structural capabilities? From custom engineering specifications to full pre-construction consulting, our team handles project scales of any volume.
            </p>
            <Link
              to="/services"
              className="services-explore-btn"
            >
              <span>Explore All Services</span>
              <svg className="services-explore-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
