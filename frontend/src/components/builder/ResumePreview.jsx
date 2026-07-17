import React from "react";

const ResumePreview = ({ resume }) => {

    if (!resume) {

        return null;

    }

    return (

        <div
            className="preview-panel"
            style={{
                flex: 1,
                padding: "30px",
                overflowY: "auto"
            }}
        >

            <div
                className="resume-paper"
                style={{
                    background: "#fff",
                    color: "#000",
                    minHeight: "100%",
                    padding: "40px",
                    borderRadius: "8px"
                }}
            >

                {/* Resume Title */}

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "5px"
                    }}
                >
                    {resume.title}
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: "30px"
                    }}
                >
                    {resume.templateName}
                </p>

                <hr />

                {/* Career Objective */}

                <h2>Career Objective</h2>

                <p>

                    {resume.careerObjective || "No career objective added."}

                </p>

                <hr />

                {/* Summary */}

                <h2>Professional Summary</h2>

                <p>

                    {resume.summary || "No summary added."}

                </p>

                <hr />

                {/* Experiences */}

                <h2>Experience</h2>

                {

                    resume.experiences1 &&
                    resume.experiences1.length > 0 ?

                        resume.experiences1.map(exp => (

                            <div
                                key={exp.experienceId}
                                style={{
                                    marginBottom: "20px"
                                }}
                            >

                                <h3>

                                    {exp.jobTitle}

                                </h3>

                                <strong>

                                    {exp.companyName}

                                </strong>

                                <p>

                                    {exp.description}

                                </p>

                            </div>

                        ))

                        :

                        <p>

                            No Experience Added

                        </p>

                }

                <hr />

                {/* Skills */}

                <h2>

                    Skills

                </h2>

                {

                    resume.skills &&
                    resume.skills.length > 0 ?

                        <ul>

                            {

                                resume.skills.map(skill => (

                                    <li
                                        key={skill.skillId}
                                    >

                                        {skill.skillName}

                                    </li>

                                ))

                            }

                        </ul>

                        :

                        <p>

                            No Skills Added

                        </p>

                }

                <hr />

                {/* Projects */}

                <h2>

                    Projects

                </h2>

                {

                    resume.projects &&
                    resume.projects.length > 0 ?

                        resume.projects.map(project => (

                            <div
                                key={project.projectId}
                                style={{
                                    marginBottom: "20px"
                                }}
                            >

                                <h3>

                                    {project.projectTitle}

                                </h3>

                                <p>

                                    {project.description}

                                </p>

                            </div>

                        ))

                        :

                        <p>

                            No Projects Added

                        </p>

                }

            </div>

        </div>

    );

};

export default ResumePreview;