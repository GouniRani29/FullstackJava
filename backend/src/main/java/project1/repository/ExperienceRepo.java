package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import project1.entity.Experience;

public interface ExperienceRepo extends JpaRepository<Experience, Long>{

}