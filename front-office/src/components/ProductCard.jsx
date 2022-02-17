import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BASE_IMAGE_URL } from "./../APIConfig";

export default function ProductCard(props) {
  const { product, onAdd, onRemove } = props;
  const [button, setButton] = useState(props.button);

  //const [buttonQty, setButtonQty] = useState(product.qty ? false : true);

  // useEffect(() => {
  //   console.log("useEffect setButtonQty = " + buttonQty);
  //   setButtonQty(product.qty > 0 ? true : false);
  // }, []);

  let pathImage;
  if (product.productImages.length === 0) pathImage = "./tmp/img/noimage.png";
  else pathImage = BASE_IMAGE_URL + product.productImages[0].src;

  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBCardImage
          //src={a ? `${BASE_IMAGE_URL}${product.productImages[0].src}` : `${img}`}
          src={pathImage}
          alt="..."
          position="top"
          style={{ maxWidth: "7rem" }}
          className="card-image"
          fluid
        />
      </div>
      <MDBCardBody>
        <h5 className="product-card-name">{product.nom}</h5>
      </MDBCardBody>
      <MDBCardFooter>
        <p className="product-card-text">
          {product.units[0].prix} €/{product.units[0].unite}
        </p>
        <div className="d-flex align-items-center justify-content-center">
          {!button ? (
            <MDBBtn onClick={() => onAdd(product)}>Add to cart</MDBBtn>
          ) : (
            <div>
              <a role="button" onClick={() => onRemove(product)}>
                <i className="fas fa-minus productcardcart-button-remove"></i>{" "}
              </a>
              <span>{product.qty}</span>
              <a role="button" onClick={() => onAdd(product)}>
                <i className="fas fa-plus productcardcart-button-add"></i>
              </a>
            </div>
          )}
        </div>
      </MDBCardFooter>
    </MDBCard>
  );
}
