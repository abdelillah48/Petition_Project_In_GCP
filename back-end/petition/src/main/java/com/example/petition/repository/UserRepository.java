package com.example.petition.repository;

import com.example.petition.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // Custom query methods can be declared here if needed
    User findByName(String name);
}
