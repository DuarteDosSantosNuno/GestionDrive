import React, { useState, useEffect } from "react";
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
import CartCounter from "./CartCounter";

export default function Navbar(props) {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  const { nbCartItems } = props;

  return (
    <MDBNavbar expand="sm" sticky light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBNavbarBrand href="/Home" className="brand-main">
          MomoDrive
        </MDBNavbarBrand>
        <MDBCollapse navbar show={showNavNoTogglerThird}>
          <MDBNavbarNav className="mr-auto mb-0 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="Home" href="/Home">
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/Order">
                <CartCounter nbCartItems={nbCartItems} />
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
