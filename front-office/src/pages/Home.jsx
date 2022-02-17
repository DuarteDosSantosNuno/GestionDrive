import { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";
import { BASE_API_URL } from "./../APIConfig";

export default function Home(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [data, setData] = useState([]);

  function DisplayProducts() {
    useEffect(() => {
      getAllProducts();
    }, []);
  }

  const getAllProducts = async () => {
    const url = BASE_API_URL + "Product";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setData(responseJson);
    }
  };

  let productQty = false;
  function ProductInCart(product) {
    const p = cartItems.find((i) => i.id === product.id);
    if (!p) return product;
    else {
      productQty = true;
      console.log("Qty > 0");
      return p;
    }
  }

  return (
    <MDBContainer className="d-flex flex-column h-100">
      <h1>Products</h1>
      {DisplayProducts()}
      <MDBRow className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data.map((p) => (
          <MDBCol>
            <ProductCard
              key={p.id}
              product={ProductInCart(p)}
              button={productQty}
              onAdd={onAdd}
              onRemove={onRemove}
            ></ProductCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
