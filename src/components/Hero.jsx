import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const playerRef = useRef(null);

  useEffect(() => {
    // Check if the script is already present
    let tag = document.getElementById('youtube-iframe-api');
    if (!tag) {
      tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        playerRef.current = new window.YT.Player('hero-youtube-player', {
          videoId: 'LJ0zferSLP8',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            start: 47,
            end: 60,
            loop: 1,
            playlist: 'LJ0zferSLP8',
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
            autohide: 1,
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event) => {
              // Loop back to 47 seconds when the video reaches end (60s) or ends
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(47);
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="section hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background YouTube Video */}
      <div className="hero-youtube-container">
        <div id="hero-youtube-player"></div>
      </div>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(120deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.35) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Hero Content — Two Column */}
      <div className="container hero-two-col-wrap" style={{ position: 'relative', zIndex: 2 }}>

        {/* LEFT — Stats + Description */}
        <div className="hero-left-col">
          <div className="hero-stat-card">
            <div className="hero-stat-value">15 Million Sq. Ft.</div>
            <div className="hero-stat-label">Under Development</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-card">
            <div className="hero-stat-value">₹ 2600 Crores</div>
            <div className="hero-stat-label">Order Book Value</div>
          </div>
          <p className="hero-left-desc">
            We power real estate developers by delivering lasting value to communities.
          </p>
        </div>

        {/* RIGHT — Title + Tags + CTA */}
        <div className="hero-right-col">
          <h1 className="hero-title">
            <span className="hero-title-highlight">India's fastest</span> <br />
            growing integrated <br />
            development partner
          </h1>

          {/* Service tag pills */}
          <div className="hero-service-tags">
            {['Planning', 'Design', 'Engineering', 'Procurement', 'Construction'].map((tag) => (
              <span key={tag} className="hero-service-tag">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hero-button-box">
            <Link
              to="#"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="hero-cta-btn"
            >
              <span>Let's Talk!</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
