import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, clearCart } = useCart();
  const [confirmDeleteItemId, setConfirmDeleteItemId] = React.useState(null);

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-AR', { minimumFractionDigits: 2 });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const confirmDelete = (itemId) => {
    setConfirmDeleteItemId(itemId);
  };

  const cancelDelete = () => {
    setConfirmDeleteItemId(null);
  };

  const handleDelete = (itemId) => {
    removeItemFromCart(itemId);
    setConfirmDeleteItemId(null);
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
      <Link to="/"><button className="continue-shopping-button">Seguir comprando</button></Link>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imagen} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <div className="quantity-controls">
                <span className="quantity-label">Cantidad:</span>
                <button onClick={() => decrementItemQuantity(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => incrementItemQuantity(item.id)}>+</button>
              </div>
              <p>Precio Unitario: ${formatPrice(item.price)}</p>
              <p>Subtotal: ${formatPrice(calculateSubtotal(item))}</p>
            </div>
            <button onClick={() => confirmDelete(item.id)} className="remove-button">Eliminar</button>
            {confirmDeleteItemId === item.id && (
              <div className="confirm-delete-message">
                ¿Estas seguro que deseas eliminar este producto?
                <button onClick={() => handleDelete(item.id)}>Si</button>
                <button onClick={cancelDelete}>No</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${formatPrice(calculateTotal())}</h2>
        <div className="cart-actions">
          <button onClick={clearCart} className="clear-button">Vaciar Carrito</button>
          <Link to="/checkout" className="checkout-button">Pagar</Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
