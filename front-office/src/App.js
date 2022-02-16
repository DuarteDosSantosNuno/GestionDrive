import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Authentification from "./pages/Authentification";
import Footer from "./components/Footer";
import tmpData from "./assets/tmpData";
import Login from "./components/Login";

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
            <Route path="/Login" element={<Login />} />
            <Route path="/Authentification" element={<Authentification />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
