import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCardCart from "../components/ProductCardCart";
import Cart from "../components/Cart";

export default function Order(props) {
  const [products, setProducts] = useState(props.productsList);

  console.log(props);
  return (
    <MDBContainer d-flex flex-column>
      <h1>My order</h1>
      <MDBRow>
        <MDBCol className="col-9">
          <MDBRow className="row-cols-1 g-2">
            {products.map((p) => (
              <MDBCol>
                <ProductCardCart
                  key={p.id}
                  product={p}
                  btn={"Remove from Cart"}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>
        <MDBCol className="col-3">
          <Cart />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
