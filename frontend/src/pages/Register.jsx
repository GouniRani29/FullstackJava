import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { register } = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    setError("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  setError("");
  setSubmitting(true);

  try {

    const user = {
      fullName: name,
      email: email,
      password: password,
      phone: ""
    };

    await register(user);

    navigate("/login");

  } catch (err) {
    setError(
      err.response?.data?.message ||
      err.message ||
      "Registration failed."
    );
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div>
      <h2 className="auth-title">Create Account</h2>
      <p className="auth-subtitle">Join us to build a premium job-winning resume</p>

      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaUser /></span>
            <input 
              type="text" 
              className="form-input" 
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

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

        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaLock /></span>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={submitting} 
          className="gradient-button auth-submit-btn"
        >
          {submitting ? 'Registering...' : 'Sign Up'}
        </button>
      </form>

      <div className="auth-footer">
        Already have an account? 
        <Link to="/login" className="auth-link">Login</Link>
      </div>
    </div>
  );
};

export default Register;
