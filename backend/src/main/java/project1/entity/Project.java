package project1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name="projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;

    private String projectName;

    private String technologies;

    @Column(length = 1000)
    private String description;

    private String githubLink;

    private String liveDemo;

    @ManyToOne
    @JoinColumn(name="resume_id")
    @JsonBackReference
    private Resume resume;

    public Project() {
    }

    public Project(Long projectId, String projectName, String technologies,
                   String description, String githubLink,
                   String liveDemo, Resume resume) {

        this.projectId = projectId;
        this.projectName = projectName;
        this.technologies = technologies;
        this.description = description;
        this.githubLink = githubLink;
        this.liveDemo = liveDemo;
        this.resume = resume;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public String getLiveDemo() {
        return liveDemo;
    }

    public void setLiveDemo(String liveDemo) {
        this.liveDemo = liveDemo;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }
}
