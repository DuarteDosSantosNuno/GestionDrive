import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Navbar(props) {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <MDBNavbar expand="lg" sticky light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBNavbarBrand href="/" className="brand-main">
          MomoDrive
        </MDBNavbarBrand>
        <MDBCollapse navbar show={showNavNoTogglerThird}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="home" href="/">
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/Checkout">Checkout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
