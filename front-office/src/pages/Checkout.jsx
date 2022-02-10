import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Modal from "../components/Modal";

export default function Checkout() {
  return (
    <>
      <MDBContainer breakpoint="md">
        <MDBRow>
          <MDBCol center>
            <Modal />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
