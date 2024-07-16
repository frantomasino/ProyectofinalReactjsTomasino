import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartWidget.css';
import cartIcon from '../assets/cart-icon.svg';
import userIcon from '../assets/UserIcon.svg'; // Importa el ícono de usuario

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="widget-container">
      <div className="cart-widget">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
          {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
        </Link>
      </div>
      <div className="user-widget">
        <Link to="/user">
          <img src={userIcon} alt="User" />
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;
