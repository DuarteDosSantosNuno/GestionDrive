import { useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  const { productsList, onAdd } = props;

  return (
    <MDBContainer d-flex flex-column h-100>
      <h1>Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        {productsList.map((p) => (
          <MDBCol>
            <ProductCard
              key={p.id}
              product={p}
              btn={"Add to Cart"}
              onAdd={onAdd}
            ></ProductCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
