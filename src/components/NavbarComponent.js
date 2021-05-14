
import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';


function NavbarComponent(props) {
  return (
    <div className="navbarmarginbottom">
      <Navbar className="navbar" fixed="top">
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="brand"
          />
        </Navbar.Brand>
        <Nav className="date-links ml-auto">
          <Nav.Link href="/home">HOME</Nav.Link>
          {/* <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link> */}
          <Nav.Link href="/aboutus">ABOUT</Nav.Link>
          <Nav.Link href="/addactivity">ADD-ACTIVITY</Nav.Link>
          {/* <Nav.Link href="/profile">PROFILE</Nav.Link> */}
          <Nav.Link href="/resources">RESOURCES</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
