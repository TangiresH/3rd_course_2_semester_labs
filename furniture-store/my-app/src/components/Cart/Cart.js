import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../CartContext/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, updateCart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [cart]);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    updateCart(updatedCart); 
  };

  return (
    <>
      <button className="cart-button" onClick={toggleCartVisibility}>
        <img src="cart-logo.png" alt="Cart" className="cart-logo" />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
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
                <span>
                  Кількість: {item.quantity}{' '}
                  <button className="quantity-button" onClick={() => handleIncreaseQuantity(index)}>+</button>{' '}
                  <button className="quantity-button" onClick={() => handleDecreaseQuantity(index)}>-</button>
                </span>
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
