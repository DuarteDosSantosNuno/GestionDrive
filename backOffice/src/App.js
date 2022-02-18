import React, { useState, Fragment, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import FindAll from "./pages/Users/FindAll";
import RegisterClient from "./pages/Users/RegisterClient";
import Home from "./pages/Home";
import Products from "./pages/Products";
//import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Navbar from "./pages/Navbar";
import Login from "./pages/Users/Login";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <main className="body full-height">
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/Users" element={<Users />} /> */}
              <Route exact path="/users" element={<FindAll />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<RegisterClient />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/accueil" />} />
              <Route index exact path="/accueil" element={<Home />} />
              <Route exact path="/produits" element={<Products />} />
            </Routes>
          </main>
        </BrowserRouter>
        <Footer />
      </Fragment>
    );
  }
}
