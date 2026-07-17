package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Achievement;
import project1.service.AchievementService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AchievementController {

    @Autowired
    AchievementService service;

    @GetMapping("/getallachievements")
    public List<Achievement> getAllAchievements() {
        return service.getAllAchievements();
    }

    @GetMapping("/achievement/{id}")
    public Achievement getAchievementById(@PathVariable long id) {
        return service.getAchievementById(id);
    }

    @PostMapping("/achievement/create")
    public Achievement createAchievement(@RequestBody Achievement achievement) {
        return service.createAchievement(achievement);
    }

    @PutMapping("/achievement/update")
    public Achievement updateAchievement(@RequestBody Achievement achievement) {
        return service.updateAchievement(achievement);
    }

    @DeleteMapping("/achievement/delete/{id}")
    public String deleteAchievement(@PathVariable long id) {
        service.removeAchievement(id);
        return "Deleted Achievement Successfully";
    }
}