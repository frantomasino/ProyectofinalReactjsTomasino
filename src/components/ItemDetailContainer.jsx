import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';
import { useCart } from '../contexts/CartContext';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const onAdd = (count) => {
    setQuantity(count);
    addItemToCart(product, count);
    console.log(`Added ${count} of ${product.name} to cart`);
  };

  if (!product) {
    return <div className="container"><h1>Producto no encontrado</h1></div>;
  }

  return (
    <div className="container item-detail">
      <div className="card">
        <h1>{product.name}</h1>
        <img src={product.imagen} alt={product.name} />
        <p>{product.descripcion}</p>
        <p className={`price ${product.stock === 0 ? 'out-of-stock' : 'stock'}`}>
          Precio: ${product.price.toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(",", ".")}
        </p>
        {product.stock > 0 ? (
          <div>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            <p>Stock disponible: {product.stock}</p>
          </div>
        ) : (
          <p className="out-of-stock">Sin stock disponible</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
