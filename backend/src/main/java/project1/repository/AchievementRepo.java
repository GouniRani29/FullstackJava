package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.Achievement;

@Repository
public interface AchievementRepo extends JpaRepository<Achievement, Long> {

}