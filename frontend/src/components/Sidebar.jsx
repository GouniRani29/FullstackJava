import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaTachometerAlt, FaUser, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
import '../styles/sidebar.css';

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    return user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <FaUser />
            <span>My Profile</span>
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div className="sidebar-user" style={{ marginBottom: '16px' }}>
          <div className="sidebar-user-avatar">{getUserInitials()}</div>
          <div className="sidebar-user-info">
            <span className="sidebar-user-name">{user?.name || 'User'}</span>
            <span className="sidebar-user-email">{user?.email || ''}</span>
          </div>
        </div>
        <button 
          onClick={handleLogout} 
          className="sidebar-link" 
          style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left' }}
        >
          <FaSignOutAlt />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
