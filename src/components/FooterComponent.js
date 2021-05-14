import React from "react";
import { Nav } from 'react-bootstrap';


const Footer = () => (
  <footer className="footer">

    <Nav.Link href="https://www.codeplatoon.org/" className="footer-inline"><img
      src="/images/logo-white.png"
      className="platoon"
      alt="Code-Platoon"
    />
    </Nav.Link>
    <Nav.Link className="footer-inline" href="/aboutus">About</Nav.Link>
    <div className="footer-inline">© 2021 D8Nite</div>

  </footer>
);

export default Footer;