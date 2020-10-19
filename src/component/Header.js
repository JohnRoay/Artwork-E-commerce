import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" >
    <span className="fas fa-bars"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="#deets">New Arts</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Popular one
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
        </div>
    )
}

export default Header
