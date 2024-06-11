import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';
import { useCart } from '../contexts/CartContext';



const products = [
  { id: 1, category: 'fundas', name: 'Funda Vlack', price: 194.085, stock: 10, description: 'Funda con múltiples bolsillos para llevar todos tus accesorios. Bolsillo para calzado ventilado.', image: fundaImage },
  { id: 2, category: 'accesorios', name: 'Canilleras Vlack', price: 52.350, stock: 20, description: 'Canilleras anatómicas de alta competencia. El núcleo central en relieve ofrece una máxima protección. Con orificios para ventilación.  ', image: accesorioImage },
  { id: 3, category: 'palos', name: 'Palo Adidas', price: 304.500, stock: 15, description: 'Composición: Carbono 90% - Aramida 5%- Fibra de Vidrio 5%  ', image: paloImage },
  { id: 4, category: 'accesorios', name: 'Cubre Grip', price: 20.000, stock: 5, description: 'Cubrepalos de alta calidad', image: accCubreImage },
  { id: 5, category: 'fundas', name: 'Funda Dita', price: 96.800, stock: 8, description: 'Funda que contiene un espacio para 4-5 palos y varios bolsillos grandes y chicos para guardar todo tipo de producto que quieras llevar a entrenar o jugar', image: funda6Image },
  { id: 6, category: 'palos', name: 'Palo Malik', price: 121.100, stock: 12, description: 'Composición: Carbono 90% - Aramida 5%- Fibra de Vidrio 5%  ', image: palofibra1Image },
  { id: 7, category: 'accesorios', name: 'Medias', price: 8.800, stock: 30, description: 'Medias deportivas', image: accMediasImage },
  { id: 8, category: 'accesorios', name: 'Protector Bucal', price: 4.600, stock: 25, description: 'Protector bucal', image: accProtectorImage },
  { id: 9, category: 'accesorios', name: 'Silbato', price: 4.400, stock: 50, description: 'Silbato deportivo', image: accSilbatoImage },
  { id: 10, category: 'accesorios', name: 'Vincha', price: 5.500, stock: 40, description: 'Vincha deportiva', image: accVinchaImage },
  { id: 11, category: 'palos', name: 'Palo Vlack', price: 304.500, stock: 15, description: 'Descripción del nuevo palo 2', image: palofibra2Image },
  { id: 12, category: 'palos', name: 'Palo Adidas ', price: 281.00, stock: 18, description: 'Descripción del nuevo palo 3', image: palofibra3Image },
  { id: 13, category: 'palos', name: 'Palo Tk ', price: 291.900, stock: 20, description: 'Descripción del nuevo palo 4', image: palofibra4Image },
  { id: 14, category: 'palos', name: 'Palo Brabo ', price: 274.00, stock: 22, description: 'Descripción del nuevo palo 5', image: palofibra6Image },
  { id: 15, category: 'palos', name: 'Palo Drial ', price: 26.300, stock: 10, description: 'Descripción del palo de madera 1', image: palomadera1Image },
  { id: 16, category: 'palos', name: 'Palo Malik', price: 40.800, stock: 12, description: 'Descripción del palo de madera 2', image: palomadera2Image },
  { id: 17, category: 'fundas', name: 'Funda Osaka', price: 367.200, stock: 12, description: 'Descripción de la nueva funda 2', image: funda2Image },
  { id: 18, category: 'fundas', name: 'Funda Vlack', price: 114.475, stock: 15, description: 'Descripción de la nueva funda 3', image: funda3Image },
  { id: 19, category: 'fundas', name: 'Funda Malik', price: 121.000, stock: 20, description: 'Descripción de la nueva funda 4', image: funda4Image },
  { id: 20, category: 'fundas', name: 'Funda Grays', price: 303.600, stock: 18, description: 'Descripción de la nueva funda 5', image: funda5Image },
  { id: 21, category: 'fundas', name: 'Funda Balling', price: 250.100, stock: 12, description: 'Descripción de la nueva funda 6', image: funda7Image },
  { id: 22, category: 'fundas', name: 'Funda Adidas', price: 210.500, stock: 15, description: 'Descripción de la nueva funda 7', image: funda8Image},
  { id: 23, category: 'accesorios', name: 'Guante Grays', price: 47.500, stock: 40, description: 'Vincha deportiva', image: guantes3Image },
  { id: 24, category: 'accesorios', name: 'Guante Adidas', price: 46.300, stock: 40, description: 'Descripción de la nueva funda 7', image: guantes4Image },
]

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
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
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
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