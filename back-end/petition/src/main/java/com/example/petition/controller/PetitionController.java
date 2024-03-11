// package com.example.petitions.controller;

// import com.example.petitions.model.Petition;
// import com.example.petitions.repository.PetitionRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/petitions")
// public class PetitionController {

//   @Autowired
//   private PetitionRepository petitionRepository;

//   // POST endpoint to create a new petition
//   @PostMapping
//   public ResponseEntity<Petition> createPetition(@RequestBody Petition petition) {
//     petitionRepository.addPetition(petition);
//     return ResponseEntity.ok(petition);
//   }

//   // GET endpoint to retrieve a petition by ID
//   @GetMapping("/{id}")
//   public ResponseEntity<Petition> getPetition(@PathVariable String id) {
//     Petition petition = petitionRepository.findPetitionById(id);
//     if (petition == null) {
//       return ResponseEntity.notFound().build();
//     }
//     return ResponseEntity.ok(petition);
//   }

//   // PUT endpoint to update a petition's details
//   @PutMapping("/{id}")
//   public ResponseEntity<Petition> updatePetition(@PathVariable String id, @RequestBody Petition updatedPetition) {
//     Petition petition = petitionRepository.findPetitionById(id);
//     if (petition == null) {
//       return ResponseEntity.notFound().build();
//     }
//     petitionRepository.updatePetition(id, updatedPetition);
//     return ResponseEntity.ok(updatedPetition);
//   }

//   // DELETE endpoint to delete a petition
//   @DeleteMapping("/{id}")
//   public ResponseEntity<Void> deletePetition(@PathVariable String id) {
//     Petition petition = petitionRepository.findPetitionById(id);
//     if (petition == null) {
//       return ResponseEntity.notFound().build();
//     }
//     petitionRepository.deletePetition(id);
//     return ResponseEntity.ok().build();
//   }
// }
package com.example.petition.controller;

import com.example.petition.model.Petition;
import com.example.petition.repository.PetitionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/petitions")
public class PetitionController {

  @Autowired
  private PetitionRepository petitionRepository;

  // POST endpoint to create a new petition
  @PostMapping
  public ResponseEntity<Petition> createPetition(@RequestBody Petition petition) {
    Petition savedPetition = petitionRepository.save(petition);
    return ResponseEntity.ok(savedPetition);
  }

  // GET endpoint to retrieve a petition by ID
  @GetMapping("/{id}")
  public ResponseEntity<Petition> getPetition(@PathVariable String id) {
    Optional<Petition> petition = petitionRepository.findById(id);
    return petition.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  // PUT endpoint to update a petition's details
  @PutMapping("/{id}")
  public ResponseEntity<Petition> updatePetition(@PathVariable String id, @RequestBody Petition updatedPetition) {
    return petitionRepository.findById(id)
        .map(existingPetition -> {
          // Update the necessary fields of existingPetition with updatedPetition
          // Example: existingPetition.setTitle(updatedPetition.getTitle());
          // Save the updated petition
          Petition savedPetition = petitionRepository.save(existingPetition);
          return ResponseEntity.ok(savedPetition);
        })
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  // DELETE endpoint to delete a petition
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deletePetition(@PathVariable String id) {
    if (petitionRepository.existsById(id)) {
      petitionRepository.deleteById(id);
      return ResponseEntity.ok().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
