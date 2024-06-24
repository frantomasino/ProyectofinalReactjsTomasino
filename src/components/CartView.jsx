import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeItemFromCart, clearCart } = useCart();

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
            <img src={item.imagen} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${formatPrice(item.price)}</p>
              <p>Subtotal: ${formatPrice(calculateSubtotal(item))}</p>
            </div>
            <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${formatPrice(calculateTotal())}</h2>
        <div className="cart-actions">
          <button onClick={clearCart}>Vaciar Carrito</button>
          <Link to="/checkout"><button>Pagar</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
