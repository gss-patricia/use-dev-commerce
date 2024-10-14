// CartContext.tsx

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/product";
import { StorageService, createLocalStorageService } from "../hooks/useStorage";

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({
  children,
  storageService = createLocalStorageService(),
}: {
  children: React.ReactNode;
  storageService?: StorageService;
}) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const storedItems = storageService.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    storageService.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems, storageService]);

  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (!existingProduct) {
      setCartItems((prevItems) => [...prevItems, product]);
    } else {
      alert("Este produto já está no carrinho!");
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
