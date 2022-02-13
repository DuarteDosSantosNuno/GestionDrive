import React, { useState } from "react";
import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";

export default function CartCounter(props) {
  const [count, setCount] = useState(props.counter);

  return (
    <>
      {count > 0 ? (
        <MDBBadge pill color="danger">
          {count}
        </MDBBadge>
      ) : (
        <></>
      )}
      <span>
        <MDBIcon fas icon="shopping-cart"></MDBIcon>
      </span>
    </>
  );
}
