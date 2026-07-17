import React from "react";
import { FaSave, FaArrowLeft, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BuilderToolbar = ({ saving, saveResume }) => {

    const navigate = useNavigate();

    return (

        <div
            className="glass"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px",
                marginBottom: "20px",
                borderRadius: "12px"
            }}
        >

            <button
                className="btn-card-action"
                onClick={() => navigate("/dashboard")}
            >
                <FaArrowLeft />
                &nbsp; Dashboard
            </button>

            <h2
                style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: "700"
                }}
            >
                Resume Builder
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "10px"
                }}
            >

                <button
                    className="btn-card-action btn-card-delete"
                    onClick={saveResume}
                    disabled={saving}
                >

                    <FaSave />

                    &nbsp;

                    {saving ? "Saving..." : "Save"}

                </button>

                <button
                    className="gradient-button btn-card-action"
                    onClick={() => window.print()}
                >

                    <FaDownload />

                    &nbsp;

                    Download PDF

                </button>

            </div>

        </div>

    );

};

export default BuilderToolbar;