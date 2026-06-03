import React from 'react';
import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import BrandTicker from '../components/BrandTicker';
import Stats from '../components/Stats';
import Process from '../components/Process';
import ServicesSummary from '../components/ServicesSummary';
import ProjectsShowcase from '../components/ProjectsShowcase';
import Materials from '../components/Materials';
import Products from '../components/Products';
import Compare from '../components/Compare';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <BrandTicker />
      <Stats />
      <Process />
      <ServicesSummary />
      <ProjectsShowcase />
      <Materials />
      <Products />
      <Compare />
      <Pricing />
      <Testimonials />
      <Faq />
    </>
  );
}
