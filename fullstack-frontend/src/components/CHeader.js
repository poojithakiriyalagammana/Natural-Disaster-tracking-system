import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CHeader = () => {
  return (
    <BootstrapNavbar bg="red" variant="dark" expand="lg" sticky="top" size="sm">
      <Container>
        <Nav className="mx-auto" style={{ fontWeight: "bold" }}>
          <Link
            className="nav-link"
            to="/disasterPage"
            style={{ color: "black" }}
          >
            ← Go Back to Disasters
          </Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};
