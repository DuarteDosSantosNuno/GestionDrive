import React from "react";
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
  return (
    <MDBCard className="h-100" style={{ maxWidth: "22rem" }}>
      <MDBCardImage src={props.img} alt="..." position="top" />
      <MDBCardBody>
        <MDBCardTitle>Product name</MDBCardTitle>
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem
          natus quae quaerat. Quasi doloribus saepe repellat alias tempore
          neque?
        </MDBCardText>
        <MDBBtn href="#">{props.msg}</MDBBtn>{" "}
      </MDBCardBody>
      <MDBCardFooter>
        <small className="text-muted">Something useful goes here</small>
      </MDBCardFooter>
    </MDBCard>
  );
}
