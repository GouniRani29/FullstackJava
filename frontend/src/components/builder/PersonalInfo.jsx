import React from "react";

const PersonalInfo = ({ resume, setResume }) => {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setResume(prev => ({

            ...prev,

            [name]: value

        }));

    };
    const handleUserChange = (e) => {

    const { name, value } = e.target;

    setResume(prev => ({

        ...prev,

        user: {

            ...prev.user,

            [name]: value

        }

    }));

};

    if (!resume) return null;

    return (

        <div
            className="glass"
            style={{
                padding: "25px",
                marginBottom: "25px",
                borderRadius: "12px"
            }}
        >

            <h2
                style={{
                    marginBottom: "20px"
                }}
            >
                Resume Details
            </h2>
<div className="form-group">

    <label className="form-label">
        Full Name
    </label>

    <input
        type="text"
        className="form-input"
        name="fullName"
        value={resume.user?.fullName || ""}
        onChange={handleUserChange}
        placeholder="Enter your full name"
    />

</div>
<div className="form-group">

    <label className="form-label">
        Email
    </label>

    <input
        type="email"
        className="form-input"
        name="email"
        value={resume.user?.email || ""}
        onChange={handleUserChange}
        placeholder="example@gmail.com"
    />

</div>
<div className="form-group">

    <label className="form-label">
        Phone
    </label>

    <input
        type="text"
        className="form-input"
        name="phone"
        value={resume.user?.phone || ""}
        onChange={handleUserChange}
        placeholder="+91 9876543210"
    />

</div>
<div className="form-group">

    <label className="form-label">
        Location
    </label>

    <input
        type="text"
        className="form-input"
        name="location"
        value={resume.user?.location || ""}
        onChange={handleUserChange}
        placeholder="Hyderabad"
    />

</div>
<div className="form-group">

    <label className="form-label">
        LinkedIn
    </label>

    <input
        type="text"
        className="form-input"
        name="linkedin"
        value={resume.user?.linkedin || ""}
        onChange={handleUserChange}
        placeholder="https://linkedin.com/in/username"
    />

</div>
<div className="form-group">

    <label className="form-label">
        GitHub
    </label>

    <input
        type="text"
        className="form-input"
        name="github"
        value={resume.user?.github || ""}
        onChange={handleUserChange}
        placeholder="https://github.com/username"
    />

</div>
<div className="form-group">

    <label className="form-label">
        Portfolio Website
    </label>

    <input
        type="text"
        className="form-input"
        name="website"
        value={resume.user?.website || ""}
        onChange={handleUserChange}
        placeholder="https://yourportfolio.com"
    />

</div>
            {/* Resume Title */}

            <div className="form-group">

                <label className="form-label">

                    Resume Title

                </label>

                <input
                    type="text"
                    className="form-input"
                    name="title"
                    value={resume.title || ""}
                    onChange={handleChange}
                    placeholder="Java Full Stack Developer Resume"
                />

            </div>

            {/* Career Objective */}

            <div className="form-group">

                <label className="form-label">

                    Career Objective

                </label>

                <textarea
                    className="form-input"
                    rows="4"
                    name="careerObjective"
                    value={resume.careerObjective || ""}
                    onChange={handleChange}
                    placeholder="Write your career objective..."
                />

            </div>

            {/* Summary */}

            <div className="form-group">

                <label className="form-label">

                    Professional Summary

                </label>

                <textarea
                    className="form-input"
                    rows="6"
                    name="summary"
                    value={resume.summary || ""}
                    onChange={handleChange}
                    placeholder="Write your professional summary..."
                />

            </div>

            {/* Template */}

            <div className="form-group">

                <label className="form-label">

                    Template

                </label>

                <select
                    className="form-input"
                    name="templateName"
                    value={resume.templateName || "modern"}
                    onChange={handleChange}
                >

                    <option value="modern">

                        Modern

                    </option>

                    <option value="professional">

                        Professional

                    </option>

                    <option value="creative">

                        Creative

                    </option>

                    <option value="minimal">

                        Minimal

                    </option>

                    <option value="ats">

                        ATS Friendly

                    </option>

                </select>

            </div>

            {/* Profile Image */}

            <div className="form-group">

                <label className="form-label">

                    Profile Image URL

                </label>

                <input
                    type="text"
                    className="form-input"
                    name="profileImage"
                    value={resume.profileImage || ""}
                    onChange={handleChange}
                    placeholder="https://example.com/profile.jpg"
                />

            </div>

        </div>

    );

};

export default PersonalInfo;