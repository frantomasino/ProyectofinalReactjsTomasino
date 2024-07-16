import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { clearCart, updateStock, cart } = useCart();
  const [orderID, setOrderID] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (event) => {
    event.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrderID = Math.floor(Math.random() * 1000000);
      setOrderID(generatedOrderID);

      // Aquí guardas el pedido en el historial (simulado)
      const newOrder = {
        id: generatedOrderID,
        date: new Date().toLocaleDateString(),
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
      };

      // Simplemente imprime el pedido nuevo, deberás guardarlo en alguna base de datos o almacenamiento persistente
      console.log('Nuevo pedido:', newOrder);

      cart.forEach(item => {
        updateStock(item.id, 1); 
      });

      clearCart();
      setIsProcessing(false);
    }, 1000);
  };

  const handleBackToHome = () => {
    window.location.href = '/';  
  };

  return (
    <div className="checkout-container">
      {!orderID ? (
        <div>
          {isProcessing ? (
            <p className="processing-message">Se está generando su orden...</p>
          ) : (
            <div className="form-container">
              <form onSubmit={handleCheckout}>
                <div>
                  <label>Nombre:</label>
                  <input type="text" required />
                </div>
                <div>
                  <label>Teléfono:</label>
                  <input type="number" required />
                </div>
                <div>
                  <label>Email:</label>
                  <input type="email" required />
                </div>
                <button type="submit">Finalizar</button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="order-confirmation">
          <h1>Gracias por tu compra</h1>
          <p>Tu número de guía: <strong>{orderID}</strong></p>
          <button onClick={handleBackToHome} className="home-button">Volver al inicio</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
