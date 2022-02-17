import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardFooter,
  MDBRipple,
  MDBCardOverlay,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BASE_IMAGE_URL } from "./../APIConfig";
import ModalProductDetail from "../components/ModalProductDetail";

export default function ProductCard(props) {
  const { cartItems, product, onAdd, onRemove } = props;

  const inCart = cartItems.find((i) => i.id === product.id);
  const buttonAdd = inCart ? false : true;
  const qtyInCart = inCart ? inCart.qty : 0;

  let pathImage;
  if (product.productImages.length === 0) pathImage = "./tmp/img/noimage.png";
  else pathImage = BASE_IMAGE_URL + product.productImages[0].src;

  return (
    <MDBCard className="h-100 shadow-custom" style={{ maxWidth: "16rem" }}>
      <div className="d-flex align-items-center justify-content-center">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src={pathImage}
            alt="..."
            position="top"
            style={{ maxWidth: "7rem" }}
            className="card-image overlay"
            fluid
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <MDBCardOverlay className="d-flex align-items-center justify-content-center">
              <div>
                <ModalProductDetail
                  bodyText="product detail"
                  product={product}
                  pathImage={pathImage}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  buttonAdd={buttonAdd}
                  qtyInCart={qtyInCart}
                />
              </div>
            </MDBCardOverlay>
          </div>
        </MDBRipple>
      </div>
      <MDBCardBody>
        <h5 className="product-card-name">{product.nom}</h5>
      </MDBCardBody>
      <MDBCardFooter>
        <p className="product-card-text">
          {product.units[0].prix} €/{product.units[0].unite}
        </p>
        <div className="d-flex align-items-center justify-content-center">
          {buttonAdd ? (
            <MDBBtn onClick={() => onAdd(product)}>Add to cart</MDBBtn>
          ) : (
            <div>
              <a role="button" onClick={() => onRemove(product)}>
                <i className="fas fa-minus productcardcart-button-remove"></i>{" "}
              </a>
              <span className="product-card-qty">{inCart.qty}</span>
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
