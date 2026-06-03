import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useExternalScripts } from '../hooks/useExternalScripts';

export default function Layout({ children }) {
  const { loaded, reinitWebflow } = useExternalScripts();
  const location = useLocation();

  useEffect(() => {
    if (loaded) {
      // Small timeout to ensure DOM elements are fully mounted
      const timer = setTimeout(() => {
        reinitWebflow();
      }, 150);
      return () => clearTimeout(timer);
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
