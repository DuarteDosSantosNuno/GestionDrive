import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCardCart from "../components/ProductCardCart";
import CartCard from "../components/CartCard";

export default function Order(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <MDBContainer d-flex flex-column>
      <h1>My order</h1>
      <MDBRow>
        <MDBCol className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
          <MDBRow className="g-2">
            {cartItems.map((c) => (
              <MDBCol className="col-12">
                <ProductCardCart
                  key={c.id}
                  product={c}
                  onRemove={onRemove}
                  onAdd={onAdd}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>
        <MDBCol className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
          <MDBRow>
            <MDBCol className="col-12 g-2">
              <CartCard products={cartItems} />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
