import React from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import ProductCard from "./components/ProductCard";
import ProductImage from "./components/ProductImage";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white border rounded-5">
        <h1>Cards tests</h1>
        <section className="p-4 text-center w-100">Section1</section>

        <section className="pb-4">
          <ProductImage />
        </section>
        <section className="p-4 text-center w-100">section2</section>
        <section className="pb-4">
          <ProductCard />
        </section>
        <Modal />
      </div>
    </>
  );
}
