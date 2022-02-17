import React from "react";
import {
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
} from "mdb-react-ui-kit";

export default function CartCard(props) {
  const { products } = props;

  function TotalOrder(products) {
    const totalTmp = products.map(
      (p) => parseInt(p.qty) * parseFloat(p.units[0].prix)
    );
    const total = totalTmp.reduce((prev, curr) => prev + curr, 0);
    return total.toFixed(2);
  }

  return (
    <MDBCard className="h-100">
      <MDBCardHeader>
        <MDBCardTitle>Order total</MDBCardTitle>
      </MDBCardHeader>
      <MDBCardBody>
        <div>
          {products.length === 0 ? (
            <h5 className="p-4 text-warning">Empty cart</h5>
          ) : (
            <div className="productcardcart-total">
              <ul>
                {products.map((p) => (
                  <li key={p.id}>
                    <span>
                      {p.qty} x {p.units[0].prix}€
                    </span>
                  </li>
                ))}
              </ul>
              <h5 className="productcardcart-total">{TotalOrder(products)}€</h5>
            </div>
          )}
        </div>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn href="/Checkout">Proceed to checkout</MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
}
