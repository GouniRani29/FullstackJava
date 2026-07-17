import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export const NotFound = () => {
  const containerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    textAlign: 'center',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    minHeight: 'calc(100vh - var(--header-height))',
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      <div style={{ fontSize: '80px', color: 'var(--secondary)', marginBottom: '20px' }}>
        <FaExclamationTriangle />
      </div>
      <h1 style={{ fontSize: '36px', marginBottom: '10px', fontFamily: 'var(--font-headings)' }}>404 - Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '400px' }}>
        The page you are looking for does not exist or has been moved to another location.
      </p>
      <Link to="/" className="gradient-button" style={{ padding: '12px 28px', borderRadius: 'var(--radius-sm)' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
