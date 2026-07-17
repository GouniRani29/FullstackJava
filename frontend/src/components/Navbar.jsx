import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaFileAlt, FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import '../styles/navbar.css';

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    return user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="nav-logo">
          <FaFileAlt />
        </span>
        <span>ResuBuild<span style={{ color: 'var(--accent)' }}>.ai</span></span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Templates</Link></li>
        <li><Link to="/" className="nav-link">Features</Link></li>
        <li><Link to="/" className="nav-link">Pricing</Link></li>
        {isAuthenticated && (
          <li><Link to="/dashboard" className="nav-link">My Dashboard</Link></li>
        )}
      </ul>

      <div className="nav-auth">
        {isAuthenticated ? (
          <div className="user-dropdown" ref={dropdownRef}>
            <div className="nav-user" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <div className="user-avatar">{getUserInitials()}</div>
              <span className="user-name">{user.name || 'User'}</span>
            </div>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <FaTachometerAlt /> Dashboard
                </Link>
                <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <FaUser /> My Profile
                </Link>
                <hr style={{ border: 'none', borderBottom: '1px solid var(--border-color)', margin: '4px 0' }} />
                <button className="dropdown-item logout" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/register" className="gradient-button btn-register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
