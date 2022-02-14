import React from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProductCardCart(props) {
  return (
    <MDBCard style={{ maxWidth: "95%" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src={props.img}
            alt="..."
            className="img-fluid rounded-circle"
            style={{ maxHeight: "5rem" }}
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBBtn href="#">{props.btn}</MDBBtn>{" "}
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
