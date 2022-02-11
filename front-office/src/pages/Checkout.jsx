import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Modal from "../components/Modal";

export default function Checkout() {
  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBRow>
          <MDBCol center>
            <h1>Pickup time</h1>
            <p>Set a pickup time then proceed to checkout</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol center>
            <h1>Checkout</h1>
            <Modal bodyText="OK to proceed to checkout, cancel to go back to your cart" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
