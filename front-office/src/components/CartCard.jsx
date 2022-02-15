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

export default function CartCard(props) {
  const { products } = props;
  return (
    <MDBCard className="h-100">
      <MDBCardHeader>
        <MDBCardTitle>Total</MDBCardTitle>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>
          {products.length === 0 ? (
            <h3 className="p-4 text-warning">Empty cart</h3>
          ) : (
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              beatae! Ullam, exercitationem natus nesciunt aut reprehenderit
              inventore. Dolorem, incidunt nostrum!
            </span>
          )}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn href="/Checkout">Proceed to checkout</MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
}
