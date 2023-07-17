import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{}]);
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart,setCart, addToCart, removeFromCart, clearCart,login,setLogin,inputValue,setInputValue,count,setCount}}>
      {children}
    </CartContext.Provider>
  );
};
