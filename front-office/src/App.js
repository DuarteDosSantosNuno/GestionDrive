import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import tmpData from "./assets/tmpData";

export default function App() {
  //const { products } = tmpData;
  const [cartItems, setCartItems] = useState([]);
  const [nbCartItems, setNbCartItems] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("MomoDrive.cart");
    const cartItems = localStorage.getItem("MomoDrive.cartItems");
    if (cart != null) {
      setCartItems(JSON.parse(cart));
      const tmpItems = JSON.parse(cartItems);
      setNbCartItems(parseInt(cartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("MomoDrive.cart", JSON.stringify(cartItems));
    localStorage.setItem("MomoDrive.cartItems", JSON.stringify(nbCartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((p) => p.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((p) =>
          p.id === product.id ? { ...exist, qty: exist.qty + 1 } : p
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setNbCartItems(nbCartItems + 1);
  };

  const onRemove = (product) => {
    const exist = cartItems.find((p) => p.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((p) => p.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((p) =>
          p.id === product.id ? { ...exist, qty: exist.qty - 1 } : p
        )
      );
    }
    setNbCartItems(nbCartItems - 1);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar nbCartItems={nbCartItems} />
        <main className="body gradient-custom-frontoffice full-height">
          <Routes>
            <Route
              path="/"
              element={
                <Home cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
              }
            />
            <Route
              path="/Order"
              element={
                <Order
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              }
            />
            <Route
              path="/Checkout"
              element={<Checkout cartItems={cartItems} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
