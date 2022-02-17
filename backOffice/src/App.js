import React, { useState, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Home from "./pages/Home";
import Register from "./pages/Users/Register";
import FindAll from "./pages/Users/FindAll";
import RegisterClient from "./pages/Users/RegisterClient";

export default function App() {
  const connectedUser = {};
  useState(connectedUser);

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <main className="body full-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/Users" element={<Users />} /> */}
            <Route exact path="/users" element={<FindAll />} />
            <Route exact path="/register" element={<RegisterClient />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}
