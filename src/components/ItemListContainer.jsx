import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { useCart } from '../contexts/CartContext';

const ItemListContainer = ({ products }) => {
  const { id } = useParams();
  const { addItemToCart } = useCart();
  const [showDescription, setShowDescription] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('todos'); // Estado para el filtro de precio

  const filteredProducts = products.filter(product => {
    const productPrice = parseFloat(product.price.replace(',', ''));
    const categoryMatch = id ? product.category === id : true;
    const priceMatch =
      priceFilter === 'todos' ||
      (priceFilter === '1k-100k' && productPrice >= 1000 && productPrice <= 100000) ||
      (priceFilter === '100k-310k' && productPrice > 100000 && productPrice <= 310000);

    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      categoryMatch &&
      priceMatch;
  });

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div className="container">
      <h1>{id ? `Productos para ${id}` : 'Lista de Productos'}</h1>
      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Búsqueda..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-container">
          <select value={priceFilter} onChange={handlePriceChange}>
            <option value="todos">Todos los Precios</option>
            <option value="1k-100k">$1.000 - $100.000</option>
            <option value="100k-310k">$100.000 - $310.000</option>
          </select>
        </div>
      </div>
      <div className="item-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="item">
              <img src={product.imagen} alt={product.name} className="item-image" />
              <h2>{product.name}</h2>
              {showDescription ? <p>{product.descripcion}</p> : null}
              <p>Precio: ${parseFloat(product.price.replace(',', '')).toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
              <p>Stock: {product.stock}</p>
              <Link to={`/item/${product.id}`} className="detail-button" onClick={toggleDescription}>
                {showDescription ? 'Ocultar Detalle' : 'Ver Detalle'}
              </Link>
              <button className="add-to-cart-button" onClick={() => addItemToCart(product, 1)}>Agregar al carrito</button>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
