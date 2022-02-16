import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProductCardCart(props) {
  const { product, onAdd, onRemove } = props;

  return (
    <MDBCard style={{ maxWidth: "95%" }} className="product-card">
      <MDBRow>
        <MDBCol className="col-2">
          <MDBCardImage
            src={product.picture}
            alt="..."
            className="img-fluid p-2"
            style={{ maxHeight: "4.5rem" }}
          />
        </MDBCol>
        <MDBCol className="col-6 d-flex align-items-center justify-content-left">
          <MDBCardTitle>{product.name}</MDBCardTitle>
        </MDBCol>
        <MDBCol className="col-4 d-flex align-items-center justify-content-evenly">
          <a role="button" onClick={() => onRemove(product)}>
            <i className="fas fa-minus productcardcart-button-remove"></i>{" "}
          </a>
          <span>{product.qty}</span>
          <a role="button" onClick={() => onAdd(product)}>
            <i className="fas fa-plus productcardcart-button-add"></i>
          </a>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
