import { useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  const [products, setProducts] = useState(props.productsList);

  return (
    <MDBContainer d-flex flex-column h-100>
      <h1>Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {products.map((p) => (
          <MDBCol>
            <ProductCard
              key={p.id}
              product={p}
              btn={"Add to Cart"}
            ></ProductCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
