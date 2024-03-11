package com.example.petition.repository;

import com.example.petition.model.Petition;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetitionRepository extends MongoRepository<Petition, String> {
    // Custom query methods can be declared here if needed
    List<Petition> findByCreatedBy(String userId);
}
