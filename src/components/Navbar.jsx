import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navContainerRef = useRef(null);

  const updatePosition = (element) => {
    if (element && navContainerRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      setHoverStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
        opacity: 1
      });
    }
  };

  const updateActivePosition = () => {
    if (navContainerRef.current) {
      const activeLink = navContainerRef.current.querySelector('.nav-link.w--current');
      if (activeLink) {
        updatePosition(activeLink);
      } else {
        setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(updateActivePosition, 100);
    window.addEventListener('resize', updateActivePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateActivePosition);
    };
  }, [location.pathname]);

  const [scrollState, setScrollState] = useState('top'); // 'top' | 'scrolled' | 'hidden'
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      
      if (currentScrollY <= 20) {
        setScrollState('top');
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollState('hidden');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollState('scrolled');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`navbar w-nav ${scrollState === 'hidden' ? 'nav-hidden' : scrollState === 'scrolled' ? 'nav-scrolled' : 'nav-top'}`}
    >
      <div className="auto-container w-container">
        <div className="navbar-content">
          {/* Logo Text */}
          <Link to="/" className="navbar-logo-link w-nav-brand" onClick={closeMenu} style={{ textDecoration: 'none' }}>
            <span className="navbar-logo-text">Ramteja Constructions</span>
          </Link>

          {/* ─── Desktop navigation (Webflow-managed, untouched) ─── */}
          <nav role="navigation" className="nave-menu w-nav-menu">
            <div 
              ref={navContainerRef} 
              onMouseLeave={updateActivePosition} 
              className="nav-menu-content display-none" 
              style={{ position: 'relative' }}
            >
              {/* Sliding Navigation Indicator */}
              <div 
                className="nav-hover-indicator"
                style={{
                  position: 'absolute',
                  top: '5px',
                  bottom: '5px',
                  left: `${hoverStyle.left}px`,
                  width: `${hoverStyle.width}px`,
                  opacity: hoverStyle.opacity,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(184, 144, 71, 0.25)',
                  borderRadius: '100px',
                  transition: 'left 0.3s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s ease',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              <NavLink
                to="/"
                onMouseEnter={(e) => updatePosition(e.currentTarget)}
                className={({ isActive }) =>
                  `nav-link _1 white w-nav-link${isActive ? ' w--current' : ''}`
                }
                style={{ position: 'relative', zIndex: 1 }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onMouseEnter={(e) => updatePosition(e.currentTarget)}
                className={({ isActive }) =>
                  `nav-link _2 white w-nav-link${isActive ? ' w--current' : ''}`
                }
                style={{ position: 'relative', zIndex: 1 }}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onMouseEnter={(e) => updatePosition(e.currentTarget)}
                className={({ isActive }) =>
                  `nav-link _3 white w-nav-link${isActive ? ' w--current' : ''}`
                }
                style={{ position: 'relative', zIndex: 1 }}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                onMouseEnter={(e) => updatePosition(e.currentTarget)}
                className={({ isActive }) =>
                  `nav-link _4 white w-nav-link${isActive ? ' w--current' : ''}`
                }
                style={{ position: 'relative', zIndex: 1 }}
              >
                Contact
              </NavLink>

              <div className="primary-button-wrapper-two mobile">
                <Link
                  to="#"
                  onClick={(e) => { e.preventDefault(); }}
                  className="primary-button w-inline-block"
                >
                  <div className="primary-button-text-wrap">
                    <div className="primary-button-text">Start Project</div>
                    <div className="primary-button-hover-text">Start Project</div>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* ─── Right side: desktop button + hamburger ─── */}
          <div className="navbar-right-content">
            <div className="primary-button-wrapper-two">
              <div className="nav-right-btn-wrap">
                {/* Desktop "Let's Talk" button */}
                <div className="nav-button-wrap desktop">
                  <Link
                    to="/contact"
                    className="secondary-button w-inline-block"
                  >
                    <div className="secondary-button-content" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="secondary-button-text-wrap">
                        <div className="secondary-button-text">Get in Touch</div>
                        <div className="secondary-button-hover-text">Get in Touch</div>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, transition: 'transform 0.3s ease' }} className="button-arrow">
                        <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* React-controlled animated hamburger — visible only on mobile via CSS */}
              <button
                id="mobile-menu-btn"
                className={`mobile-menu-toggle${menuOpen ? ' is-active' : ''}`}
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
                style={{ padding: '0 !important' }}
              >
                <svg
                  className={`ham hamRotate ham1${menuOpen ? ' active' : ''}`}
                  viewBox="0 0 100 100"
                  width="36"
                  height="36"
                  style={{ display: 'block' }}
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                  />
                  <path
                    className="line middle"
                    d="m 30,50 h 40"
                  />
                  <path
                    className="line bottom"
                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile backdrop overlay — closes menu on outside tap ─── */}
      <div
        className={`mobile-menu-backdrop${menuOpen ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ─── Mobile slide-in drawer ─── */}
      <div
        id="mobile-drawer"
        className={`mobile-menu-drawer${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="mobile-menu-header">
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line
                x1="1"
                y1="1"
                x2="17"
                y2="17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="17"
                y1="1"
                x2="1"
                y2="17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mobile-menu-nav" aria-label="Primary navigation">
          <div className="mobile-nav-links-wrap">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? ' active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? ' active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? ' active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? ' active' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Premium Mobile Menu Footer */}
          <div className="mobile-nav-footer">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mobile-nav-cta-btn"
            >
              Start Project
            </Link>
            <div className="mobile-nav-socials">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mobile-social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
