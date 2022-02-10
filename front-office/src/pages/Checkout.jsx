import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Modal from "../components/Modal";

export default function Checkout() {
  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBRow>
          <MDBCol center>
            <h1>Checkout</h1>
            <Modal />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
