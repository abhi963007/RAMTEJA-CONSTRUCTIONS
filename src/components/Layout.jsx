import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useExternalScripts } from '../hooks/useExternalScripts';

export default function Layout({ children }) {
  const { loaded, reinitWebflow } = useExternalScripts();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (loaded) {
      // Small timeout to ensure DOM elements are fully mounted
      const timer = setTimeout(() => {
        // Set the appropriate data-wf-page attribute for the page
        const wfPageMap = {
          '/': '6992bba8cdc518727404d3cf',      // Home
          '/about': '6992bba8cdc518727404d3d0',  // About
          '/services': '699ad38ff92ed1d0d483cf13', // Services
          '/service': '699ad38ff92ed1d0d483cf13', // Services
          '/contact': '6992bba8cdc518727404d3d9' // Contact
        };
        const currentPageId = wfPageMap[location.pathname] || '6992bba8cdc518727404d3cf';
        document.documentElement.setAttribute('data-wf-page', currentPageId);

        reinitWebflow();
      }, 200);

      // On mobile, fire a second reinit after the page has fully painted
      const isMobile = window.innerWidth <= 991;
      const mobileTimer = isMobile ? setTimeout(() => {
        reinitWebflow();
      }, 1000) : null;

      return () => {
        clearTimeout(timer);
        if (mobileTimer) clearTimeout(mobileTimer);
      };
    }
  }, [location.pathname, loaded]);

  return (
    <div className="page-wrapper-main">
      {/* Vite CSS loading will automatically apply, layout maps navbar and footer around page content */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
