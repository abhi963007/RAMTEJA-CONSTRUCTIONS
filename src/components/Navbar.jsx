import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      className="navbar w-nav"
    >
      <div className="auto-container w-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link w-nav-brand" onClick={closeMenu}>
            <img
              loading="lazy"
              src="/images/logo.png"
              alt="Ramteja Constructions Logo"
              className="navbar-logo-image"
            />
          </Link>

          {/* ─── Desktop navigation (Webflow-managed, untouched) ─── */}
          <nav role="navigation" className="nave-menu w-nav-menu">
            <div className="nav-menu-content display-none">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link _1 white w-nav-link${isActive ? ' w--current' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link _2 white w-nav-link${isActive ? ' w--current' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-link _3 white w-nav-link${isActive ? ' w--current' : ''}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link _4 white w-nav-link${isActive ? ' w--current' : ''}`
                }
              >
                Contact
              </NavLink>

              <div className="primary-button-wrapper-two mobile">
                <Link
                  to="/contact"
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
                    <div className="secondary-button-content">
                      <div className="secondary-button-text-wrap">
                        <div className="secondary-button-text">Let's Talk</div>
                        <div className="secondary-button-hover-text">Let's Talk</div>
                      </div>
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
          <Link to="/" onClick={closeMenu} className="mobile-menu-logo">
            <img
              src="/images/logo.png"
              alt="Ramteja Constructions"
              loading="lazy"
            />
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
