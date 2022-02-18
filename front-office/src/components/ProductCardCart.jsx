import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BASE_IMAGE_URL } from "./../APIConfig";

export default function ProductCardCart(props) {
  const { product, onAdd, onRemove } = props;

  let pathImage;
  if (product.productImages.length === 0) pathImage = "./tmp/img/noimage.png";
  else pathImage = BASE_IMAGE_URL + product.productImages[0].src;

  return (
    <MDBCard className="product-card">
      <MDBRow>
        <MDBCol className="col-2">
          <MDBCardImage
            src={pathImage}
            alt="..."
            className=" p-2"
            style={{ maxHeight: "4rem" }}
          />
        </MDBCol>
        <MDBCol className="col-6 d-flex align-items-center justify-content-left">
          <h5 className="product-card-name">{product.nom}</h5>
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
