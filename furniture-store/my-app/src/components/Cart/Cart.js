import React, { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Кошик</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
