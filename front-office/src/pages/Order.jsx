import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCardCart from "../components/ProductCardCart";

export default function Order(props) {
  console.log(props);
  return (
    <MDBContainer d-flex flex-column>
      <h1>My order</h1>
      <MDBRow className="row-cols-1 ">
        <MDBCol>
          <ProductCardCart
            name={props.productsList.name}
            img={props.productsList.picture}
            text={props.productsList.description}
            price={props.productsList.price}
            btn={"Remove from Cart"}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
