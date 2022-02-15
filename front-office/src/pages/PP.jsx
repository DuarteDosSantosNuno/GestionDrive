import { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";
import { BASE_API_URL } from "./../APIConfig";

export default function PP() {
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
  
  return (
    <MDBContainer d-flex flex-column h-100>
      <h1>Products</h1>
      {DisplayProducts()}
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        {data.map((p) => (
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
