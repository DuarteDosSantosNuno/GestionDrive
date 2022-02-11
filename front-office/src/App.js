import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MDBContainer breakpoint="md">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Order" exact component={Order} />
          <Route path="/Checkout" exact component={Checkout} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MDBContainer>
  );
}
