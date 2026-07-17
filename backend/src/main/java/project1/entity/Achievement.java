package project1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "achievements")
public class Achievement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long achievementId;

    private String achievementTitle;

    @Column(length = 1000)
    private String description;

    private String achievementDate;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    @JsonBackReference
    private Resume resume;

    public Achievement() {
    }

    public Achievement(Long achievementId, String achievementTitle,
                       String description, String achievementDate,
                       Resume resume) {
        this.achievementId = achievementId;
        this.achievementTitle = achievementTitle;
        this.description = description;
        this.achievementDate = achievementDate;
        this.resume = resume;
    }

    public Long getAchievementId() {
        return achievementId;
    }

    public void setAchievementId(Long achievementId) {
        this.achievementId = achievementId;
    }

    public String getAchievementTitle() {
        return achievementTitle;
    }

    public void setAchievementTitle(String achievementTitle) {
        this.achievementTitle = achievementTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAchievementDate() {
        return achievementDate;
    }

    public void setAchievementDate(String achievementDate) {
        this.achievementDate = achievementDate;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }
}