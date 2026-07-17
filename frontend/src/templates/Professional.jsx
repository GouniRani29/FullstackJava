import React from 'react';
import { formatDate } from '../utils/helpers';

export const Professional = ({ data, theme }) => {
  const { personalInfo = {}, experience = [], education = [], projects = [], skills = [], certifications = [], languages = [] } = data;

  const primaryColor = theme?.primary || '#1e3a8a';
  const secondaryColor = theme?.secondary || '#475569';

  const containerStyle = {
    fontFamily: 'Georgia, serif',
    color: '#111827',
    padding: '40px',
    lineHeight: '1.5',
    backgroundColor: '#ffffff',
    fontSize: '13px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '24px',
  };

  const nameStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: primaryColor,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const titleStyle = {
    fontSize: '14px',
    color: '#4b5563',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: '4px',
  };

  const contactStyle = {
    fontSize: '12px',
    color: '#4b5563',
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '10px',
    borderBottom: '1px solid #d1d5db',
    paddingBottom: '12px',
  };

  const sectionTitleStyle = {
    fontSize: '14px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: primaryColor,
    letterSpacing: '0.08em',
    borderBottom: '2px solid #9ca3af',
    paddingBottom: '2px',
    marginBottom: '12px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={nameStyle}>{personalInfo.fullName || 'Your Name'}</h1>
        <h1 style={nameStyle}>THIS IS PROFESSIONAL TEMPLATE</h1>
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
      {/* Professional Summary */}
{personalInfo.summary && (
    <div>
        <h2 style={sectionTitleStyle}>
            PROFESSIONAL SUMMARY
        </h2>

        <p
            style={{
                fontSize: "13px",
                color: "#334155",
                lineHeight: "1.6",
                marginTop: "8px",
                marginBottom: "20px"
            }}
        >
            {personalInfo.summary}
        </p>
    </div>
)}

      {/* Work History */}
      {experience.length > 0 && experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 style={sectionTitleStyle}>Experience</h2>
          {experience.map((exp, idx) => (
            <div key={exp.id || idx} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                <span>{exp.position || 'Position Title'}</span>
                <span>{formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', color: '#4b5563', fontSize: '12px' }}>
                <span>{exp.company || 'Company Name'} ({exp.location})</span>
              </div>
              {exp.description && (
                <div style={{ paddingLeft: '16px', marginTop: '6px', fontSize: '12px', color: '#374151', whiteSpace: 'pre-line', textAlign: 'justify' }}>
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && education.some(edu => edu.institution || edu.degree) && (
        <div>
          <h2 style={sectionTitleStyle}>Education</h2>
          {education.map((edu, idx) => (
            <div key={edu.id || idx} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                <span>{edu.degree || 'Degree'} in {edu.fieldOfStudy || 'Field'}</span>
                <span>{formatDate(edu.startDate)} – {edu.current ? 'Present' : formatDate(edu.endDate)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4b5563', fontSize: '12px' }}>
                <span>{edu.institution || 'University'}</span>
                <span>{edu.gpa ? `GPA: ${edu.gpa}` : ''}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && projects.some(proj => proj.name) && (
        <div>
          <h2 style={sectionTitleStyle}>Projects</h2>
          {projects.map((proj, idx) => (
            <div key={proj.id || idx} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700' }}>
                <span>{proj.name} {proj.link && <span style={{ fontWeight: 'normal', fontSize: '11px' }}>({proj.link})</span>}</span>
                <span style={{ fontSize: '12px', color: '#4b5563', fontWeight: '500' }}>{proj.technologies}</span>
              </div>
              {proj.description && <p style={{ fontSize: '12px', color: '#374151', marginTop: '3px' }}>{proj.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 style={sectionTitleStyle}>Skills</h2>
          <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>
            <strong>Technical Skills:</strong> {skills.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Professional;
