import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Profile from './Profile'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function NavbarComponent() {
  const user = useContext(AuthContext);
  console.log("user ", user);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">instagram photos gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#link">Settings</Nav.Link> */}
            <NavDropdown title="settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Profile /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
