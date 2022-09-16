import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const { openCart, closeCart, cartQ } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            about
          </Nav.Link>
        </Nav>
        {cartQ === 0 ? null : (
          <Button style={{ position: "relative" }} onClick={openCart}>
            ShoppingCart
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,-25%)"
              }}
            >
              {cartQ}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default NavBar;
