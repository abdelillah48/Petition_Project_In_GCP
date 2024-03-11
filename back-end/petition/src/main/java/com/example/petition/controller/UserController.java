// package com.example.petitions.controller;

// import com.example.petitions.model.User;
// import com.example.petitions.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/users")
// public class UserController {

//   @Autowired
//   private UserRepository userRepository;

//   // POST endpoint to add a new user
//   @PostMapping
//   public ResponseEntity<User> addUser(@RequestBody User user) {
//     userRepository.addUser(user);
//     return ResponseEntity.ok(user);
//   }

//   // GET endpoint to retrieve a user by ID
//   @GetMapping("/{id}")
//   public ResponseEntity<User> getUser(@PathVariable String id) {
//     User user = userRepository.findUserById(id);
//     if (user == null) {
//       return ResponseEntity.notFound().build();
//     }
//     return ResponseEntity.ok(user);
//   }

//   // PUT endpoint to update a user's details
//   @PutMapping("/{id}")
//   public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updatedUser) {
//     User user = userRepository.findUserById(id);
//     if (user == null) {
//       return ResponseEntity.notFound().build();
//     }
//     userRepository.updateUser(id, updatedUser);
//     return ResponseEntity.ok(updatedUser);
//   }

//   // DELETE endpoint to delete a user
//   @DeleteMapping("/{id}")
//   public ResponseEntity<Void> deleteUser(@PathVariable String id) {
//     User user = userRepository.findUserById(id);
//     if (user == null) {
//       return ResponseEntity.notFound().build();
//     }
//     userRepository.deleteUser(id);
//     return ResponseEntity.ok().build();
//   }
// }
package com.example.petition.controller;

import com.example.petition.model.User;
import com.example.petition.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  // POST endpoint to add a new user
  @PostMapping
  public ResponseEntity<User> addUser(@RequestBody User user) {
    User savedUser = userRepository.save(user);
    return ResponseEntity.ok(savedUser);
  }

  // GET endpoint to retrieve a user by ID
  @GetMapping("/{id}")
  public ResponseEntity<User> getUser(@PathVariable String id) {
    Optional<User> user = userRepository.findById(id);
    return user.map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  // PUT endpoint to update a user's details
  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updatedUser) {
    return userRepository.findById(id)
        .map(existingUser -> {
          // Update the necessary fields of existingUser with updatedUser
          // Example: existingUser.setName(updatedUser.getName());
          // Save the updated user
          User savedUser = userRepository.save(existingUser);
          return ResponseEntity.ok(savedUser);
        })
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  // DELETE endpoint to delete a user
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable String id) {
    if (userRepository.existsById(id)) {
      userRepository.deleteById(id);
      return ResponseEntity.ok().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
