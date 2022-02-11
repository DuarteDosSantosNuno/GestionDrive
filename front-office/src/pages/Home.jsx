import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import ProductCard from "../components/ProductCard";
import butterImg from "../assets/img/tmp/beurre.png";
import yogurtkImg from "../assets/img/tmp/Yaourt.png";
import appleImg from "../assets/img/tmp/Pomme.png";
import pearImg from "../assets/img/tmp/Poire.png";
import juiceImg from "../assets/img/tmp/JusOrange.png";

export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <ProductCard img={butterImg} msg={"Add to Cart"} />
        </MDBCol>
        <MDBCol>
          <ProductCard img={yogurtkImg} msg={"Add to Cart"} />
        </MDBCol>
        <MDBCol>
          <ProductCard img={appleImg} msg={"Add to Cart"} />
        </MDBCol>
        <MDBCol>
          <ProductCard img={pearImg} msg={"Add to Cart"} />
        </MDBCol>
        <MDBCol>
          <ProductCard img={juiceImg} msg={"Add to Cart"} />
        </MDBCol>
      </MDBRow>
    </div>
  );
}
