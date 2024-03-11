package com.example.petition.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
  @Id
  private String id;
  private String name;
  private String passwordHash; // Make sure to hash passwords in production

  // Constructors, Getters, and Setters

  public User() {
  }

  public User(String name, String passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
  }

  // Getters and Setters
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPasswordHash() {
    return passwordHash;
  }

  public void setPasswordHash(String passwordHash) {
    this.passwordHash = passwordHash;
  }
}
