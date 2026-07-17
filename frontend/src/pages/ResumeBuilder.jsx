import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import ResumeTemplate from "../components/builder/ResumeTemplate";
import TemplateRenderer from "../templates/TemplateRenderer";

import { resumeService } from "../services/resumeService";

import BuilderToolbar from "../components/builder/BuilderToolbar";
import PersonalInfo from "../components/builder/PersonalInfo";
import ExperienceSection from "../components/builder/ExperienceSection";
import EducationSection from "../components/builder/EducationSection";
import ProjectSection from "../components/builder/ProjectSection";
import SkillSection from "../components/builder/SkillSection";
import CertificateSection from "../components/builder/CertificateSection";
import AchievementSection from "../components/builder/AchievementSection";
//import ResumePreview from "../components/builder/ResumePreview";
import Loading from "../components/Loading";
//import "../styles/resumeBuilder.css";

const ResumeBuilder = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [resume, setResume] = useState({

    resumeId: null,

    title: "",

    careerObjective: "",

    summary: "",

    templateName: "modern",

    profileImage: "",

    createdDate: "",

    user: {},

    experiences1: [],

    educations: [],

    projects: [],

    skills: [],

    certificate: [],

    achievements: []

});

    useEffect(() => {

        loadResume();

    }, [id]);

    const loadResume = async () => {

        try {

            const data = await resumeService.getResumeById(id);

            console.log("Resume Loaded :", data);

            setResume(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };
    

const saveResume = async () => {

    try {

        const updated = await resumeService.updateResume(resume);

        setResume(updated);

        alert("Resume Saved Successfully");

    }

    catch (error) {

        console.error(error);

        alert("Failed to Save Resume");

    }

};
if (loading) {

    return (

        <Loading message="Loading Resume..." />

    );

}

return (

    <div className="builder-container">

        {/* ===========================
            LEFT PANEL
        ============================ */}

        <div
            className="form-panel"
            style={{
                flex: 1,
                padding: "25px",
                overflowY: "auto"
            }}
        >

            <BuilderToolbar

                saving={false}

                saveResume={saveResume}

            />

            <PersonalInfo

                resume={resume}

                setResume={setResume}

            />

            <ExperienceSection

                resume={resume}

                setResume={setResume}

            />

            <EducationSection

                resume={resume}

                setResume={setResume}

            />

            <ProjectSection

                resume={resume}

                setResume={setResume}

            />

            <SkillSection

                resume={resume}

                setResume={setResume}

            />

            <CertificateSection

                resume={resume}

                setResume={setResume}

            />

            <AchievementSection

                resume={resume}

                setResume={setResume}

            />
         

        </div>





        {/* ===========================
            RIGHT PANEL
        ============================ */}

        <div
    className="preview-panel"
    style={{
        flex: 1,
        background: "#f4f4f4",
        overflowY: "auto",
        padding: "25px"
    }}
>
    <TemplateRenderer resume={resume} />
</div>
    


        </div>

    

);
//<ResumeTemplate resume={resume} />
//<TemplateRenderer resume={resume} />


};

export default ResumeBuilder;