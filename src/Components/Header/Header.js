import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { userInfo } = useFirebase();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        toast.success("Signout successful.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Fragrance WMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {userInfo && (
              <Nav>
                <Nav.Link as={NavLink} to="manage-items">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={NavLink} to="add-item">
                  Add Item
                </Nav.Link>
                <Nav.Link as={NavLink} to="my-items">
                  My Items
                </Nav.Link>
              </Nav>
            )}
            <Nav.Link as={NavLink} to="blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            {userInfo ? (
              <Nav>
                <Nav.Link className="signout-btn" onClick={handleSignOut}>
                  Signout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={NavLink} to="login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="register">
                  Register
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  );
};

export default Header;
