package project1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long skillId;

    private String skillName;

    private String skillLevel;

    @ManyToOne
    @JoinColumn(name = "resume_id")
    @JsonBackReference
    private Resume resume;

    public Skills() {
    }

    public Skills(Long skillId, String skillName, String skillLevel, Resume resume) {
        this.skillId = skillId;
        this.skillName = skillName;
        this.skillLevel = skillLevel;
        this.resume = resume;
    }

    public Long getSkillId() {
        return skillId;
    }

    public void setSkillId(Long skillId) {
        this.skillId = skillId;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public String getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(String skillLevel) {
        this.skillLevel = skillLevel;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }
}
