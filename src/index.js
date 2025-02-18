import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from "../src/assets/components/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
