import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreatePetitionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("add endpoint link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create petition");
        }
        return response.json();
      })
      .then((data) => {
        alert("Petition created successfully!");
        console.log("Petition created:", data);
        // Handle success
      })
      .catch((error) => {
        alert("Failed to create petition: " + error.message);
        console.error("Create petition error:", error);
      });
  };

  // Define your styles here
  const formStyle = {
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    maxWidth: "1000px",
    margin: "100px auto",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  };

  const inputStyle = {
    marginBottom: "25px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <Form.Group>
        <Form.Label style={labelStyle}>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter petition title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label style={labelStyle}>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={20}
          placeholder="Petition description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
      </Form.Group>
      <Button type="submit" style={buttonStyle}>
        Create Petition
      </Button>
    </Form>
  );
};

export default CreatePetitionForm;
