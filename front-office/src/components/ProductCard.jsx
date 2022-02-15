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

export default function ProductCard(props) {
  const [product, setProduct] = useState(props.product);
  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBCardImage
          src={product.picture}
          alt="..."
          position="top"
          style={{ maxWidth: "7rem" }}
          className="card-image"
          fluid
        />
      </div>
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <p className="text-muted">{product.price} €/piece</p>
        <div className="d-flex align-items-center justify-content-center">
          <MDBBtn href="#">{props.btn}</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
