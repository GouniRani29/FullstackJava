package project1.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}

