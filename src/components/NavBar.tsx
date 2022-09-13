import React from 'react';
import { Button, Container,Nav, Navbar as NavbarBs} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavbarBs className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to ="/" as={NavLink}>
            home
          </Nav.Link>
          <Nav.Link to ="/store" as={NavLink}>
            store
          </Nav.Link>
          <Nav.Link to ="/about" as={NavLink}>
            about
          </Nav.Link>
        </Nav>
        <Button>ShoppingCart</Button>
      </Container>
    </NavbarBs>
  );
};

export default NavBar;