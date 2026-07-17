import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to sign in. Please verify credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="auth-title">Welcome Back</h2>
      <p className="auth-subtitle">Log in to manage and edit your resumes</p>

      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaEnvelope /></span>
            <input 
              type="email" 
              className="form-input" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaLock /></span>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={submitting} 
          className="gradient-button auth-submit-btn"
        >
          {submitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="auth-footer">
        Don't have an account? 
        <Link to="/register" className="auth-link">Create one</Link>
      </div>
    </div>
  );
};

export default Login;
