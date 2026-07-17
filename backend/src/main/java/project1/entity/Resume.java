package project1.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.OneToMany;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "resumes")
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resumeId;

    private String title;
    private String careerObjective;
    private String summary;
    private String templateName;
    private String profileImage;
    private LocalDate createdDate;
    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Experience> experiences1;

    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Skills> skills;
    
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Project> projects;
    
    @OneToMany(mappedBy="resume",cascade=CascadeType.ALL)
    @JsonManagedReference
    private List<Certificate> certificate;
    
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Achievement> achievements;
    
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<EducationEntity> educations;
	/**
	 * @return the educations
	 */
	public List<EducationEntity> getEducations() {
		return educations;
	}

	/**
	 * @param educations the educations to set
	 */
	public void setEducations(List<EducationEntity> educations) {
		this.educations = educations;
	}

	/**
	 * @return the achievements
	 */
	public List<Achievement> getAchievements() {
		return achievements;
	}

	/**
	 * @param achievements the achievements to set
	 */
	public void setAchievements(List<Achievement> achievements) {
		this.achievements = achievements;
	}

	/**
	 * @return the certificate
	 */
	public List<Certificate> getCertificate() {
		return certificate;
	}

	/**
	 * @param certificate the certificate to set
	 */
	public void setCertificate(List<Certificate> certificate) {
		this.certificate = certificate;
	}

	/**
	 * @return the projects
	 */
	public List<Project> getProjects() {
		return projects;
	}

	/**
	 * @param projects the projects to set
	 */
	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	/**
	 * @return the experiences1
	 */
	public List<Experience> getExperiences1() {
		return experiences1;
	}

	/**
	 * @param experiences1 the experiences1 to set
	 */
	public void setExperiences1(List<Experience> experiences1) {
		this.experiences1 = experiences1;
	}

	/**
	 * @return the skills
	 */
	public List<Skills> getSkills() {
		return skills;
	}

	/**
	 * @param skills the skills to set
	 */
	public void setSkills(List<Skills> skills) {
		this.skills = skills;
	}

	// Parameterized Constructor
    public Resume(Long resumeId, String title, String careerObjective,
                  String summary, String templateName,
                  String profileImage, LocalDate createdDate) {

        this.resumeId = resumeId;
        this.title = title;
        this.careerObjective = careerObjective;
        this.summary = summary;
        this.templateName = templateName;
        this.profileImage = profileImage;
        this.createdDate = createdDate;
    }

    // Default Constructor
    public Resume() {

    }

    public Long getResumeId() {
        return resumeId;
    }

    public void setResumeId(Long resumeId) {
        this.resumeId = resumeId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCareerObjective() {
        return careerObjective;
    }

    public void setCareerObjective(String careerObjective) {
        this.careerObjective = careerObjective;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}