import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

// Component Route Guard
import ProtectedRoute from '../components/ProtectedRoute';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ResumeBuilder from '../pages/ResumeBuilder';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Main landing pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Dashboard pages */}
      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Standalone Builder Route (Split editor uses custom Layout inside) */}
      <Route 
        path="/builder/:id" 
        element={
          <ProtectedRoute>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              {/* Header navbar is shown directly on builder */}
              <ResumeBuilder />
            </div>
          </ProtectedRoute>
        } 
      />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
     
  );
};

export default AppRoutes;
