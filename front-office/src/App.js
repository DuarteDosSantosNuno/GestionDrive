import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import tmpData from "./assets/tmpData";

export default function App() {
  const { products } = tmpData;
  const [cartItems, setCartItems] = useState(products);

  const onAddProduct = (product) => {
    const exist = cartItems.find((p) => p.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((i) =>
          i.id === product.id ? { ...exist, qty: exist.qty + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar nbCartItems={cartItems.length} />
        <main className="body gradient-custom-frontoffice full-height">
          <Routes>
            <Route
              path="/"
              element={<Home productsList={products} onAdd={onAddProduct} />}
            />
            <Route
              path="/Order"
              element={<Order cartItems={cartItems} onAdd={onAddProduct} />}
            />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
