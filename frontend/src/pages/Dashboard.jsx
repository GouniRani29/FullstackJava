import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resumeService } from '../services/resumeService';
import { FaPlus, FaFileAlt, FaCalendarAlt, FaTrash, FaEdit, FaCheckCircle, FaPercent } from 'react-icons/fa';
import Loading from '../components/Loading';
import '../styles/dashboard.css';

export const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTemplate, setNewTemplate] = useState('modern');
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      const data = await resumeService.getAllResumes();
      setResumes(data);
    } catch (err) {
      setError('Failed to fetch resumes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateResume = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const newResume = await resumeService.createResume({

    title: newTitle,

    careerObjective: "",

    summary: "",

    templateName: newTemplate,

    profileImage: "",

    user: {
        id: 12
    }

});
      setShowCreateModal(false);
      setNewTitle('');
      navigate(`/builder/${newResume.resumeId}`);
    } catch (err) {
      console.error('Failed to create resume', err);
    }
  };

  const handleDeleteResume = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this resume?')) return;

    try {
      await resumeService.deleteResume(id);
      setResumes(resumes.filter((r) => r.resumeId !== id));
    } catch (err) {
      console.error('Failed to delete resume', err);
    }
  };

  const formatDateString = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return <Loading message="Loading dashboard statistics..." />;
  }

  return (
    <div>
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Build, customize, and manage your resumes</p>
        </div>
        <button className="gradient-button btn-card-action" style={{ width: 'auto', padding: '12px 24px', borderRadius: 'var(--radius-sm)' }} onClick={() => setShowCreateModal(true)}>
          <FaPlus /> Create Resume
        </button>
      </div>

      {error && <div className="auth-error">{error}</div>}

      {/* Metrics Summary Tiles */}
      <div className="metrics-grid">
        <div className="glass metric-card">
          <div className="metric-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)' }}>
            <FaFileAlt />
          </div>
          <div className="metric-info">
            <span className="metric-value">{resumes.length}</span>
            <span className="metric-label">Total Resumes</span>
          </div>
        </div>

        <div className="glass metric-card">
          <div className="metric-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
            <FaCheckCircle />
          </div>
          <div className="metric-info">
            <span className="metric-value">Active</span>
            <span className="metric-label">Profile Status</span>
          </div>
        </div>

        <div className="glass metric-card">
          <div className="metric-icon" style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)' }}>
            <FaPercent />
          </div>
          <div className="metric-info">
            <span className="metric-value">85%</span>
            <span className="metric-label">Average Strength</span>
          </div>
        </div>
      </div>

      <h2 className="resumes-section-title">My Resumes</h2>

      {/* Resumes Grid */}
      <div className="resumes-grid">
        <div className="glass create-resume-card" onClick={() => setShowCreateModal(true)}>
          <div className="create-resume-icon">
            <FaPlus />
          </div>
          <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Create New Resume</span>
      </div>

        {resumes.map((resume) => (
          <div key={resume.resumeId} className="glass resume-card" style={{ cursor: 'pointer' }} onClick={() => navigate(`/builder/${newResume.resumeId}`)}>
            <div className="resume-card-header">
              <span className="resume-card-icon"><FaFileAlt /></span>
              <span className="badge badge-primary resume-card-badge">{resume.templateName || "Modern"}</span>
            </div>
            
            <div className="resume-card-body">
              <h3 className="resume-title">{resume.title}</h3>
              <p className="resume-template-name">Template: {resume.templateName || "Modern"}</p>
              <div className="resume-date">
                <FaCalendarAlt style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                <span>Last updated: {formatDateString(resume.createdDate)}</span>
              </div>
            </div>

            <div className="resume-card-footer" onClick={(e) => e.stopPropagation()}>
              <button
  className="btn-card-action btn-card-edit"
  onClick={() => navigate(`/builder/${resume.resumeId}`)}
>Edit</button>
              <button className="btn-card-action btn-card-delete" onClick={(e) => handleDeleteResume(resume.resumeId, e)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Resume Pop-up Modal */}
      {showCreateModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyOrigin: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={() => setShowCreateModal(false)}>
          <div className="glass" style={{ width: '100%', maxWidth: '450px', padding: '30px', animation: 'fadeIn 0.3s' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', fontFamily: 'var(--font-headings)' }}>Create New Resume</h3>
            <form onSubmit={handleCreateResume}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">Resume Title</label>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ paddingLeft: '14px' }}
                  placeholder="e.g. Full Stack Developer Resume" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="form-group" style={{ marginBottom: '30px' }}>
                <label className="form-label">Choose Layout Template</label>
                <select 
                  className="form-input" 
                  style={{ paddingLeft: '14px', background: '#0b0f19' }}
                  value={newTemplate}
                  onChange={(e) => setNewTemplate(e.target.value)}
                >
                  <option value="modern">Modern (Default)</option>
                  <option value="professional">Professional</option>
                  <option value="ats">ATS Friendly</option>
                  <option value="creative">Creative</option>
                  <option value="minimal">Minimalist</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" className="gradient-button btn-card-action">
                  Create & Edit
                </button>
                <button
    onClick={() => navigate(`/builder/${resume.resumeId}`)}
>
    Edit
</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;