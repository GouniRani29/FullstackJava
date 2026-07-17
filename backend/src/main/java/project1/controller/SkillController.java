package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Skills;
import project1.service.SkillService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SkillController {

    @Autowired
    SkillService service;

    @GetMapping("/getallskills")
    public List<Skills> getAllSkills() {
        return service.getAllSkills();
    }

    @GetMapping("/skill/{id}")
    public Skills getSkillById(@PathVariable long id) {
        return service.getSkillById(id);
    }

    @PostMapping("/skill/create")
    public Skills createSkill(@RequestBody Skills skill) {
        return service.createSkill(skill);
    }

    @PutMapping("/skill/update")
    public Skills updateSkill(@RequestBody Skills skill) {
        return service.updateSkill(skill);
    }

    @DeleteMapping("/skill/delete/{id}")
    public String deleteSkill(@PathVariable long id) {
        service.removeSkill(id);
        return "Deleted Skill Successfully";
    }
}