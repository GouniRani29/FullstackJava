package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Experience;
import project1.repository.ExperienceRepo;

@Service
public class ExperienceService {

    @Autowired
    ExperienceRepo repository;

    public List<Experience> getAllExperiences() {
        return repository.findAll();
    }

    public Experience getExperienceById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Experience createExperience(Experience experience) {
        return repository.save(experience);
    }

    public Experience updateExperience(Experience experience) {
        return repository.save(experience);
    }

    public String removeExperience(long id) {
        repository.deleteById(id);
        return "Experience Deleted Successfully";
    }

}