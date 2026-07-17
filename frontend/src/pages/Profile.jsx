import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';

export const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');
    setSubmitting(true);
    try {
      const data = { name, email };
      if (password) {
        data.password = password;
      }
      await updateProfile(data);
      setSuccess(true);
      setPassword('');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setSubmitting(false);
    }
  };

  const formStyle = {
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginTop: '30px',
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Account Profile</h1>
      <p style={{ color: 'var(--text-muted)' }}>Manage your account settings and personal details</p>

      {success && (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaCheck /> Profile updated successfully!
        </div>
      )}

      {error && (
        <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#f87171', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginTop: '20px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={formStyle} className="glass" style={{ ...formStyle, padding: '30px', borderRadius: 'var(--radius-md)' }}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaUser /></span>
            <input 
              type="text" 
              className="form-input" 
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">New Password (leave blank to keep current)</label>
          <div className="form-input-container">
            <span className="form-input-icon"><FaLock /></span>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={submitting} 
          className="gradient-button"
          style={{ padding: '12px 24px', borderRadius: 'var(--radius-sm)', fontSize: '14px', alignSelf: 'flex-start' }}
        >
          {submitting ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
