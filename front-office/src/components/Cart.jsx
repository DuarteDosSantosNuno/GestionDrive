import { MDBBtn } from "mdb-react-ui-kit";
import CartCard from "./CartCard";

export default function Cart(props) {
  return (
    <>
      <aside className="flex align-items-center">
        <h2>Order summary</h2>
        <CartCard />
      </aside>
    </>
  );
}
