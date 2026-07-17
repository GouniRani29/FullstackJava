import React from "react";


const ResumeTemplate = ({ resume }) => {

    if (!resume) return null;

    return (

        <div
            id="resume-template"
            style={{
                width: "210mm",
                minHeight: "297mm",
                margin: "30px auto",
                background: "#fff",
                padding: "40px",
                color: "#000",
                boxShadow: "0 0 10px rgba(0,0,0,.15)"
            }}
        >

            <h1>{resume.title}</h1>

            <hr />

            <h2>Career Objective</h2>

            <p>{resume.careerObjective}</p>

            <h2>Professional Summary</h2>

            <p>{resume.summary}</p>

        </div>

    );

};

export default ResumeTemplate;