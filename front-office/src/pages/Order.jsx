import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";
import milkImg from "../assets/img/tmp/Lait.png";

export default function Order() {
  return (
    <div>
      <h1>My order</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <ProductCard img={milkImg} msg="Remove" />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
