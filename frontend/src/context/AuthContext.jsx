import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuth = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  };
  checkAuth();
}, []);

  const login = async (email, password) => {
  setLoading(true);

  try {

    const data = await authService.login(email, password);

    // Create a simple user object
    const loggedUser = {
      email: email
    };

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(loggedUser));

    // Update Context
    setUser(loggedUser);

    return loggedUser;

  } finally {

    setLoading(false);

  }
};
  const register = async (user) => {

  setLoading(true);

  try {

    const data = await authService.register(user);

    return data;

  } finally {

    setLoading(false);

  }
};
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateProfile = async (userData) => {
    try {
      const updatedUser = await authService.updateProfile(userData);
      setUser(updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Failed to update profile:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
