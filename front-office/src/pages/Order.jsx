import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCardCart from "../components/ProductCardCart";
import Cart from "../components/Cart";

export default function Order(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <MDBContainer d-flex flex-column>
      <h1>My order</h1>
      <MDBRow>
        <MDBCol className="col-9">
          <MDBRow className="row-cols-1 g-2">
            {cartItems.map((c) => (
              <MDBCol>
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
        <MDBCol className="col-3">
          <Cart products={cartItems} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
