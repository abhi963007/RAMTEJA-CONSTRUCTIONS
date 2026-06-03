import React from 'react';
import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import BrandTicker from '../components/BrandTicker';
import ServicesSummary from '../components/ServicesSummary';
import MotionGraphicSection from '../components/MotionGraphicSection';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <BrandTicker />
      <ServicesSummary />
      <MotionGraphicSection />
      <CallToAction />
    </>
  );
}
