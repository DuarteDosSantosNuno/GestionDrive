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
import { ReactComponent as DetailIcon } from "./../assets/search_black_24dp.svg";
import { ReactComponent as BasketIcon } from "./../assets/basket.svg";

export default function ModalProductDetail(props) {
  const [basicModal, setBasicModal] = useState(false);
  const { product, pathImage, onAdd, buttonQty } = props;

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <a href="#" onClick={toggleShow} ><DetailIcon /></a>
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
            <MDBModalBody>{product.description}
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
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
