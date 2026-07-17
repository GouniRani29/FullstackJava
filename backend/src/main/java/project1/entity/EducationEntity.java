package project1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "educations")
public class EducationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long educationId;

    private String collegeName;
    private String degree;
    private String branch;
    private Double cgpa;
    private int startYear;
    private int endYear;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    @JsonBackReference
    private Resume resume;

    public EducationEntity() {
    }

    public EducationEntity(Long educationId, String collegeName, String degree,
                     String branch, Double cgpa,
                     int startYear, int endYear,
                     Resume resume) {
        this.educationId = educationId;
        this.collegeName = collegeName;
        this.degree = degree;
        this.branch = branch;
        this.cgpa = cgpa;
        this.startYear = startYear;
        this.endYear = endYear;
        this.resume = resume;
    }

    public Long getEducationId() {
        return educationId;
    }

    public void setEducationId(Long educationId) {
        this.educationId = educationId;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public Double getCgpa() {
        return cgpa;
    }

    public void setCgpa(Double cgpa) {
        this.cgpa = cgpa;
    }

    public int getStartYear() {
        return startYear;
    }

    public void setStartYear(int startYear) {
        this.startYear = startYear;
    }

    public int getEndYear() {
        return endYear;
    }

    public void setEndYear(int endYear) {
        this.endYear = endYear;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }
}