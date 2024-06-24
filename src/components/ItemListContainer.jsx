import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ products }) => {
  const { id } = useParams();
  const filteredProducts = id ? products.filter(product => product.category === id) : products;

  const [showDescription, setShowDescription] = useState(false);

  console.log('Productos completos:', products);
  console.log('Productos filtrados:', filteredProducts);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="container">
      <h1>{id ? `Productos para ${id}` : 'Lista de Productos'}</h1>
      <div className="item-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="item">
            <img src={product.imagen} alt={product.name} className="item-image" />
            <h2>{product.name}</h2>
            {showDescription ? <p>{product.descripcion}</p> : null}
            <p>Precio: ${parseFloat(product.price.replace(',', '')).toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
            <p>Stock: {product.stock}</p>
            <Link to={`/item/${product.id}`} className="detail-button" onClick={toggleDescription}>
              {showDescription ? 'Ocultar Detalle' : 'Ver Detalle'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
