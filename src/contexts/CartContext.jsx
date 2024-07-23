import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { doc, updateDoc, increment } from 'firebase/firestore';
import db from '../FirebaseConfig';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);  // Estado para almacenar el historial de pedidos

  const addItemToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > item.stock) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `No puedes agregar más de ${item.stock} unidades de este producto`,
          showConfirmButton: false,
          timer: 1000
        });
        return;
      }
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      setCart(updatedCart);
    } else {
      if (quantity > item.stock) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `No puedes agregar más de ${item.stock} unidades de este producto`,
          showConfirmButton: false,
          timer: 1000
        });
        return;
      }
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
    const updatedCart = cart.map(cartItem => {
      if (cartItem.id === itemId) {
        if (cartItem.quantity >= cartItem.stock) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `No puedes agregar mas de ${cartItem.stock} unidades de este producto`,
            showConfirmButton: false,
            timer: 1000
          });
          return cartItem;
        }
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
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
    } catch (error) {
      console.error("Error al actualizar el stock: ", error);
    }
  };

  const addOrderToHistory = (newOrder) => {
    setOrderHistory([...orderHistory, newOrder]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, clearCart, updateStock, orderHistory, addOrderToHistory }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
