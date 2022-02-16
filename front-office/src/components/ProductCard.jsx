import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProductCard(props) {
  const { product, onAdd } = props;
  const [buttonQty, setButtonQty] = useState(product.qty ? false : true);

  useEffect(() => {
    console.log("useEffect setButtonQty = " + buttonQty);
    setButtonQty(product.qty > 0 ? true : false);
  }, []);

  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBCardImage
          src={product.picture}
          alt="..."
          position="top"
          style={{ maxWidth: "7rem" }}
          className="card-image"
          fluid
        />
      </div>
      <MDBCardBody>
        <MDBCardTitle className="product-card-name">
          {product.name}
        </MDBCardTitle>
        <p className="product-card-text">{product.price} €/piece</p>
        <div className="d-flex align-items-center justify-content-center">
          {!buttonQty ? (
            <MDBBtn onClick={() => onAdd(product)}>{props.btn}</MDBBtn>
          ) : (
            <>
              <button
                type="button"
                onClick={() => onRemove(product)}
                className="btn btn-outline-danger btn-floating"
              >
                <i className="fas fa-minus"></i>{" "}
              </button>
              <span>{product.qty}</span>
              <button
                type="button"
                onClick={() => onAdd(product)}
                className="btn btn-outline-success btn-floating"
              >
                <i className="fas fa-plus"></i>
              </button>
            </>
          )}
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
