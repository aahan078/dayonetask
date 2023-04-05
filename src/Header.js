import "../src/Header.css"

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import React from 'react'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">IndiaHikes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Treks</Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Services1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Services2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">services3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Services4
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Services5
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Rent Gears</Nav.Link>
          <Nav.Link eventKey={3} href="#memes">
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
