import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const DashboardLayout = () => {
  const contentStyle = {
    marginLeft: 'var(--sidebar-width)',
    padding: '40px',
    minHeight: 'calc(100vh - var(--header-height))',
    backgroundColor: 'var(--bg-primary)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={contentStyle} className="animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
