package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {

}