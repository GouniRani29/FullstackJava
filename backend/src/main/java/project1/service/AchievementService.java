package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Achievement;
import project1.repository.AchievementRepo;

@Service
public class AchievementService {

    @Autowired
    AchievementRepo repository;

    public List<Achievement> getAllAchievements() {
        return repository.findAll();
    }

    public Achievement getAchievementById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Achievement createAchievement(Achievement achievement) {
        return repository.save(achievement);
    }

    public Achievement updateAchievement(Achievement achievement) {
        return repository.save(achievement);
    }

    public String removeAchievement(long id) {
        repository.deleteById(id);
        return "Achievement Deleted Successfully";
    }
}