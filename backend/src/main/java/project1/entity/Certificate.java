package project1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name="certifications")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long certificationId;

    private String certificateName;

    private String organization;

    private String issueDate;

    private String credentialId;

    private String credentialUrl;

    @ManyToOne
    @JoinColumn(name="resume_id")
    @JsonBackReference
    private Resume resume;

    public Certificate() {
    }

    public Certificate(Long certificationId,
                         String certificateName,
                         String organization,
                         String issueDate,
                         String credentialId,
                         String credentialUrl,
                         Resume resume) {

        this.certificationId = certificationId;
        this.certificateName = certificateName;
        this.organization = organization;
        this.issueDate = issueDate;
        this.credentialId = credentialId;
        this.credentialUrl = credentialUrl;
        this.resume = resume;
    }

    // Generate Getters and Setters
}