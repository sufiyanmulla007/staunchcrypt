import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Headars = () => {
  return (
   <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">
          <Nav.Link href="#home">Home</Nav.Link>
          </NavLink>
          <NavLink to="/Dishbord">
            <Nav.Link href="#features">Disbord</Nav.Link>
            </NavLink>
            <NavLink to="/Login">
            <Nav.Link href="#pricing">Login</Nav.Link>
            </NavLink>
            <NavLink to="/Apitoolkit">
            <Nav.Link href="#pricing">ApiToolkit</Nav.Link>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
   </>
  );
};

export default Headars;


