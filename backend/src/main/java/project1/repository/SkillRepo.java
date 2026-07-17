package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.Skills;

@Repository
public interface SkillRepo extends JpaRepository<Skills, Long> {

}