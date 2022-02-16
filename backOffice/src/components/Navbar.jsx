import React from "react";
import * as MDB from "mdb-react-ui-kit";

export default function Navbar(props) {

  return (
    <MDB.MDBNavbar expand="lg" sticky light bgColor="light">
      <MDB.MDBContainer fluid>
        {/* <MDB.MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDB.MDBIcon icon="bars" fas />
        </MDB.MDBNavbarToggler> */}

        <MDB.MDBNavbarBrand href="/" className="brand-main">
          MomoDrive
        </MDB.MDBNavbarBrand>

        <MDB.MDBNavbarBrand href="/Users" className="brand-main">
          Users
        </MDB.MDBNavbarBrand>

      </MDB.MDBContainer>
    </MDB.MDBNavbar>
  );
}
