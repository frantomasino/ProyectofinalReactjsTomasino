import React from 'react';
import './CartWidget.css';
import cartIcon from '../assets/cart-icon.svg';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" />
    </div>
  );
};

export default CartWidget;
