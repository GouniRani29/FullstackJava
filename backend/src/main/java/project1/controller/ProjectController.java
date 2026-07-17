package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Project;
import project1.service.ProjectService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @Autowired
    ProjectService service;

    @GetMapping("/getallprojects")
    public List<Project> getAllProjects() {
        return service.getAllProjects();
    }

    @GetMapping("/project/{id}")
    public Project getProjectById(@PathVariable long id) {
        return service.getProjectById(id);
    }

    @PostMapping("/project/create")
    public Project createProject(@RequestBody Project project) {
        return service.createProject(project);
    }

    @PutMapping("/project/update")
    public Project updateProject(@RequestBody Project project) {
        return service.updateProject(project);
    }

    @DeleteMapping("/project/delete/{id}")
    public String deleteProject(@PathVariable long id) {
        service.removeProject(id);
        return "Deleted Project Successfully";
    }
}