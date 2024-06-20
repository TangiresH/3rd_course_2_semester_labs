import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../CartContext/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);

    if (cart.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [cart]);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <button className="cart-button" onClick={toggleCartVisibility}>
        <img src="cart-logo.png" alt="Cart" className="cart-logo" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
      {isCartVisible && (
        <div className="cart">
          <button className="close-button" onClick={toggleCartVisibility}>
            &times;
          </button>
          <h2>Кошик</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <span>Кількість: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showNotification && (
        <div className="notification active">
          Товар додано до кошика!
        </div>
      )}
    </>
  );
};

export default Cart;
