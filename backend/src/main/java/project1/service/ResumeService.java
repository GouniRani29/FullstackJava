package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Resume;
import project1.repository.ResumeRepository;

@Service
public class ResumeService {

    @Autowired
    ResumeRepository repository;

    public List<Resume> getAllResumes() {
        return repository.findAll();
    }

    public Resume getResumeById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Resume createResume(Resume resume) {
        return repository.save(resume);
    }

    public Resume updateResume(Resume resume) {
        return repository.save(resume);
    }

    public String removeResume(long id) {
        repository.deleteById(id);
        return "Deleted Resume Successfully";
    }

}