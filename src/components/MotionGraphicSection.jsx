import React from 'react';

export default function MotionGraphicSection() {
  return (
    <section className="motion-graphic-sec">
      <div className="video-background-wrap">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background-element"
        >
          <source src="/media/Drone_fly-through_luxury_buildin…_202606031634.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-background-overlay"></div>
      </div>
      <div className="motion-graphic-wrap">
        <div className="motion-graphic-text-1">What begins as a vision</div>
        <div className="motion-graphic-text-2">Rises with US</div>
      </div>
    </section>
  );
}
