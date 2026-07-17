import React from "react";
import { projectService } from "../../services/projectService";

const ProjectSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const projects = resume.projects || [];

    // Update Field
    const handleChange = (index, field, value) => {

        const updated = [...projects];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setResume({

            ...resume,

            projects: updated

        });

    };

    // Add Project
    const addProject = () => {

        const updated = [

            ...projects,

            {

                projectId: null,

                projectName: "",

                technologies: "",

                description: "",

                githubLink: "",

                liveDemo: "",

                resume: {

                    resumeId: resume.resumeId

                }

            }

        ];

        setResume({

            ...resume,

            projects: updated

        });

    };

    // Remove Project
    const removeProject = (index) => {

        const updated = projects.filter(

            (_, i) => i !== index

        );

        setResume({

            ...resume,

            projects: updated

        });

    };

    // Save Project
    const saveProject = async (index) => {

        try {

            const project = projects[index];

            let saved;

            if (project.projectId) {

                saved = await projectService.updateProject(project);

            }

            else {

                saved = await projectService.createProject(project);

            }

            const updated = [...projects];

            updated[index] = saved;

            setResume({

                ...resume,

                projects: updated

            });

            alert("Project Saved Successfully");

        }

        catch (error) {

            console.error(error);

            alert("Failed to Save Project");

        }

    };

    // Delete Project
    const deleteProject = async (index) => {

        try {

            const project = projects[index];

            if (project.projectId) {

                await projectService.deleteProject(

                    project.projectId

                );

            }

            removeProject(index);

        }

        catch (error) {

            console.error(error);

            alert("Failed to Delete Project");

        }

    };
        return (

        <div
            className="glass"
            style={{
                padding: "25px",
                marginTop: "20px",
                borderRadius: "12px"
            }}
        >

            <h2
                style={{
                    marginBottom: "20px"
                }}
            >
                Projects
            </h2>

            {

                projects.map((project, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* Project Name */}

                        <div className="form-group">

                            <label className="form-label">

                                Project Name

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={project.projectName || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "projectName",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Technologies */}

                        <div className="form-group">

                            <label className="form-label">

                                Technologies

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                placeholder="React, Spring Boot, MySQL"

                                value={project.technologies || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "technologies",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Description */}

                        <div className="form-group">

                            <label className="form-label">

                                Description

                            </label>

                            <textarea

                                rows="5"

                                className="form-input"

                                value={project.description || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* GitHub */}

                        <div className="form-group">

                            <label className="form-label">

                                GitHub Link

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={project.githubLink || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "githubLink",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Live Demo */}

                        <div className="form-group">

                            <label className="form-label">

                                Live Demo

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={project.liveDemo || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "liveDemo",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px"
                            }}
                        >

                            <button

                                type="button"

                                className="gradient-button btn-card-action"

                                onClick={() =>
                                    saveProject(index)
                                }

                            >

                                Save Project

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteProject(index)
                                }

                            >

                                Delete

                            </button>

                        </div>

                    </div>

                ))

            }

            <button

                type="button"

                className="gradient-button btn-card-action"

                onClick={addProject}

            >

                + Add Project

            </button>
                    </div>

    );

};

export default ProjectSection;