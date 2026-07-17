import React from "react";
import { experienceService } from "../../services/experienceService";

const ExperienceSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const experiences = resume.experiences1 || [];

    // Update a field
    const handleChange = (index, field, value) => {

        const updated = [...experiences];

        updated[index] = {
            ...updated[index],
            [field]: value
        };

        setResume({
            ...resume,
            experiences1: updated
        });

    };

    // Add new experience
    const addExperience = () => {

        const updated = [
            ...experiences,
            {
                experienceId: null,
                companyName: "",
                jobTitle: "",
                location: "",
                startDate: "",
                endDate: "",
                description: "",
                resume: {
                    resumeId: resume.resumeId
                }
            }
        ];

        setResume({
            ...resume,
            experiences1: updated
        });

    };

    // Remove from UI
    const removeExperience = (index) => {

        const updated = experiences.filter((_, i) => i !== index);

        setResume({
            ...resume,
            experiences1: updated
        });

    };

    // Save to Backend
    const saveExperience = async (index) => {

        try {

            const exp = experiences[index];

            let saved;

            if (exp.experienceId) {

                saved = await experienceService.updateExperience(exp);

            } else {

                saved = await experienceService.createExperience(exp);

            }

            const updated = [...experiences];

            updated[index] = saved;

            setResume({
                ...resume,
                experiences1: updated
            });

            alert("Experience saved successfully.");

        } catch (error) {

            console.error(error);

            alert("Unable to save experience.");

        }

    };

    // Delete from Backend
    const deleteExperience = async (index) => {

        try {

            const exp = experiences[index];

            if (exp.experienceId) {

                await experienceService.deleteExperience(exp.experienceId);

            }

            removeExperience(index);

        } catch (error) {

            console.error(error);

            alert("Unable to delete experience.");

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
                Experience
            </h2>

            {

                experiences.map((exp, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* Company */}

                        <div className="form-group">

                            <label className="form-label">

                                Company Name

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={exp.companyName || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "companyName",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Job Title */}

                        <div className="form-group">

                            <label className="form-label">

                                Job Title

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={exp.jobTitle || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "jobTitle",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Location */}

                        <div className="form-group">

                            <label className="form-label">

                                Location

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={exp.location || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "location",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Dates */}

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "20px"
                            }}
                        >

                            <div className="form-group">

                                <label className="form-label">

                                    Start Date

                                </label>

                                <input

                                    type="date"

                                    className="form-input"

                                    value={exp.startDate || ""}

                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "startDate",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="form-group">

                                <label className="form-label">

                                    End Date

                                </label>

                                <input

                                    type="date"

                                    className="form-input"

                                    value={exp.endDate || ""}

                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "endDate",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                        </div>

                        {/* Description */}

                        <div className="form-group">

                            <label className="form-label">

                                Description

                            </label>

                            <textarea

                                rows="5"

                                className="form-input"

                                value={exp.description || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "description",
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
                                    saveExperience(index)
                                }

                            >

                                Save Experience

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteExperience(index)
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

                onClick={addExperience}

            >

                + Add Experience

            </button>
                    </div>

    );

};

export default ExperienceSection;