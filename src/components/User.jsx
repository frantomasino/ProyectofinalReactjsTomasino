import React, { useState, useEffect } from 'react';
import userIcon from '../assets/UserIcon.svg';  
import './User.css';  

const User = () => {
   const [orderHistory, setOrderHistory] = useState([]);

   useEffect(() => {
     const fetchOrderHistory = () => {
       const mockOrderHistory = [
        { id: 1, date: '2024-07-10', total: 150.50 },
        { id: 2, date: '2024-07-08', total: 75.20 },
        { id: 3, date: '2024-07-05', total: 220.00 }
      ];
      setOrderHistory(mockOrderHistory);
    };

     fetchOrderHistory();
  }, []);  

   
  const addOrderToHistory = (newOrder) => {
    setOrderHistory([...orderHistory, newOrder]);
  };

  return (
    <div className="user-container">
      <h1 className="user-title">Usuario</h1>
      <img src={userIcon} alt="User Icon" className="user-icon" />

      <div className="order-history">
        <h2>Historial de Pedidos</h2>
        <ul>
          {orderHistory.map(order => (
            <li key={order.id}>
              <p>Fecha: {order.date}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
