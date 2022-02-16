import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import CartCard from "./CartCard";

export default function Cart(props) {
  const { products } = props;
  return (
    <>
      <div className="flex align-items-center">
        <h2>Order summary</h2>
        <CartCard products={products} />
      </div>
    </>
  );
}
