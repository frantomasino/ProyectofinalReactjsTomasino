import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ products }) => {
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (id ? product.category === id : true)
  );

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1>{id ? `Productos para ${id}` : 'Lista de Productos'}</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Búsqueda..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
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
