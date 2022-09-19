import React from 'react';
import { Offcanvas , Stack} from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from '../components/CartItem'

type openNav = {
  isOpen:boolean
}

const ShoppingCart = ({ isOpen }:openNav) => {

    const { closeCart , cartItem } = useShoppingCart();
    return (
    <Offcanvas placement="end" onHide={closeCart} show={isOpen}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>11</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map(item =>
            <CartItem key={item.id} {...item}/>
            )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;