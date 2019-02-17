import React from "react";
import Logo from "../../assets/images/logo.png";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const header = props => (
  <Navbar bg="white" expand="lg">
    <Navbar.Brand href="#home">
      <img src={Logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <NavDropdown title="SHOP" id="basic-nav-dropdown" />
        <NavDropdown title="JOURNAL" id="basic-nav-dropdown" />
        <NavDropdown title="MORE" id="basic-nav-dropdown" />
      </Nav>
      <Nav>
        <NavDropdown title="MY CART" id="basic-nav-dropdown">
          <Link to="/cart">Go to Cart</Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default header;
