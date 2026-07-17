export const TEMPLATES = {
  PROFESSIONAL: 'professional',
  MODERN: 'modern',
  ATS: 'ats',
  CREATIVE: 'creative',
  MINIMAL: 'minimal',
};

export const THEMES = [
  { id: 'cobalt', name: 'Cobalt Blue', primary: '#1e3a8a', secondary: '#3b82f6', text: '#1e3a8a' },
  { id: 'emerald', name: 'Emerald Green', primary: '#064e3b', secondary: '#10b981', text: '#064e3b' },
  { id: 'crimson', name: 'Crimson Red', primary: '#7f1d1d', secondary: '#ef4444', text: '#7f1d1d' },
  { id: 'slate', name: 'Charcoal Slate', primary: '#1e293b', secondary: '#64748b', text: '#1e293b' },
  { id: 'violet', name: 'Grape Violet', primary: '#4c1d95', secondary: '#8b5cf6', text: '#4c1d95' },
];

export const FONTS = [
  { id: 'inter', name: 'Inter (Sans-serif)', family: "'Inter', sans-serif" },
  { id: 'outfit', name: 'Outfit (Modern)', family: "'Outfit', sans-serif" },
  { id: 'serif', name: 'Merriweather (Classic Serif)', family: "'Merriweather', serif" },
  { id: 'mono', name: 'Fira Code (Monospace)', family: "'Fira Code', monospace" },
];

export const INITIAL_RESUME_DATA = {
  title: 'My Professional Resume',
  template: 'modern',
  themeColor: 'cobalt',
  fontFamily: 'inter',
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
  },
  experience: [
    {
      id: 1,
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    }
  ],
  education: [
    {
      id: 1,
      institution: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
    }
  ],
  projects: [
    {
      id: 1,
      name: '',
      technologies: '',
      link: '',
      description: '',
    }
  ],
  skills: [],
  certifications: [
    {
      id: 1,
      name: '',
      issuer: '',
      date: '',
      link: '',
    }
  ],
  languages: [
    {
      id: 1,
      name: '',
      proficiency: 'Fluent', // Fluent, Native, Conversational, Professional
    }
  ],
};
