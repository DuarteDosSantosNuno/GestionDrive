import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <MDBContainer breakpoint="md">
      <BrowserRouter>
        <Navbar />
        <MDBRow>
          <MDBCol center>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Cart" exact component={Cart} />
              <Route path="/Checkout" exact component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          </MDBCol>
        </MDBRow>
      </BrowserRouter>
    </MDBContainer>
  );
}
