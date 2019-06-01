import React from "react";
import { Navbar, Nav } from 'react-bootstrap';


function Navigation(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">SOS Text</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Sign-Up</Nav.Link>
          <Nav.Link href="#link">Portal</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) 
}

export default Navigation;