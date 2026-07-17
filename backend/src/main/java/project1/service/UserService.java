package project1.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import project1.entity.User;
import project1.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    // Get all users
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    // Get user by ID
    public User getUserById(long id) {
        return repository.findById(id).orElse(null);
    }

    // Register user
    public User createUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        return repository.save(user);
    }

    // Update user
    public User updateUser(User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return repository.save(user);
    }

    // Delete user
    public String removeUser(long id) {
        repository.deleteById(id);
        return "User Deleted Successfully";
    }
}
