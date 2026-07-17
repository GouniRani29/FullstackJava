import React from 'react';
import { formatDate } from '../utils/helpers';

export const Creative = ({ data, theme }) => {
  const { personalInfo = {}, experience = [], education = [], projects = [], skills = [], certifications = [], languages = [] } = data;

  const primaryColor = theme?.primary || '#8b5cf6';
  const secondaryColor = theme?.secondary || '#06b6d4';

  const containerStyle = {
    fontFamily: 'inherit',
    color: '#334155',
    backgroundColor: '#ffffff',
    fontSize: '13px',
    display: 'flex',
    minHeight: '840px',
  };

  const leftSidebarStyle = {
    width: '32%',
    background: '#f8fafc',
    borderRight: '1px solid #e2e8f0',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const mainContentStyle = {
    width: '68%',
    padding: '30px 30px',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1.2',
  };

  const titleStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: primaryColor,
    marginTop: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const sidebarHeaderStyle = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: `2px solid ${secondaryColor}`,
    paddingBottom: '4px',
    marginBottom: '10px',
  };

  const mainHeaderStyle = {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0f172a',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: `2px solid ${primaryColor}`,
    paddingBottom: '4px',
    marginBottom: '16px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar (Left Column) */}
      <div style={leftSidebarStyle}>
        <div>
          <h1 style={nameStyle}>{personalInfo.fullName || 'Your Name'}</h1>
          <h1 style={nameStyle}>THIS IS CREATIVE TEMPLATE</h1>
          <p style={titleStyle}>{personalInfo.title || 'Professional Title'}</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={sidebarHeaderStyle}>Contact</h3>
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

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3 style={sidebarHeaderStyle}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {skills.map((skill, idx) => (
                <span key={idx} style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#4f46e5', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && languages.some(l => l.name) && (
          <div>
            <h3 style={sidebarHeaderStyle}>Languages</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {languages.map((lang, idx) => (
                <div key={lang.id || idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span>{lang.name}</span>
                  <span style={{ color: '#64748b', fontStyle: 'italic' }}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content (Right Column) */}
      <div style={mainContentStyle}>
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
            <h2 style={mainHeaderStyle}>Experience</h2>
            {experience.map((exp, idx) => (
              <div key={exp.id || idx} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#0f172a' }}>
                  <span>{exp.position || 'Position'}</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>
                    {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <div style={{ color: primaryColor, fontWeight: '500', fontSize: '12px' }}>
                  {exp.company} | {exp.location}
                </div>
                {exp.description && (
                  <p style={{ marginTop: '6px', fontSize: '12px', whiteSpace: 'pre-line' }}>{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && education.some(edu => edu.institution || edu.degree) && (
          <div>
            <h2 style={mainHeaderStyle}>Education</h2>
            {education.map((edu, idx) => (
              <div key={edu.id || idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#0f172a' }}>
                  <span>{edu.degree} in {edu.fieldOfStudy}</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>
                    {formatDate(edu.startDate)} – {exp => exp.current ? 'Present' : formatDate(edu.endDate)}
                  </span>
                </div>
                <div style={{ fontSize: '12px' }}>
                  {edu.institution} {edu.gpa ? `| GPA: ${edu.gpa}` : ''}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && projects.some(proj => proj.name) && (
          <div>
            <h2 style={mainHeaderStyle}>Projects</h2>
            {projects.map((proj, idx) => (
              <div key={proj.id || idx} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#0f172a' }}>
                  <span>{proj.name} {proj.link && <span style={{ fontWeight: 'normal', fontSize: '11px', color: secondaryColor }}>({proj.link})</span>}</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>{proj.technologies}</span>
                </div>
                {proj.description && <p style={{ marginTop: '4px', fontSize: '12px' }}>{proj.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Creative;
