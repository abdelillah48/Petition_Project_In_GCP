package com.example.petition.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Petition {
  @Id
  private String id;
  private String title;
  private String description;
  private String createdBy;
  private List<String> signatures;

  // Constructors, Getters, and Setters

  public Petition() {
  }

  public Petition(String title, String description, String createdBy) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
  }

  // Getters and Setters
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }

  public List<String> getSignatures() {
    return signatures;
  }

  public void setSignatures(List<String> signatures) {
    this.signatures = signatures;
  }
}
