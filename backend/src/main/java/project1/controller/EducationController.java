package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.EducationEntity;
import project1.service.EducationService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EducationController {

    @Autowired
    EducationService service;

    @GetMapping("/getalleducations")
    public List<EducationEntity> getAllEducations() {
        return service.getAllEducations();
    }

    @GetMapping("/education/{id}")
    public EducationEntity getEducationById(@PathVariable long id) {
        return service.getEducationById(id);
    }

    @PostMapping("/education/create")
    public EducationEntity createEducation(@RequestBody EducationEntity education) {
        return service.createEducation(education);
    }

    @PutMapping("/education/update")
    public EducationEntity updateEducation(@RequestBody EducationEntity education) {
        return service.updateEducation(education);
    }

    @DeleteMapping("/education/delete/{id}")
    public String deleteEducation(@PathVariable long id) {
        service.removeEducation(id);
        return "Deleted Education Successfully";
    }
}