package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Project;
import project1.repository.ProjectRepo;

@Service
public class ProjectService {

    @Autowired
    ProjectRepo repository;

    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Project getProjectById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Project createProject(Project project) {
        return repository.save(project);
    }

    public Project updateProject(Project project) {
        return repository.save(project);
    }

    public String removeProject(long id) {
        repository.deleteById(id);
        return "Project Deleted Successfully";
    }
}