import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  return (
    <MDBContainer>
      <h1>Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <ProductCard
            name={props.productsList[0].name}
            img={props.productsList[0].picture}
            text={props.productsList[0].description}
            price={props.productsList[0].price}
            btn={"Add to Cart"}
          />
        </MDBCol>
        <MDBCol>
          <ProductCard
            name={props.productsList[2].name}
            img={props.productsList[2].picture}
            text={props.productsList[2].description}
            price={props.productsList[2].price}
            btn={"Add to Cart"}
          />
        </MDBCol>
        <MDBCol>
          <ProductCard
            name={props.productsList[3].name}
            img={props.productsList[3].picture}
            text={props.productsList[3].description}
            price={props.productsList[3].price}
            btn={"Add to Cart"}
          />
        </MDBCol>
        <MDBCol>
          <ProductCard
            name={props.productsList[4].name}
            img={props.productsList[4].picture}
            text={props.productsList[4].description}
            price={props.productsList[4].price}
            btn={"Add to Cart"}
          />
        </MDBCol>
        <MDBCol>
          <ProductCard
            name={props.productsList[5].name}
            img={props.productsList[5].picture}
            text={props.productsList[5].description}
            price={props.productsList[5].price}
            btn={"Add to Cart"}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
