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
import { BASE_IMAGE_URL } from "./../APIConfig";
import ModalProductDetail from "../components/ModalProductDetail";

export default function ProductCard(props) {
  const { product, onAdd } = props;
  const [buttonQty, setButtonQty] = useState(product.qty ? false : true);

  useEffect(() => {
    console.log("useEffect setButtonQty = " + buttonQty);
    setButtonQty(product.qty > 0 ? true : false);
  }, []);
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
        <MDBCardTitle className="product-card-name">
          <ModalProductDetail 
            bodyText="product detail"
            product={product} 
            pathImage={pathImage}
            onAdd={onAdd}
            buttonQty={buttonQty}
            btn={props.btn}
          />   
          {product.nom}
        </MDBCardTitle>
        <p className="product-card-text">
          {product.units[0].prix} €/{product.units[0].unite}
        </p>
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
