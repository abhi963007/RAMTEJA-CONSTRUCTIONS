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
                  onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
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
                    to="#"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
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

              {/* React-controlled hamburger — visible only on mobile via CSS */}
              <button
                id="mobile-menu-btn"
                className={`mobile-menu-toggle${menuOpen ? ' is-active' : ''}`}
                onClick={toggleMenu}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
              >
                {menuOpen ? (
                  /* X / close icon */
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <line
                      x1="1"
                      y1="1"
                      x2="19"
                      y2="19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="19"
                      y1="1"
                      x2="1"
                      y2="19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  /* Hamburger icon */
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="24"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="0"
                      y1="9"
                      x2="24"
                      y2="9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="0"
                      y1="17"
                      x2="24"
                      y2="17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
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
          <Link to="/" onClick={closeMenu} className="mobile-menu-logo" style={{ textDecoration: 'none' }}>
            <span className="navbar-logo-text" style={{ fontSize: '18px' }}>Ramteja Constructions</span>
          </Link>
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
        </nav>
      </div>
    </div>
  );
}
