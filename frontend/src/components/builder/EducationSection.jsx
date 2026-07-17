import React from "react";
import { educationService } from "../../services/educationService";

const EducationSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const educations = resume.educations || [];

    // Update Field
    const handleChange = (index, field, value) => {

        const updated = [...educations];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setResume({

            ...resume,

            educations: updated

        });

    };

    // Add Education
    const addEducation = () => {

        const updated = [

            ...educations,

            {

                educationId: null,

                collegeName: "",

                degree: "",

                branch: "",

                cgpa: "",

                startYear: "",

                endYear: "",

                resume: {

                    resumeId: resume.resumeId

                }

            }

        ];

        setResume({

            ...resume,

            educations: updated

        });

    };

    // Remove Education
    const removeEducation = (index) => {

        const updated = educations.filter(

            (_, i) => i !== index

        );

        setResume({

            ...resume,

            educations: updated

        });

    };

    // Save Education
    const saveEducation = async (index) => {

    try {

        const edu = educations[index];

        let response;

        if (edu.educationId) {

            response = await educationService.update(edu);

        } else {

            response = await educationService.create(edu);

        }

        const updated = [...educations];

        updated[index] = response.data;

        setResume({
            ...resume,
            educations: updated
        });

        alert("Education Saved Successfully");

    } catch (error) {

        console.error(error);

        alert("Failed to Save Education");

    }

};
    // Delete Education
    const deleteEducation = async (index) => {

        try {

            const edu = educations[index];

            if (edu.educationId) {

                await educationService.delete(edu.educationId);

            }

            removeEducation(index);

        }

        catch (error) {

            console.error(error);

            alert("Failed to Delete Education");

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
                Education
            </h2>

            {

                educations.map((edu, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* College Name */}

                        <div className="form-group">

                            <label className="form-label">

                                College Name

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={edu.collegeName || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "collegeName",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Degree */}

                        <div className="form-group">

                            <label className="form-label">

                                Degree

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={edu.degree || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "degree",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Branch */}

                        <div className="form-group">

                            <label className="form-label">

                                Branch

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={edu.branch || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "branch",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* CGPA */}

                        <div className="form-group">

                            <label className="form-label">

                                CGPA

                            </label>

                            <input

                                type="number"

                                step="0.01"

                                className="form-input"

                                value={edu.cgpa || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "cgpa",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Years */}

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "20px"
                            }}
                        >

                            <div className="form-group">

                                <label className="form-label">

                                    Start Year

                                </label>

                                <input

                                    type="number"

                                    className="form-input"

                                    value={edu.startYear || ""}

                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "startYear",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="form-group">

                                <label className="form-label">

                                    End Year

                                </label>

                                <input

                                    type="number"

                                    className="form-input"

                                    value={edu.endYear || ""}

                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "endYear",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

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
                                    saveEducation(index)
                                }

                            >

                                Save Education

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteEducation(index)
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

                onClick={addEducation}

            >

                + Add Education

            </button>
                    </div>

    );

};

export default EducationSection;
