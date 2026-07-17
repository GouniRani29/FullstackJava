import React from "react";
import { certificateService } from "../../services/certificateService";

const CertificateSection = ({ resume, setResume }) => {

    if (!resume) return null;

    const certificates = resume.certificate || [];

    // Update Field
    const handleChange = (index, field, value) => {

        const updated = [...certificates];

        updated[index] = {

            ...updated[index],

            [field]: value

        };

        setResume({

            ...resume,

            certificate: updated

        });

    };

    // Add Certificate
    const addCertificate = () => {

        const updated = [

            ...certificates,

            {

                certificationId: null,

                certificateName: "",

                organization: "",

                issueDate: "",

                credentialId: "",

                credentialUrl: "",

                resume: {

                    resumeId: resume.resumeId

                }

            }

        ];

        setResume({

            ...resume,

            certificate: updated

        });

    };

    // Remove Certificate
    const removeCertificate = (index) => {

        const updated = certificates.filter(

            (_, i) => i !== index

        );

        setResume({

            ...resume,

            certificate: updated

        });

    };

    // Save Certificate
    const saveCertificate = async (index) => {

        try {

            const certificate = certificates[index];

            let saved;

            if (certificate.certificationId) {

                saved = await certificateService.updateCertificate(certificate);

            }

            else {

                saved = await certificateService.createCertificate(certificate);

            }

            const updated = [...certificates];

            updated[index] = saved;

            setResume({

                ...resume,

                certificate: updated

            });

            alert("Certificate Saved Successfully");

        }

        catch (error) {

            console.error(error);

            alert("Failed to Save Certificate");

        }

    };

    // Delete Certificate
    const deleteCertificate = async (index) => {

        try {

            const certificate = certificates[index];

            if (certificate.certificationId) {

                await certificateService.deleteCertificate(

                    certificate.certificationId

                );

            }

            removeCertificate(index);

        }

        catch (error) {

            console.error(error);

            alert("Failed to Delete Certificate");

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
                Certifications
            </h2>

            {

                certificates.map((certificate, index) => (

                    <div
                        key={index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        {/* Certificate Name */}

                        <div className="form-group">

                            <label className="form-label">

                                Certificate Name

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={certificate.certificateName || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "certificateName",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Organization */}

                        <div className="form-group">

                            <label className="form-label">

                                Organization

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={certificate.organization || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "organization",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Issue Date */}

                        <div className="form-group">

                            <label className="form-label">

                                Issue Date

                            </label>

                            <input

                                type="date"

                                className="form-input"

                                value={certificate.issueDate || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "issueDate",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Credential ID */}

                        <div className="form-group">

                            <label className="form-label">

                                Credential ID

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                value={certificate.credentialId || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "credentialId",
                                        e.target.value
                                    )
                                }

                            />

                        </div>

                        {/* Credential URL */}

                        <div className="form-group">

                            <label className="form-label">

                                Credential URL

                            </label>

                            <input

                                type="text"

                                className="form-input"

                                placeholder="https://..."

                                value={certificate.credentialUrl || ""}

                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "credentialUrl",
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
                                    saveCertificate(index)
                                }

                            >

                                Save Certificate

                            </button>

                            <button

                                type="button"

                                className="btn-card-action btn-card-delete"

                                onClick={() =>
                                    deleteCertificate(index)
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

                onClick={addCertificate}

            >

                + Add Certificate

            </button>
                    </div>

    );

};

export default CertificateSection;