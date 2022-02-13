import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
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
    <MDBContainer breakpoint="md">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home productsList={products} />} />
            <Route
              path="/Order"
              element={<Order productsList={products[5]} />}
            />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </MDBContainer>
  );
}
