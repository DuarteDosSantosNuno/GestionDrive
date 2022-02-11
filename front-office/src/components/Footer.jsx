import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted fixed-bottom"
    >
      <section className="justify-content-center justify-content-lg-between p-4 border-top">
        <div className="row mt-3">
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p>
              <MDBIcon fas icon="map-marked-alt" />
            </p>
            <i className="fas fa-home me-3"></i> street Address
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p>
              <i className="fab fa-facebook-f"></i>
            </p>
            <i className="fas fa-envelope me-3"></i>
            e-mail
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p>
              <i className="fab fa-twitter"></i>
            </p>
            <i className="fas fa-phone me-3"></i> + 01 23 45 67 89
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright Afpa Roubaix
      </div>
    </MDBFooter>
  );
}
