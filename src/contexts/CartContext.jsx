import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { doc, updateDoc, increment } from 'firebase/firestore';
import db from '../FirebaseConfig';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000
    });
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementItemQuantity = (itemId) => {
    const updatedCart = cart.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
  };

  const decrementItemQuantity = (itemId) => {
    const updatedCart = cart.map(cartItem =>
      cartItem.id === itemId && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCart(updatedCart);
  };

  const updateStock = async (itemId, quantity) => {
    try {
      const itemRef = doc(db, 'products', itemId);
      await updateDoc(itemRef, {
        stock: increment(-quantity)
      });
      console.log(`Stock actualizado para el producto ${itemId} en ${quantity}`);
    } catch (error) {
      console.error("Error al actualizar el stock: ", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, clearCart, updateStock }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
