package com.NaturalDisaster.fullstackbackend.repository;

import com.NaturalDisaster.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmailAndPassword(String email, String password);
}
