package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.EducationEntity;

@Repository
public interface EducationRepository extends JpaRepository<EducationEntity, Long> {

}