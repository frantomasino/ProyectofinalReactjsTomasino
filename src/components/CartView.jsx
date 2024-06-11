import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-view">
        <h1>Tu Carrito esta vacío</h1>
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
        <img src={item.image} alt={item.name} />
        <div className="cart-item-details">
          <h2>{item.name}</h2>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price.toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(",", ".")}</p>
          <p>Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(",", ".")}</p>
        </div>
        <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
      </div>
    ))}
  </div>
  <div className="cart-summary">
    <h2>Total: ${calculateTotal().toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(",", ".")}</h2>
    <div className="cart-actions">
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button>Pagar</button>
    </div>
  </div>
</div>
  );
};

export default CartView;
