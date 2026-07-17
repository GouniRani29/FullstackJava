package project1.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import project1.entity.User;
import project1.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = repository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));

        return new CustomUserDetails(user);

    }

}