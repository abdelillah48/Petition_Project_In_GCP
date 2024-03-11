import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const headerStyle = {
    background: "#fff",
    padding: "1em",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  };

  const liStyle = {
    padding: "0 1em",
  };

  const buttonStyle = {
    padding: "0.5em 1em",
    marginLeft: "1em",
  };

  return (
    <Navbar bg="light" expand="lg" style={headerStyle}>
      <Navbar.Brand as={Link} to="/" style={liStyle}>
        PETITIONER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={navStyle}>
        <Nav className="mr-auto" style={ulStyle}>
          <Nav.Link as={Link} to="/" style={liStyle}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/" style={liStyle}>
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/top-petition" style={liStyle}>
            Top Petitions
          </Nav.Link>
          <Nav.Link as={Link} to="/create-petition" style={liStyle}>
            Create Petition
          </Nav.Link>
        </Nav>
        <Nav style={ulStyle}>
          <Nav.Link as={Link} to="/login" style={buttonStyle}>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register" style={buttonStyle}>
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
