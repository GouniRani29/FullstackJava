package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Resume;
import project1.service.ResumeService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    @Autowired
    ResumeService service;

    // Get All Resumes
    @GetMapping("/getallresumes")
    public List<Resume> getAllResumes() {
        return service.getAllResumes();
    }

    // Get Resume By ID
    @GetMapping("/resume/{id}")
    public Resume getResumeById(@PathVariable long id) {
        return service.getResumeById(id);
    }

    // Create Resume
    @PostMapping("/resume/create")
    public Resume createResume(@RequestBody Resume resume) {
        return service.createResume(resume);
    }

    // Update Resume
    @PutMapping("/resume/update")
    public Resume updateResume(@RequestBody Resume resume) {
        return service.updateResume(resume);
    }

    // Delete Resume
    @DeleteMapping("/resume/delete/{id}")
    public String deleteResume(@PathVariable long id) {
        service.removeResume(id);
        return "Deleted Resume Successfully";
    }

}