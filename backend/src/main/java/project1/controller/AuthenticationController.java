package project1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project1.dto.LoginRequest;
import project1.dto.LoginResponse;
import project1.security.CustomUserDetailsService;
import project1.security.JwtUtil;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        System.out.println("LOGIN API CALLED");

        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()));

            System.out.println("Authentication Success");

        } catch (Exception e) {

            e.printStackTrace();

            throw e;
        }

        UserDetails userDetails =
                userDetailsService.loadUserByUsername(request.getEmail());

        String token = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new LoginResponse(token));
    }}