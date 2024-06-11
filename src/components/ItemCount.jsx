import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={handleDecrement} disabled={count <= 1}>-</button>
        <span className="quantity">{count}</span>
        <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      </div>
      <button className="add-to-cart" onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;