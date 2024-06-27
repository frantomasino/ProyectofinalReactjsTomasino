import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, clearCart } = useCart();

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-AR', { minimumFractionDigits: 2 });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-view">
        <h1>Tu Carrito esta vacio</h1>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="cart-view">
      <h1>Tu Carrito</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <div className="quantity-controls">
                <span className="quantity-label">Cantidad:</span>
                <button onClick={() => incrementItemQuantity(item.id)}>+</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => decrementItemQuantity(item.id)}>-</button>
              </div>
              <p>Precio Unitario: ${formatPrice(item.price)}</p>
              <p>Subtotal: ${formatPrice(calculateSubtotal(item))}</p>
            </div>
            <button onClick={() => removeItemFromCart(item.id)} className="remove-button">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${formatPrice(calculateTotal())}</h2>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-button">Vaciar Carrito</button>
          <Link to="/checkout"><button className="checkout-button">Pagar</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
