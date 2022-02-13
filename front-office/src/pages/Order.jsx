import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";

export default function Order(props) {
  console.log(props);
  return (
    <div>
      <h1>My order</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <ProductCard
            name={props.productsList.name}
            img={props.productsList.picture}
            text={props.productsList.description}
            price={props.productsList.price}
            btn={"Remove from Cart"}
          />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
