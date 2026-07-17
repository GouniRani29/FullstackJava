import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add authorization token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Generic error response parser
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the server fails to connect, we don't throw blocking errors in local demonstration mode.
    // Instead we can intercept and log it.
    console.error('API Error:', error.response?.data || error.message);
    
    // Auto-logout if unauthorized (expired token)
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Only redirect if not already on login/register pages
      if (!window.location.pathname.includes('/login') && !window.location.pathname.includes('/register')) {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
export { API_URL };
