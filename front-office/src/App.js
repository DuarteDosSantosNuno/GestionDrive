import React from "react";
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
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="body gradient-custom-frontoffice full-height">
          <Routes>
            <Route path="/" element={<Home productsList={products} />} />
            <Route path="/Order" element={<Order productsList={products} />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
