import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';
import Products from './components/Products';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Products setProducts={setProducts} />
        <Routes>
          <Route path="/" element={<ItemListContainer products={products} />} />
          <Route path="/category/:id" element={<ItemListContainer products={products} />} />
          <Route path="/item/:id" element={<ItemDetailContainer products={products} />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
