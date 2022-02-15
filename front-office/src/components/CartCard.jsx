import React from "react";
import {
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";

export default function CartCard() {
  return (
    <MDBCard className="h-100">
      <MDBCardHeader>
        <MDBCardTitle>Total</MDBCardTitle>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          beatae! Ullam, exercitationem natus nesciunt aut reprehenderit
          inventore. Dolorem, incidunt nostrum!
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn href="#">Proceed to checkout</MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
}
