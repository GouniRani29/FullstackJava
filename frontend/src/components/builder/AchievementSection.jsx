import React from "react";
import { achievementService } from "../../services/achievementService";

const AchievementSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const achievements = resume.achievements || [];

    // Update Field
    const handleChange = (index, field, value) => {

        const updated = [...achievements];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setResume({

            ...resume,

            achievements: updated

        });

    };

    // Add Achievement
    const addAchievement = () => {

        const updated = [

            ...achievements,

            {

                achievementId: null,

                achievementTitle: "",

                description: "",

                achievementDate: "",

                resume: {

                    resumeId: resume.resumeId

                }

            }

        ];

        setResume({

            ...resume,

            achievements: updated

        });

    };

    // Remove Achievement
    const removeAchievement = (index) => {

        const updated = achievements.filter(

            (_, i) => i !== index

        );

        setResume({

            ...resume,

            achievements: updated

        });

    };

    // Save Achievement
    const saveAchievement = async (index) => {

        try {

            const achievement = achievements[index];

            let saved;

            if (achievement.achievementId) {

                saved = await achievementService.updateAchievement(

                    achievement

                );

            }

            else {

                saved = await achievementService.createAchievement(

                    achievement

                );

            }

            const updated = [...achievements];

            updated[index] = saved;

            setResume({

                ...resume,

                achievements: updated

            });

            alert("Achievement Saved Successfully");

        }

        catch (error) {

            console.error(error);

            alert("Failed to Save Achievement");

        }

    };

    // Delete Achievement
    const deleteAchievement = async (index) => {

        try {

            const achievement = achievements[index];

            if (achievement.achievementId) {

                await achievementService.deleteAchievement(

                    achievement.achievementId

                );

            }

            removeAchievement(index);

        }

        catch (error) {

            console.error(error);

            alert("Failed to Delete Achievement");

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
                Achievements
            </h2>

            {

                achievements.map((achievement, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* Achievement Title */}

                        <div className="form-group">

                            <label className="form-label">

                                Achievement Title

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={achievement.achievementTitle || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "achievementTitle",
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

                                value={achievement.description || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Achievement Date */}

                        <div className="form-group">

                            <label className="form-label">

                                Achievement Date

                            </label>

                            <input

                                type="date"

                                className="form-input"

                                value={achievement.achievementDate || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "achievementDate",
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
                                    saveAchievement(index)
                                }

                            >

                                Save Achievement

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteAchievement(index)
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

                onClick={addAchievement}

            >

                + Add Achievement

            </button>
                    </div>

    );

};

export default AchievementSection;