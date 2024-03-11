import React from "react";
import { Card, Button } from "react-bootstrap";

const PetitionDetail = ({ petition }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{petition.title}</Card.Title>
        <Card.Text>{petition.description}</Card.Text>
        <Button variant="success">Sign Petition</Button>
      </Card.Body>
    </Card>
  );
};

export default PetitionDetail;
