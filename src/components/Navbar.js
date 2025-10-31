import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">AutoWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Tính năng</Nav.Link>
            <Nav.Link href="#specs">Thông số</Nav.Link>
            <Nav.Link href="#pricing">Bảng giá</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
