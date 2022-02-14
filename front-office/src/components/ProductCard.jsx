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
    <MDBCard className="h-100" style={{ maxWidth: "16rem" }}>
      <MDBCardImage src={props.img} alt="..." position="top" fluid />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>{props.text}</MDBCardText>
        <MDBBtn href="#">{props.btn}</MDBBtn>{" "}
      </MDBCardBody>
      <MDBCardFooter>
        <small className="text-muted">{props.price} €/piece</small>
      </MDBCardFooter>
    </MDBCard>
  );
}
