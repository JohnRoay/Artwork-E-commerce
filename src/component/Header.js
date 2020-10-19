import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import ArtWork from './ArtWork'
function Header() {
    return (
        <div>
          <Router>
            <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" >
    <span className="fas fa-bars"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link ><Link to="/artwork">New Arts</Link></Nav.Link>
      <Nav.Link eventKey={2} >
        Popular one
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
<Switch>
  <Route path='/artwork'>
    <ArtWork />
  </Route>
</Switch>
</Router>
        </div>
    )
}

export default Header
