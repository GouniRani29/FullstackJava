package project1.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.EducationEntity;
import project1.repository.EducationRepository;

@Service
public class EducationService {

    @Autowired
    EducationRepository repository;

    public List<EducationEntity> getAllEducations() {
        return repository.findAll();
    }

    public EducationEntity getEducationById(long id) {
        return repository.findById(id).orElse(null);
    }

    public EducationEntity createEducation(EducationEntity education) {
        return repository.save(education);
    }

    public EducationEntity updateEducation(EducationEntity education) {
        return repository.save(education);
    }

    public String removeEducation(long id) {
        repository.deleteById(id);
        return "Deleted Education Successfully";
    }
}