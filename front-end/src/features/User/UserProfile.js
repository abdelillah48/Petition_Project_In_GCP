import React from "react";
import { ListGroup } from "react-bootstrap";

const UserProfile = ({ user }) => {
  // Placeholder data
  const signedPetitions = user.signedPetitions || [];

  return (
    <ListGroup>
      {signedPetitions.map((petition) => (
        <ListGroup.Item key={petition.id}>{petition.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UserProfile;
