import React from "react";

import Modern from "./Modern";
import Professional from "./Professional";
import ATS from "./ATS";
import Creative from "./Creative";
import Minimal from "./Minimal";

const TemplateRenderer = ({ resume }) => {

    if (!resume) return null;

    // Convert Spring Boot Resume -> Template Data
    const templateData = {

        personalInfo: {
    fullName: resume.user?.fullName || resume.user?.fullname || "",
    email: resume.user?.email || "",
    phone: resume.user?.phone || "",
    location: resume.user?.location || "",
    linkedin: resume.user?.linkedin || "",
    github: resume.user?.github || "",
    website: resume.user?.website || "",
    title: resume.title || "",
    summary: resume.summary || ""
    
},


       experience: (resume.experiences1 || []).map(exp => ({
    position: exp.jobTitle,
    company: exp.companyName,
    location: exp.location,
    startDate: exp.startDate,
    endDate: exp.endDate,
    description: exp.description
})),

education: (resume.educations || []).map(edu => ({
    institution: edu.collegeName,
    degree: edu.degree,
    fieldOfStudy: edu.branch,
    gpa: edu.cgpa,
    startDate: edu.startYear,
    endDate: edu.endYear
})),

projects: (resume.projects || []).map(project => ({
    name: project.projectName,
    technologies: project.technologies,
    description: project.description,
    link: project.githubLink
})),

skills: (resume.skills || []).map(skill => skill.skillName),

certifications: (resume.certificate || []).map(cert => ({
    name: cert.certificateName,
    issuer: cert.organization,
    date: cert.issueDate
}))

};
console.log("Template Data:", templateData);
console.log("Personal Info:", templateData.personalInfo);
    switch (resume.templateName?.toLowerCase()) {

        case "professional":
            return <Professional data={templateData} />;

        case "ats":
            return <ATS data={templateData} />;

        case "creative":
            return <Creative data={templateData} />;

        case "minimal":
            return <Minimal data={templateData} />;

        case "modern":
        default:
            return <Modern data={templateData} />;
    }
};

export default TemplateRenderer;