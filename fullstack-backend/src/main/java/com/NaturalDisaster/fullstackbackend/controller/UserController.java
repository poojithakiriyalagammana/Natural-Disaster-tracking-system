package com.NaturalDisaster.fullstackbackend.controller;

import com.NaturalDisaster.fullstackbackend.exception.UserNotFoundException;
import com.NaturalDisaster.fullstackbackend.model.User;
import com.NaturalDisaster.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") // Allow requests from frontend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService; // Inject EmailService

    @PostMapping("/login") // New endpoint for login
    public User loginUser(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();

        // Find user by email and password
        User loggedInUser = userRepository.findByEmailAndPassword(email, password);

        if (loggedInUser == null) {
            // Handle invalid login
            throw new RuntimeException("Invalid email or password");
        }

        // Send email on successful login
        emailService.sendEmail(email, "Login Notification - Natural Disaster Tracker", "You have successfully logged in.");

        return loggedInUser;
    }

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        // Save new user
        User savedUser = userRepository.save(newUser);

        // Send email on successful registration
        emailService.sendEmail(newUser.getEmail(), "Registration Notification - Natural Disaster Tracker", "You have successfully registered.");

        return savedUser;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setRole(newUser.getRole());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User " + id + " has been deleted successfully.";
    }
}
