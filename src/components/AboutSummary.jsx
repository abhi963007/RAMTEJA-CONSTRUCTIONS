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
      title: "Delays Create Domino Effects",
      description: "Fragmented coordination leads to cascading delays, rising costs, and operational risk across every phase of construction.",
      keyPoints: ["Timeline Risk", "Budget Pressure", "Coordination Gaps"],
      superText: "PROJECT DELAYED",
      themeColor: "#ff453a",
      videoSrc: "/media/about_delay.mp4"
    },
    {
      id: '02',
      eyebrow: "Integrated Delivery",
      title: "Precision Execution At Scale",
      description: "RT streamlines engineering, procurement, and construction into one disciplined system built for dependable large-scale delivery.",
      keyPoints: ["Unified Execution", "Real-Time Coordination", "Site-Wide Precision"],
      superText: "COORDINATED EXECUTION\nMOMENTUM",
      themeColor: "#b89047",
      videoSrc: "/media/about_precision.mp4"
    },
    {
      id: '03',
      eyebrow: "Built For Scale",
      title: "Built For Developers Moving Fast",
      description: "From planning to handover, RT helps developers accelerate timelines without compromising execution quality.",
      keyPoints: ["Faster Delivery", "Enterprise Scale", "Long-Term Reliability"],
      superText: "BUILT FOR DEVELOPERS\nMOVING FAST",
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
            <h2 className="hero-about-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.2', fontWeight: '800', color: '#ffffff' }}>
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
                      fontSize: 'clamp(20px, 2.6vw, 36px)',
                      fontWeight: '800',
                      lineHeight: '1.3',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      fontFamily: "'Manrope', sans-serif",
                      textShadow: '0 4px 30px rgba(0,0,0,0.95)',
                      maxWidth: '80%',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {steps[activeStep].superText}
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
                    <span className="segment-label">0{idx + 1} {step.eyebrow}</span>
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
              <h3 className="narrative-title" style={{ color: '#ffffff' }}>
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="narrative-desc-text">
                {steps[activeStep].description}
              </p>

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
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
