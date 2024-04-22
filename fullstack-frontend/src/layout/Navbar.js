import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // Define an array of paths where you don't want to show the "Disasters" link
  const hiddenPaths = ["/", "/login", "/register", "/disasterPage"];

  // Check if the current path is in the hiddenPaths array
  const hideDisastersLink = hiddenPaths.includes(location.pathname);

  // Define an array of paths where you want to show the login button
  const loginButtonPaths = ["/"];

  // Check if the current path is in the loginButtonPaths array
  const showLoginButton = loginButtonPaths.includes(location.pathname);

  // Define an array of paths where you want to show the logout button
  const logoutButtonPaths = [
    "/display",
    "/disasterPage",
    "/updateDisaster",
    "/disasterAdmin",
  ];

  // Check if the current path is in the logoutButtonPaths array
  const showLogoutButton = logoutButtonPaths.includes(location.pathname);

  // Define an array of paths where you want to show additional links
  const additionalLinksPaths = [
    "/display",
    "/disasterAdmin",
    "/editDisaster/{id}",
    "/edituser/:id",
  ];

  // Check if the current path is in the additionalLinksPaths array
  const showAdditionalLinks = additionalLinksPaths.some((path) =>
    typeof path === "string"
      ? path === location.pathname
      : path.test(location.pathname)
  );

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BootstrapNavbar.Brand href="#">
          Natural Disaster Tracker
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse
          id="navbar-nav"
          className="justify-content-center"
        >
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {!hideDisastersLink && (
              <Link className="nav-link" to="/disasterPage">
                Disasters
              </Link>
            )}
          </Nav>
          {showLoginButton && (
            <Link to="/login">
              <Button className="btn btn-primary" variant="outline-light">
                Login
              </Button>
            </Link>
          )}
          {showAdditionalLinks && (
            <Nav className="ml-auto">
              <Link className="nav-link" to="/display">
                User Admin
              </Link>
              <Link className="nav-link" to="/disasterAdmin">
                Disaster Admin
              </Link>
            </Nav>
          )}
          {showLogoutButton && (
            <Link to="/login">
              <Button className="btn btn-danger" variant="outline-light">
                Logout
              </Button>
            </Link>
          )}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
