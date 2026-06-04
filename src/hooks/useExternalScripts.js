import { useEffect, useState } from 'react';

const scripts = [
  '/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/js/gsap.min.js',
  '/js/ScrollTrigger.min.js',
  '/js/SplitText.min.js',
  '/js/webflow.schunk.eea4e24a7b1481ff.js',
  '/js/webflow.schunk.6c532bc8644d0c69.js',
  '/js/webflow.schunk.0e3a65db468c30f6.js',
  '/js/webflow.474e425c.e92466dfea7a97e4.js'
];

export function useExternalScripts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    // Check if scripts are already loaded
    if (window.Webflow && window.jQuery && window.gsap) {
      setLoaded(true);
      return;
    }

    const loadScript = (index) => {
      if (index >= scripts.length) {
        if (isMounted) {
          setLoaded(true);
        }
        return;
      }

      const src = scripts[index];
      // Check if script is already present in document
      let scriptEl = document.querySelector(`script[src="${src}"]`);
      
      if (scriptEl) {
        // Already exists, move to next
        loadScript(index + 1);
        return;
      }

      scriptEl = document.createElement('script');
      scriptEl.src = src;
      scriptEl.type = 'text/javascript';
      scriptEl.async = false;
      
      scriptEl.onload = () => {
        loadScript(index + 1);
      };

      scriptEl.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        loadScript(index + 1); // Try next anyway
      };

      document.body.appendChild(scriptEl);
    };

    loadScript(0);

    return () => {
      isMounted = false;
    };
  }, []);

  // Whenever loaded changes or when routes change, re-initialize Webflow
  const reinitWebflow = () => {
    if (window.Webflow) {
      try {
        window.Webflow.destroy();
        window.Webflow.ready();
        if (window.Webflow.require('ix2')) {
          window.Webflow.require('ix2').init();
        }
        
        // Dispatch lifecycle and scroll events to trigger Webflow page load & viewport animations
        document.dispatchEvent(new Event('DOMContentLoaded'));
        document.dispatchEvent(new Event('readystatechange'));
        window.dispatchEvent(new Event('load'));
        window.dispatchEvent(new Event('scroll'));

        // Force refresh ScrollTrigger
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      } catch (e) {
        console.warn('Webflow re-initialization warning:', e);
      }
    }
  };

  return { loaded, reinitWebflow };
}
