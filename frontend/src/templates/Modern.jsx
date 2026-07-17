import React from 'react';
import { formatDate } from '../utils/helpers';

export const Modern = ({ data, theme }) => {
  const { personalInfo = {}, experience = [], education = [], projects = [], skills = [], certifications = [], languages = [] } = data;

  const primaryColor = theme?.primary || '#1e3a8a';
  const secondaryColor = theme?.secondary || '#3b82f6';

  const containerStyle = {
    fontFamily: 'inherit',
    color: '#1e293b',
    padding: '40px',
    lineHeight: '1.6',
    backgroundColor: '#ffffff',
    fontSize: '14px',
  };

  const headerStyle = {
    borderBottom: `3px solid ${primaryColor}`,
    paddingBottom: '20px',
    marginBottom: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const nameStyle = {
    fontSize: '32px',
    fontWeight: '800',
    color: primaryColor,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '500',
    color: secondaryColor,
    marginTop: '4px',
  };

  const contactStyle = {
    fontSize: '12px',
    color: '#475569',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  };

  const sectionTitleStyle = {
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: primaryColor,
    letterSpacing: '0.05em',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '4px',
    marginBottom: '16px',
    marginTop: '24px',
  };

  const expItemStyle = {
    marginBottom: '16px',
  };

  const itemHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '600',
    fontSize: '14px',
    color: '#0f172a',
  };

  const itemSubHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#475569',
    fontSize: '13px',
    fontStyle: 'italic',
    marginTop: '2px',
  };

  const bulletListStyle = {
    marginTop: '6px',
    paddingLeft: '18px',
    fontSize: '13px',
    color: '#334155',
    whiteSpace: 'pre-line',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div>
          <h1 style={nameStyle}>{personalInfo.fullName || 'Your Name'}</h1>
          <h1 style={nameStyle}>THIS IS MODERN TEMPLATE</h1>
          <p style={titleStyle}>{personalInfo.title || 'Professional Title'}</p>
        </div>
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

      {/* Experience */}
      {experience.length > 0 && experience.some(exp => exp.company || exp.position) && (
        <div>
          <h2 style={sectionTitleStyle}>Work Experience</h2>
          {experience.map((exp, idx) => (
            <div key={exp.id || idx} style={expItemStyle}>
              <div style={itemHeaderStyle}>
                <span>{exp.position || 'Position Title'}</span>
                <span style={{ fontWeight: '500', color: '#475569', fontSize: '12px' }}>
                  {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <div style={itemSubHeaderStyle}>
                <span>{exp.company || 'Company Name'}</span>
                <span>{exp.location}</span>
              </div>
              {exp.description && (
                <div style={bulletListStyle}>
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
            <div key={edu.id || idx} style={{ marginBottom: '12px' }}>
              <div style={itemHeaderStyle}>
                <span>{edu.degree || 'Degree'} in {edu.fieldOfStudy || 'Field of Study'}</span>
                <span style={{ fontWeight: '500', color: '#475569', fontSize: '12px' }}>
                  {formatDate(edu.startDate)} – {edu.current ? 'Present' : formatDate(edu.endDate)}
                </span>
              </div>
              <div style={itemSubHeaderStyle}>
                <span>{edu.institution || 'Institution Name'}</span>
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
            <div key={proj.id || idx} style={{ marginBottom: '12px' }}>
              <div style={itemHeaderStyle}>
                <span>
                  {proj.name}
                  {proj.link && <span style={{ fontWeight: 'normal', fontSize: '12px', marginLeft: '8px', color: secondaryColor }}>({proj.link})</span>}
                </span>
                {proj.technologies && <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>{proj.technologies}</span>}
              </div>
              {proj.description && <p style={{ fontSize: '13px', color: '#334155', marginTop: '4px' }}>{proj.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills & Languages */}
      <div style={{ display: 'flex', gap: '40px', marginTop: '24px' }}>
        {skills.length > 0 && (
          <div style={{ flex: 2 }}>
            <h2 style={{ ...sectionTitleStyle, marginTop: 0 }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {skills.map((skill, idx) => (
                <span key={idx} style={{ background: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '500', border: '1px solid #e2e8f0' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {(languages.length > 0 && languages.some(l => l.name)) && (
          <div style={{ flex: 1 }}>
            <h2 style={{ ...sectionTitleStyle, marginTop: 0 }}>Languages</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {languages.map((lang, idx) => (
                <div key={lang.id || idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>{lang.name}</span>
                  <span style={{ color: '#64748b' }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Certifications */}
      {certifications.length > 0 && certifications.some(c => c.name) && (
        <div>
          <h2 style={sectionTitleStyle}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {certifications.map((cert, idx) => (
              <div key={cert.id || idx} style={{ fontSize: '13px' }}>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>{cert.name}</span>
                <div style={{ color: '#475569', fontSize: '12px' }}>
                  {cert.issuer} {cert.date ? `| ${formatDate(cert.date)}` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modern;
