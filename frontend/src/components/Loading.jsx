import React from 'react';

export const Loading = ({ fullScreen = false, message = 'Loading your workspace...' }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    background: 'transparent',
    color: 'var(--text-primary)',
    ...(fullScreen && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--bg-primary)',
      zIndex: 9999,
    })
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '3px solid rgba(99, 102, 241, 0.1)',
    borderTop: '3px solid var(--primary)',
    borderRight: '3px solid var(--secondary)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-headings)',
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={spinnerStyle}></div>
      <div style={textStyle}>{message}</div>
    </div>
  );
};

export default Loading;
