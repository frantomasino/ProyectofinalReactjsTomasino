import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

import fundaImage from '../assets/funda1.webp';
import accesorioImage from '../assets/acccanilleras1.webp';
import paloImage from '../assets/palofibra5.webp';
import accCubreImage from '../assets/acccubre3.webp';
import funda6Image from '../assets/funda6.webp';
import palofibra1Image from '../assets/palofibra1.webp';
import accMediasImage from '../assets/accmedias4.webp';
import accProtectorImage from '../assets/accprotector5.webp';
import accSilbatoImage from '../assets/accsilbato2.webp';
import accVinchaImage from '../assets/accvincha6.webp';
import palofibra2Image from '../assets/palofibra2.webp';
import palofibra3Image from '../assets/palofibra3.webp';
import palofibra4Image from '../assets/palofibra4.webp';
import palofibra6Image from '../assets/palofibra6.webp';
import palomadera1Image from '../assets/palomadera1.webp';
import palomadera2Image from '../assets/palomadera2.webp';
import funda2Image from '../assets/funda2.webp';
import funda3Image from '../assets/funda3.webp';
import funda4Image from '../assets/funda4.webp';
import funda5Image from '../assets/funda5.webp';
import funda7Image from '../assets/funda7.webp'; 
import funda8Image from '../assets/funda8.webp'; 
import guantes3Image from '../assets/guantes3.webp';
import guantes4Image from '../assets/guantes4.webp'; 


const products = [
  { id: 1, category: 'fundas', name: 'Funda Vlack', price: 194.085, stock: 10, image: fundaImage },
  { id: 2, category: 'accesorios', name: 'Canilleras Vlack', price: 52.350, stock: 20, image: accesorioImage },
  { id: 3, category: 'palos', name: 'Palo Adidas', price: 304.500, stock: 15, image: paloImage },
  { id: 4, category: 'accesorios', name: 'Cubre Grip', price: 20.000, stock: 5, image: accCubreImage },
  { id: 5, category: 'fundas', name: 'Funda Dita', price: 96.800, stock: 8, image: funda6Image },
  { id: 6, category: 'palos', name: 'Palo Malik', price: 121.100, stock: 12, image: palofibra1Image },
  { id: 7, category: 'accesorios', name: 'Medias', price: 8.800, stock: 30,  image: accMediasImage },
  { id: 8, category: 'accesorios', name: 'Protector Bucal', price: 4.600, stock: 25, image: accProtectorImage },
  { id: 9, category: 'accesorios', name: 'Silbato', price: 4.400, stock: 50, image: accSilbatoImage },
  { id: 10, category: 'accesorios', name: 'Vincha', price: 5.500, stock: 40, image: accVinchaImage },
  { id: 11, category: 'palos', name: 'Palo Vlack', price: 304.500, stock: 15, image: palofibra2Image },
  { id: 12, category: 'palos', name: 'Palo Adidas', price: 281.00, stock: 18, image: palofibra3Image },
  { id: 13, category: 'palos', name: 'Palo Tk', price: 291.900, stock: 20, image: palofibra4Image },
  { id: 14, category: 'palos', name: 'Palo Brabo', price: 274.00, stock: 22,  image: palofibra6Image },
  { id: 15, category: 'palos', name: 'Palo Drial', price: 26.300, stock: 10, image: palomadera1Image },
  { id: 16, category: 'palos', name: 'Palo Malik', price: 40.800, stock: 12, image: palomadera2Image },
  { id: 17, category: 'fundas', name: 'Funda Osaka', price: 367.200, stock: 12, image: funda2Image },
  { id: 18, category: 'fundas', name: 'Funda Vlack', price: 114.475, stock: 15,  image: funda3Image },
  { id: 19, category: 'fundas', name: 'Funda Malik', price: 121.000, stock: 20, image: funda4Image },
  { id: 20, category: 'fundas', name: 'Funda Grays', price: 303.600, stock: 18, image: funda5Image },
  { id: 21, category: 'fundas', name: 'Funda Balling', price: 250.100, stock: 12, image: funda7Image }, 
  { id: 22, category: 'fundas', name: 'Funda Adidas', price: 210.500, stock: 15, image: funda8Image },
  { id: 23, category: 'accesorios', name: 'Guante Grays', price: 47.500, stock: 40, image: guantes3Image },
  { id: 24, category: 'accesorios', name: 'Guante Adidas', price: 46.300, stock: 40, image: guantes4Image },

];

const ItemListContainer = () => {
 

  const { id } = useParams();

  const filteredProducts = id ? products.filter(product => product.category === id) : products;

  return (
    <div className="container">
      <h1>{id ? `Productos para ${id}` : 'Lista de Productos'}</h1>
      <div className="item-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.name} className="item-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price.toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(",", ".")}</p>
            <p>Stock: {product.stock}</p>
            <Link to={`/item/${product.id}`} className="detail-button">Ver Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
