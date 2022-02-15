import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BASE_IMAGE_URL } from "./../APIConfig";

export default function ProductCard(props) {
  const { product, onAdd } = props;
  
  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBCardImage
          src={`${BASE_IMAGE_URL}${product.productImages[0].src}`}
          alt="..."
          position="top"
          style={{ maxWidth: "7rem" }}
          className="card-image"
          fluid
        />
      </div>
      <MDBCardBody>
        <MDBCardTitle>{product.nom}</MDBCardTitle>
        <p className="text-muted">{product.units[0].prix} €/piece</p>
        <div className="d-flex align-items-center justify-content-center">
          <MDBBtn onClick={onAdd}>{props.btn}</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
