import React from 'react';
import { formatDate } from '../utils/helpers';

export const ATS = ({ data }) => {
  const { personalInfo = {}, experience = [], education = [], projects = [], skills = [], certifications = [], languages = [] } = data;
  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
    borderBottom: "2px solid #111827",
    paddingBottom: "6px",
    marginTop: "20px",
    marginBottom: "12px",
    textTransform: "uppercase"
};
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#000000',
    padding: '40px',
    lineHeight: '1.4',
    backgroundColor: '#ffffff',
    fontSize: '12px',
  };

  const nameStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const contactStyle = {
    fontSize: '11px',
    textAlign: 'center',
    marginBottom: '16px',
  };

  const sectionHeaderStyle = {
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottom: '1px solid #000000',
    marginTop: '16px',
    marginBottom: '8px',
  };

  return (
    <div style={containerStyle}>
      {/* Name and Contact */}
      <h1 style={nameStyle}>{personalInfo.fullName || 'Your Name'}</h1>
      <h1 style={nameStyle}>THIS IS ATS TEMPLATE</h1>
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

      {/* Summary */}
      {/* Professional Summary */}
{personalInfo.summary && (
  
    <div>
      
        <h2
    style={{
        fontSize: "18px",
        fontWeight: "700",
        borderBottom: "2px solid black",
        marginBottom: "12px"
    }}
>
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
          <div style={sectionHeaderStyle}>Work Experience</div>
          {experience.map((exp, idx) => (
            <div key={exp.id || idx} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>{exp.company || 'Company'} - {exp.position || 'Position'}</span>
                <span>{formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}</span>
              </div>
              <div style={{ fontStyle: 'italic' }}>{exp.location}</div>
              {exp.description && (
                <div style={{ whiteSpace: 'pre-line', marginTop: '4px', paddingLeft: '12px' }}>
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
          <div style={sectionHeaderStyle}>Education</div>
          {education.map((edu, idx) => (
            <div key={edu.id || idx} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>{edu.institution || 'Institution'}</span>
                <span>{formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}</span>
              </div>
              <div>{edu.degree} in {edu.fieldOfStudy} {edu.gpa ? `(GPA: ${edu.gpa})` : ''}</div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && projects.some(proj => proj.name) && (
        <div>
          <div style={sectionHeaderStyle}>Projects</div>
          {projects.map((proj, idx) => (
            <div key={proj.id || idx} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>{proj.name} {proj.link ? `(${proj.link})` : ''}</span>
                <span>{proj.technologies}</span>
              </div>
              {proj.description && <p style={{ marginTop: '2px' }}>{proj.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <div style={sectionHeaderStyle}>Key Skills</div>
          <p>{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default ATS;
