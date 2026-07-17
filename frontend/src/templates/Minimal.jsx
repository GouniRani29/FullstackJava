import React from 'react';
import { formatDate } from '../utils/helpers';

export const Minimal = ({ data, theme }) => {
  const { personalInfo = {}, experience = [], education = [], projects = [], skills = [], certifications = [], languages = [] } = data;

  const accentColor = theme?.secondary || '#64748b';

  const containerStyle = {
    fontFamily: 'inherit',
    color: '#334155',
    padding: '40px',
    lineHeight: '1.6',
    backgroundColor: '#ffffff',
    fontSize: '13px',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: '300',
    color: '#0f172a',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  };

  const titleStyle = {
    fontSize: '13px',
    color: accentColor,
    fontWeight: '500',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginTop: '2px',
  };

  const contactStyle = {
    fontSize: '11px',
    color: '#64748b',
    marginTop: '8px',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  };

  const sectionHeaderStyle = {
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#0f172a',
    letterSpacing: '0.1em',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '6px',
    marginBottom: '14px',
    marginTop: '24px',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '16px', marginBottom: '20px' }}>
        <h1 style={nameStyle}>{personalInfo.fullName || 'Your Name'}</h1>
        <p style={titleStyle}>{personalInfo.title || 'Professional Title'}</p>
        <div style={contactStyle}>
  {personalInfo.email && (
    <div>
      📧{" "}
      <a href={`mailto:${personalInfo.email}`}>
        {personalInfo.email}
      </a>
    </div>
  )}

  {personalInfo.phone && (
    <div>📞 {personalInfo.phone}</div>
  )}

  {personalInfo.location && (
    <div>📍 {personalInfo.location}</div>
  )}

  {personalInfo.linkedin && (
    <div>
      💼{" "}
      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  )}

  {personalInfo.github && (
    <div>
      💻{" "}
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )}

  {personalInfo.website && (
    <div>
      🌐{" "}
      <a
        href={personalInfo.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>
    </div>
  )}
</div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <p style={{ color: '#475569', fontSize: '13px', marginBottom: '16px' }}>{personalInfo.summary}</p>
      )}

      {/* Experience */}
      {experience.length > 0 && experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 style={sectionHeaderStyle}>Experience</h2>
          {experience.map((exp, idx) => (
            <div key={exp.id || idx} style={{ marginBottom: '14px', display: 'flex' }}>
              <div style={{ width: '25%', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
                {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
              </div>
              <div style={{ width: '75%' }}>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>{exp.position}</span>
                <span style={{ color: '#64748b' }}> at {exp.company}</span>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>{exp.location}</div>
                {exp.description && (
                  <p style={{ marginTop: '4px', fontSize: '12px', whiteSpace: 'pre-line', color: '#475569' }}>{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 style={sectionHeaderStyle}>Education</h2>
          {education.map((edu, idx) => (
            <div key={edu.id || idx} style={{ marginBottom: '10px', display: 'flex' }}>
              <div style={{ width: '25%', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
                {formatDate(edu.startDate)} – {edu.current ? 'Present' : formatDate(edu.endDate)}
              </div>
              <div style={{ width: '75%' }}>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>{edu.degree} in {edu.fieldOfStudy}</span>
                <div style={{ color: '#64748b' }}>{edu.institution} {edu.gpa ? `| GPA: ${edu.gpa}` : ''}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 style={sectionHeaderStyle}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#475569' }}>
            {skills.map((skill, idx) => (
              <span key={idx} style={{ fontWeight: '500' }}>• {skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Minimal;
