package project1.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name="experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long experienceId;

    private String companyName;

    private String jobTitle;

    private String location;

    private LocalDate startDate;

    private LocalDate endDate;

    @Column(length = 1000)
    private String description;

    @ManyToOne
    @JoinColumn(name="resume_id")
    @JsonBackReference
    private Resume resume;

    public Experience() {
    }

    public Experience(Long experienceId, String companyName, String jobTitle,
            String location, LocalDate startDate, LocalDate endDate,
            String description, Resume resume) {

        this.experienceId = experienceId;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.resume = resume;
    }

    public Long getExperienceId() {
        return experienceId;
    }

    public void setExperienceId(Long experienceId) {
        this.experienceId = experienceId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

}