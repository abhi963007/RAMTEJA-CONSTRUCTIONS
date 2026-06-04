import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutSummary() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);

  const steps = [
    {
      id: '01',
      title: "The Domino Effect",
      subtitle: "Visuals: A single domino falls. Match cut into delayed construction activity.",
      vo: "In real estate, one delay becomes many. Timelines slip. Budgets stretch. Liabilities grow.",
      superText: "Project Delayed",
      type: "delay"
    },
    {
      id: '02',
      title: "Precision Momentum",
      subtitle: "Visuals shift toward precision and momentum: Coordinated execution. Machinery in motion.",
      vo: "RT helps developers stay ahead of all three — with dependable execution at serious scale.",
      superText: "Coordinated Execution & Momentum",
      type: "precision"
    },
    {
      id: '03',
      title: "Built For Speed",
      subtitle: "Final frame: Bold architectural visual of the completed project.",
      vo: "Precision-engineered architectural delivery on time, as promised.",
      superText: "Built for developers moving fast.",
      type: "speed"
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
    setActiveStep(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="section hero-about" style={{ background: '#ffffff', paddingBottom: '90px' }}>
      <div className="container">
        <div className="hero-about-wrap" style={{ width: '100%', maxWidth: '100%', textAlign: 'center' }}>
          <div className="section-sub-title gray">Who We Are</div>
          <div className="hero-about-title-box" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <h2 className="hero-about-title" style={{ fontSize: '38px', lineHeight: '1.25', fontWeight: '800', fontFamily: "'Old Standard TT', serif" }}>
              One Partner. Complete Ownership. Start to Finish.
            </h2>
            <p className="description" style={{ marginTop: '20px', fontSize: '18px', color: '#555555', lineHeight: '1.6', fontFamily: "'Inter', sans-serif" }}>
              Design, Engineering, Procurement, and Construction delivered through a unified, disciplined system built on two decades of large-scale construction experience.
            </p>
          </div>
        </div>

        {/* Interactive Storyboard Player */}
        <div className="storyboard-player-container">
          
          {/* Left Column: Visual Screen Side */}
          <div className="storyboard-screen-side">
            <div className="storyboard-display-screen">
              {/* Blank screen space reserved for future client video integration */}
            </div>
            
            {/* Screen timeline controls */}
            <div className="storyboard-screen-controls">
              <button className="play-pause-btn" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>
                )}
              </button>
              <div className="storyboard-timeline">
                {steps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="timeline-segment"
                    onClick={() => handleStepClick(idx)}
                  >
                    <div 
                      className="timeline-segment-fill"
                      style={{ 
                        width: idx === activeStep ? `${progress}%` : idx < activeStep ? '100%' : '0%' 
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Panel */}
          <div className="storyboard-narrative-side">
            <div className="narrative-meta">
              <span className="narrative-label">STORYLINE PLAYBACK</span>
              <span className="narrative-step-counter">SCENE {steps[activeStep].id} / 03</span>
            </div>
            
            <h3 className="narrative-title">{steps[activeStep].title}</h3>
            
            {/* Visual description tag removed from production display */}

            <div className="narrative-vo-box">
              <span className="vo-label">VOICEOVER / SCRIPT:</span>
              <p className="vo-text">"{steps[activeStep].vo}"</p>
            </div>

            {steps[activeStep].superText && (
              <div className="narrative-super-box">
                <span className="super-label">ON-SCREEN TEXT (SUPER):</span>
                <p className="super-text">{steps[activeStep].superText}</p>
              </div>
            )}

            <div className="narrative-navigation">
              <button 
                className="nav-btn" 
                onClick={() => handleStepClick((activeStep - 1 + steps.length) % steps.length)}
              >
                ← Prev Scene
              </button>
              <button 
                className="nav-btn" 
                onClick={() => handleStepClick((activeStep + 1) % steps.length)}
              >
                Next Scene →
              </button>
            </div>
          </div>

        </div>

        <div className="hero-about-button-box" style={{ marginTop: '60px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <Link to="#" onClick={(e) => e.preventDefault()} className="primary-button w-inline-block">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">See Our Work</div>
              <div className="primary-button-hover-text">See Our Work</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
