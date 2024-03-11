import React from "react";
import { Card, Button } from "react-bootstrap";

const PetitionList = () => {
  // Placeholder data
  const petitions = [
    { id: 1, title: "Sample Petition", description: "Description here..." },
    { id: 2, title: "Sample Petition", description: "Description here..." },
    { id: 3, title: "Sample Petition", description: "Description here..." },
    // Add more petitions if needed
  ];

  // Define your styles here
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "1500px",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
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
    <div style={containerStyle}>
      {petitions.map((petition) => (
        <Card key={petition.id} style={cardStyle}>
          <Card.Body>
            <Card.Title>{petition.title}</Card.Title>
            <Card.Text>{petition.description}</Card.Text>
            <Button style={buttonStyle}>View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PetitionList;
