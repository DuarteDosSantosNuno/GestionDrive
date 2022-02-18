import React, { useState } from "react";
import {
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function ModalProductDetail(props) {
  const [basicModal, setBasicModal] = useState(false);
  const { buttonAdd, qtyInCart, product, pathImage, onAdd, onRemove } = props;

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <a onClick={toggleShow}>
        <i className="product-card_overlay fas fa-search"> </i>
      </a>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{product.nom}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>

            <div className="d-flex align-items-center justify-content-center">
              <MDBCardImage
                src={pathImage}
                alt="..."
                position="top"
                style={{ maxWidth: "7rem" }}
                className="card-image"
                fluid
              />
            </div>
            <MDBModalBody>{product.description}</MDBModalBody>
            <MDBModalFooter>
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
                    <span className="product-card-qty">{qtyInCart}</span>
                    <a role="button" onClick={() => onAdd(product)}>
                      <i className="fas fa-plus productcardcart-button-add"></i>
                    </a>
                  </div>
                )}
              </div>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
