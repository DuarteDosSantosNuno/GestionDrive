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
  const [product, setProduct] = useState(props.product);

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
        <MDBCol className="col-4 d-flex align-items-center justify-content-center">
          <MDBBtn href="#">{props.btn}</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
