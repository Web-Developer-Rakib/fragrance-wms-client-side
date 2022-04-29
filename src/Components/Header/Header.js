import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home">Fragrance WMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="manage-items">
              Manage Items
            </Nav.Link>
            <Nav.Link as={NavLink} to="add-item">
              Add Item
            </Nav.Link>
            <Nav.Link as={NavLink} to="my-items">
              My Items
            </Nav.Link>
            <Nav.Link as={NavLink} to="blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
