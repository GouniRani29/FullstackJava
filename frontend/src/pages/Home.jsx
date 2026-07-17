import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaMagic, FaDownload, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

export const Home = () => {
  const { isAuthenticated } = useAuth();

  const sectionStyle = {
    padding: '80px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const heroTitleStyle = {
    fontFamily: 'var(--font-headings)',
    fontSize: '56px',
    fontWeight: '800',
    lineHeight: '1.1',
    maxWidth: '800px',
    marginBottom: '24px',
    letterSpacing: '-0.03em',
  };

  const heroSubtitleStyle = {
    fontSize: '20px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    marginBottom: '40px',
    lineHeight: '1.6',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1100px',
    marginTop: '60px',
  };

  const cardStyle = {
    padding: '40px 30px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const cardIconStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(99, 102, 241, 0.1)',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {/* Decorative Glows */}
      <div className="bg-glow bg-glow-1" style={{ top: '10%', left: '10%' }}></div>
      <div className="bg-glow bg-glow-2" style={{ bottom: '10%', right: '10%' }}></div>

      <section style={sectionStyle}>
        <div className="badge badge-primary animate-fade-in" style={{ marginBottom: '20px' }}>
          🚀 Introducing ResuBuild 2.0
        </div>
        
        <h1 style={heroTitleStyle} className="animate-fade-in">
          Create a Premium, ATS-Optimized Resume in <span className="gradient-text">Minutes</span>
        </h1>
        
        <p style={heroSubtitleStyle} className="animate-fade-in">
          Build a stand-out resume with our split-screen real-time editor. Select from curated templates approved by recruiters and export as a clean PDF.
        </p>

        <div className="animate-fade-in">
          <Link 
            to={isAuthenticated ? "/dashboard" : "/register"} 
            className="gradient-button" 
            style={{ 
              padding: '16px 36px', 
              borderRadius: '9999px', 
              fontSize: '16px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}
          >
            <span>Start Building for Free</span>
            <FaArrowRight />
          </Link>
        </div>

        <div style={gridStyle}>
          <div className="glass glass-hover" style={cardStyle}>
            <div style={cardIconStyle}>
              <FaMagic />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>Real-time Split Editor</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
              Fill in your details on the left and see the exact PDF layout compile instantly on the right. No guesswork involved.
            </p>
          </div>

          <div className="glass glass-hover" style={cardStyle}>
            <div style={cardIconStyle}>
              <FaFileAlt />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>Recruiter-Tested Templates</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
              Choose from Modern, Professional, Creative, ATS-friendly, or Minimalist layouts designed to highlight your strengths.
            </p>
          </div>

          <div className="glass glass-hover" style={cardStyle}>
            <div style={cardIconStyle}>
              <FaDownload />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>Pixel-Perfect Export</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
              Download your resume instantly in standardized PDF format, formatted perfectly for A4 prints and ATS parsers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Curated Design Themes</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '50px' }}>
          Select pre-styled themes with customizable accent colors and professional typography.
        </p>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px' }}>
          {['Professional', 'Modern', 'ATS-Friendly', 'Creative', 'Minimal'].map((temp, index) => (
            <div key={index} className="glass" style={{ width: '180px', height: '240px', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ height: '70%', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                <FaFileAlt size={40} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{temp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
