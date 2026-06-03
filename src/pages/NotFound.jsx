import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="inner-page-content" style={{ padding: '150px 0 100px', backgroundColor: '#0f0f0f', color: '#fff', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '6rem', margin: '0 0 20px', color: '#8cd462' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Page Not Found</h2>
        <p style={{ color: '#aaa', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
          The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <Link to="/" className="primary-button w-inline-block">
          <div className="primary-button-text-wrap">
            <div className="primary-button-text">Go Back Home</div>
            <div className="primary-button-hover-text">Go Back Home</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
