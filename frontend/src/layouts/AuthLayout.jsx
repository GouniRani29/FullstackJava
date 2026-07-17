import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import '../styles/login.css';

export const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      {/* Background gradients decor */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      <div className="auth-card glass">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <FaFileAlt />
            <span>ResuBuild<span style={{ color: 'var(--accent)' }}>.ai</span></span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
