import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import * as URL from "../APIConfig";

export default function UserCard(props) {
  const { user } = props;
  
  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <MDBCardBody>
        <MDBCardTitle>{user.email}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}
