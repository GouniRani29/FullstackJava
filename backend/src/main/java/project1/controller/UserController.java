package project1.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.User;
import project1.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    UserService service;

    // Get All Users
    @GetMapping("/getallusers")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    // Get User By ID
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable long id) {
        return service.getUserById(id);
    }

    // Create User (Register)
    @PostMapping("/user/create")
    public User createUser(@RequestBody User user) {
        return service.createUser(user);
    }

    // Update User
    @PutMapping("/user/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }

    // Delete User
    @DeleteMapping("/user/delete/{id}")
    public String deleteUser(@PathVariable long id) {
        service.removeUser(id);
        return "Deleted USER Successfully";
    }

}