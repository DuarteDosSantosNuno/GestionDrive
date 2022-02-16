import React, { useState, useEffect } from "react";
import { MDBBadge, MDBIcon } from "mdb-react-ui-kit";

export default function CartCounter(props) {
  const { nbCartItems } = props;

  return (
    <>
      {nbCartItems > 0 ? (
        <MDBBadge pill color="danger">
          {nbCartItems}
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
