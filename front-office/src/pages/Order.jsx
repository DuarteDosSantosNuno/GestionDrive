import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCardCart from "../components/ProductCardCart";

export default function Order(props) {
  const [products, setProducts] = useState(props.productsList);

  console.log(props);
  return (
    <MDBContainer d-flex flex-column>
      <h1>My order</h1>
      <MDBRow className="row-cols-1 g-2">
        {products.map((p) => (
          <MDBCol>
            <ProductCardCart key={p.id} product={p} btn={"Remove from Cart"} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
