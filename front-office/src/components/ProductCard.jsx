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
  let pathImage;

  if(product.productImages.length === 0)
    pathImage = "./tmp/img/noimage.png";
  else
    pathImage = BASE_IMAGE_URL + product.productImages[0].src;
  
  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBCardImage 
          //src={a ? `${BASE_IMAGE_URL}${product.productImages[0].src}` : `${img}`}
          src={pathImage}
          alt="..."
          position="top"
          style={{ maxWidth: "7rem" }}
          className="card-image"
          fluid
        />
      </div>
      <MDBCardBody>
        <MDBCardTitle>{product.nom}</MDBCardTitle>
        <p className="text-muted">{product.units[0].prix} €/{product.units[0].unite}</p>
        <div className="d-flex align-items-center justify-content-center">
          <MDBBtn onClick={onAdd}>{props.btn}</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
