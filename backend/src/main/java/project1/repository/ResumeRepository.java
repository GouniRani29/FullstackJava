package project1.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.Resume;

@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long> {

}
