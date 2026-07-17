package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Experience;
import project1.service.ExperienceService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ExperienceController {

    @Autowired
    ExperienceService service;

    @GetMapping("/getallexperiences")
    public List<Experience> getAllExperiences() {
        return service.getAllExperiences();
    }

    @GetMapping("/experience/{id}")
    public Experience getExperienceById(@PathVariable long id) {
        return service.getExperienceById(id);
    }

    @PostMapping("/experience/create")
    public Experience createExperience(@RequestBody Experience experience) {
        return service.createExperience(experience);
    }

    @PutMapping("/experience/update")
    public Experience updateExperience(@RequestBody Experience experience) {
        return service.updateExperience(experience);
    }

    @DeleteMapping("/experience/delete/{id}")
    public String deleteExperience(@PathVariable long id) {
        service.removeExperience(id);
        return "Deleted Experience Successfully";
    }

}