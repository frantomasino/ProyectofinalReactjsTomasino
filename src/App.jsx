import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/data/products.json');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer products={products} />} />
            <Route path="/category/:id" element={<ItemListContainer products={products} />} />
            <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
