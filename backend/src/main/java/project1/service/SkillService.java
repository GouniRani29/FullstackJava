package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Skills;
import project1.repository.SkillRepo;

@Service
public class SkillService {

    @Autowired
    SkillRepo repository;

    public List<Skills> getAllSkills() {
        return repository.findAll();
    }

    public Skills getSkillById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Skills createSkill(Skills skill) {
        return repository.save(skill);
    }

    public Skills updateSkill(Skills skill) {
        return repository.save(skill);
    }

    public String removeSkill(long id) {
        repository.deleteById(id);
        return "Skill Deleted Successfully";
    }
}