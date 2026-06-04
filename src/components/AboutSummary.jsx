import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutSummary() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const videoRef = useRef(null);

  // Cinematic cross-fade video transitions
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayStep(activeStep);
      setIsTransitioning(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [activeStep]);

  // Video playback syncing
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, displayStep]);

  const steps = [
    {
      id: '01',
      eyebrow: "Execution Risks",
      title: "",
      description: "In real estate, one delay becomes many.\nTimelines slip.\nBudgets stretch.\nLiabilities grow.",
      keyPoints: ["Timeline Risk", "Budget Pressure", "Coordination Gaps"],
      superText: "",
      themeColor: "#ff453a",
      videoSrc: "/media/about_delay.mp4"
    },
    {
      id: '02',
      eyebrow: "Integrated Delivery",
      title: "",
      description: "RT helps developers stay ahead of all three —\nDelivering unified execution.\nEnsuring real-time site sync.\nExecuting at serious scale.",
      keyPoints: ["Unified Execution", "Real-Time Coordination", "Site-Wide Precision"],
      superText: "",
      themeColor: "#b89047",
      videoSrc: "/media/about_precision.mp4"
    },
    {
      id: '03',
      eyebrow: "Built For Scale",
      title: "",
      description: "Built for developers moving fast.",
      keyPoints: ["Faster Delivery", "Enterprise Scale", "Long-Term Reliability"],
      superText: "",
      themeColor: "#b89047",
      videoSrc: "/media/about_speed.mp4"
    }
  ];

  // Auto-play progress bar logic
  useEffect(() => {
    if (isPlaying) {
      const stepDuration = 8000; // 8 seconds per step
      const intervalDuration = 50; // Update progress bar every 50ms
      const totalTicks = stepDuration / intervalDuration;
      let tickCount = 0;

      progressIntervalRef.current = setInterval(() => {
        tickCount += 1;
        setProgress((tickCount / totalTicks) * 100);

        if (tickCount >= totalTicks) {
          setActiveStep((prev) => (prev + 1) % steps.length);
          tickCount = 0;
          setProgress(0);
        }
      }, intervalDuration);
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, activeStep]);

  const handleStepClick = (index) => {
    if (index === activeStep || isTransitioning) return;
    setActiveStep(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="section hero-about" style={{ background: '#0a0a0c', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>

      {/* Premium Blueprint Grid Overlay */}
      <div className="blueprint-grid-overlay" />

      {/* Decorative Radial Ambient Glow */}
      <div className="cinematic-ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-about-wrap" style={{ width: '100%', maxWidth: '100%', textAlign: 'center' }}>
          <div className="section-sub-title" style={{ color: '#b89047', letterSpacing: '2.5px', textTransform: 'uppercase', fontSize: '12px', fontWeight: '800' }}>
            Who We Are
          </div>
          <div className="hero-about-title-box" style={{ marginTop: '20px', marginBottom: '50px' }}>
            <h2 className="hero-about-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.2', fontWeight: '800', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}>
              One Partner. Complete Ownership. Start to Finish.
            </h2>
            <p className="description" style={{ marginTop: '20px', fontSize: 'clamp(15px, 1.8vw, 19px)', color: '#a0a0a5', lineHeight: '1.65', fontFamily: "'Inter', sans-serif", maxWidth: '900px', marginInline: 'auto' }}>
              We unify the entire project lifecycle under a single, disciplined workflow, taking absolute ownership of execution backed by two decades of large-scale development experience.
            </p>
          </div>
        </div>

        {/* Interactive Storyboard Player */}
        <div className="storyboard-player-container">

          {/* Left Column: Visual Screen Side (65-70% width on Desktop) */}
          <div className="storyboard-screen-side">
            <div className="storyboard-display-screen" style={{ background: '#020202', position: 'relative', overflow: 'hidden' }}>

              {/* Active Video with Cinematic Zoom */}
              <video
                key={displayStep}
                ref={videoRef}
                src={steps[displayStep].videoSrc}
                muted
                loop
                playsInline
                className={`storyboard-video-player ${isTransitioning ? 'transitioning' : 'active'}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'absolute',
                  inset: 0,
                  transition: 'opacity 0.35s ease-in-out',
                }}
              />

              {/* Dark Gradient Overlay to improve text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              {/* On-Screen Text (Super) Overlay */}
              {steps[activeStep].superText && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}>
                  <div
                    key={activeStep}
                    className="super-text-overlay"
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 2.6vw, 36px)',
                      fontWeight: '900',
                      lineHeight: '1.25',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontFamily: "'Montserrat', sans-serif",
                      textShadow: '0 8px 32px rgba(0,0,0,0.85)',
                      maxWidth: '85%'
                    }}
                  >
                    {steps[activeStep].superText.split('\n').map((line, lIdx) => (
                      <div key={lIdx} className="cinematic-line-wrapper">
                        <span
                          className="cinematic-line-span"
                          style={{
                            animationDelay: `${lIdx * 0.15}s`
                          }}
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Screen timeline controls */}
            <div className="storyboard-screen-controls">
              <button className="play-pause-btn" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )}
              </button>
              <div className="storyboard-timeline">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`timeline-segment-wrapper ${idx === activeStep ? 'active' : ''}`}
                    onClick={() => handleStepClick(idx)}
                  >
                    <span className="segment-label">
                      <span className="step-num">0{idx + 1}</span>{' '}
                      <span className="step-name">{step.eyebrow}</span>
                    </span>
                    <div className="timeline-segment">
                      <div
                        className="timeline-segment-fill"
                        style={{
                          width: idx === activeStep ? `${progress}%` : idx < activeStep ? '100%' : '0%',
                          backgroundColor: steps[idx].themeColor
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Panel (30-35% width on Desktop) */}
          <div className="storyboard-narrative-side">
            <div key={activeStep} className="narrative-content-fade">
              {/* Eyebrow Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span className="narrative-pill" style={{
                  borderColor: steps[activeStep].themeColor,
                  color: steps[activeStep].themeColor
                }}>
                  {steps[activeStep].eyebrow}
                </span>
              </div>

              {/* Heading */}
              {steps[activeStep].title && (
                <h3 className="narrative-title" style={{ color: '#ffffff' }}>
                  {steps[activeStep].title}
                </h3>
              )}

              {/* Description */}
              <div
                className={`narrative-desc-text ${!steps[activeStep].title ? 'montserrat-font' : ''}`}
                style={{
                  fontFamily: !steps[activeStep].title ? "'Montserrat', sans-serif" : undefined,
                  marginTop: !steps[activeStep].title ? '10px' : undefined,
                  marginBottom: !steps[activeStep].title ? '40px' : undefined,
                  opacity: 1
                }}
              >
                {!steps[activeStep].title ? (
                  (() => {
                    const lines = steps[activeStep].description.split('\n');
                    const intro = lines[0] || '';
                    const statements = lines.slice(1);
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                        {statements.length > 0 ? (
                          <>
                            <div style={{
                              fontSize: 'clamp(17px, 2vw, 22px)',
                              fontWeight: '400',
                              color: 'rgba(255, 255, 255, 0.7)',
                              lineHeight: '1.45',
                              letterSpacing: '0.2px',
                              marginBottom: '10px',
                              fontFamily: "'Montserrat', sans-serif"
                            }}>
                              {intro}
                            </div>
                            {statements.map((stmt, idx) => (
                              <div 
                                key={idx}
                                style={{
                                  fontSize: 'clamp(24px, 3.2vw, 38px)',
                                  fontWeight: '800',
                                  color: '#ffffff',
                                  lineHeight: '1.15',
                                  letterSpacing: '-0.5px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '16px',
                                  fontFamily: "'Montserrat', sans-serif",
                                  animation: `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.15}s forwards`,
                                  opacity: 0,
                                  transform: 'translateY(16px)'
                                }}
                              >
                                <span style={{ 
                                  width: '8px', 
                                  height: '8px', 
                                  borderRadius: '50%', 
                                  backgroundColor: steps[activeStep].themeColor || '#ff453a',
                                  display: 'inline-block',
                                  boxShadow: `0 0 12px ${steps[activeStep].themeColor || '#ff453a'}`,
                                  flexShrink: 0
                                }} />
                                {stmt}
                              </div>
                            ))}
                          </>
                        ) : (
                          <div 
                            style={{
                              fontSize: 'clamp(21px, 2.8vw, 34px)',
                              fontWeight: '800',
                              color: '#ffffff',
                              lineHeight: '1.25',
                              letterSpacing: '-0.5px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '16px',
                              fontFamily: "'Montserrat', sans-serif",
                              animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                              opacity: 0,
                              transform: 'translateY(16px)'
                            }}
                          >
                            <span style={{ 
                              width: '8px', 
                              height: '8px', 
                              borderRadius: '50%', 
                              backgroundColor: steps[activeStep].themeColor || '#b89047',
                              display: 'inline-block',
                              boxShadow: `0 0 12px ${steps[activeStep].themeColor || '#b89047'}`,
                              flexShrink: 0
                            }} />
                            {intro}
                          </div>
                        )}
                      </div>
                    );
                  })()
                ) : (
                  <p style={{ whiteSpace: 'pre-line', margin: 0 }}>
                    {steps[activeStep].description}
                  </p>
                )}
              </div>

              {/* Key Points */}
              <div className="narrative-points-box">
                {steps[activeStep].keyPoints.map((point, index) => (
                  <div key={index} className="key-point-row">
                    <span className="key-point-icon" style={{ color: steps[activeStep].themeColor }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="key-point-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Premium prominent CTA connected visually */}
        <div className="hero-about-button-box" style={{ marginTop: '70px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <Link
            to="#"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className="storyboard-cta-btn"
          >
            <span>Initiate Partner Consult</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '10px', transition: 'transform 0.3s ease' }}>
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
