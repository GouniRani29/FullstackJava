import React from 'react';

export const Footer = () => {
  const footerStyle = {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border-color)',
    padding: '40px 0',
    color: 'var(--text-muted)',
    fontSize: '14px',
    marginTop: 'auto',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-headings)' }}>
            ResuBuild<span style={{ color: 'var(--accent)' }}>.ai</span>
          </span>
          <p style={{ marginTop: '8px', fontSize: '12px' }}>Empowering careers with AI-driven, high-converting resumes.</p>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ hover: { color: 'var(--primary)' } }}>Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} ResuBuild. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
