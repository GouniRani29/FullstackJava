import React from "react";
import { skillService } from "../../services/skillService";

const SkillSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const skills = resume.skills || [];

    // Update Field
    const handleChange = (index, field, value) => {

        const updated = [...skills];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setResume({

            ...resume,

            skills: updated

        });

    };

    // Add Skill
    const addSkill = () => {

        const updated = [

            ...skills,

            {

                skillId: null,

                skillName: "",

                skillLevel: "",

                resume: {

                    resumeId: resume.resumeId

                }

            }

        ];

        setResume({

            ...resume,

            skills: updated

        });

    };

    // Remove Skill
    const removeSkill = (index) => {

        const updated = skills.filter(

            (_, i) => i !== index

        );

        setResume({

            ...resume,

            skills: updated

        });

    };

    // Save Skill
    const saveSkill = async (index) => {

        try {

            const skill = skills[index];

            let saved;

            if (skill.skillId) {

                saved = await skillService.updateSkill(skill);

            }

            else {

                saved = await skillService.createSkill(skill);

            }

            const updated = [...skills];

            updated[index] = saved;

            setResume({

                ...resume,

                skills: updated

            });

            alert("Skill Saved Successfully");

        }

        catch (error) {

            console.error(error);

            alert("Failed to Save Skill");

        }

    };

    // Delete Skill
    const deleteSkill = async (index) => {

        try {

            const skill = skills[index];

            if (skill.skillId) {

                await skillService.deleteSkill(

                    skill.skillId

                );

            }

            removeSkill(index);

        }

        catch (error) {

            console.error(error);

            alert("Failed to Delete Skill");

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
                Skills
            </h2>

            {

                skills.map((skill, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* Skill Name */}

                        <div className="form-group">

                            <label className="form-label">

                                Skill Name

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                placeholder="Java, React, Python..."

                                value={skill.skillName || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "skillName",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Skill Level */}

                        <div className="form-group">

                            <label className="form-label">

                                Skill Level

                            </label>

                            <select

                                className="form-input"

                                value={skill.skillLevel || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "skillLevel",
                                        e.target.value
                                    )
                                }

                            >

                                <option value="">Select Level</option>

                                <option value="Beginner">
                                    Beginner
                                </option>

                                <option value="Intermediate">
                                    Intermediate
                                </option>

                                <option value="Advanced">
                                    Advanced
                                </option>

                                <option value="Expert">
                                    Expert
                                </option>

                            </select>

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
                                    saveSkill(index)
                                }

                            >

                                Save Skill

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteSkill(index)
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

                onClick={addSkill}

            >

                + Add Skill

            </button>
                    </div>

    );

};

export default SkillSection;