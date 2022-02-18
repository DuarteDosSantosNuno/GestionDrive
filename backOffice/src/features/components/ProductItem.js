import React, { Component } from "react";
import "../../styles/ProductItem.css";
import {
  MDBTooltip,
  MDBModalContent,
  MDBModalDialog,
  MDBModalTitle,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailModal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      detailModal: !this.state.detailModal,
    });
  };

  render() {
    let photo = "https://localhost:44329" + this.props.image;

    return (
      <div className="ProductItem  d-block border rounded">
        <div className="card-header">
          <img className="Image text-center" src={photo} />
        </div>
        <div className="ProductInfo card-body d-block p-1">
          <p className="Name card-text text-dark">{this.props.name}</p>
          <MDBTooltip
            tag="button"
            wrapperProps={{
              className: "DetailButton btn btn-info rounded p-1",
              onClick: this.toggleModal,
            }}
            placement="bottom"
            title="Détails"
          >
            <i className="fas fa-info"></i>
          </MDBTooltip>

          <MDBModal
            className="rounded"
            show={this.state.detailModal}
            setShow={!this.state.detailModal}
            tabIndex="-1"
          >
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>{this.props.name}</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={this.toggleModal}
                  ></MDBBtn>
                </MDBModalHeader>

                <MDBModalBody className="text-start">
                  <div className="d-flex">
                    <img className="w-50 h-50" src={photo} />
                    <p className="text-dark align-self-center">
                      {this.props.description}
                    </p>
                  </div>
                  <h6>
                    <span className="badge bg-info p-2 m-2">Poids</span>
                  </h6>
                  <hr />
                  <div className="d-block lh-5">
                    <div className="text-dark d-flex">
                      <p className="fw-bold mr-1">Identifiant : </p>
                      {this.props.id}
                    </div>
                    <div className="text-dark d-flex">
                      <p className="fw-bold mr-1">Rayon : </p>
                      {this.props.rayon}
                    </div>
                    <div className="text-dark d-flex">
                      <p className="fw-bold mr-1">Categorie : </p>
                      {this.props.category}
                    </div>
                    <div className="text-dark d-flex">
                      <p className="fw-bold mr-1">Prix : </p>
                      {this.props.price} € / {this.props.unity}
                    </div>
                    <div className="text-dark d-flex">
                      <p className="fw-bold mr-1">Quantité : </p>
                      {this.props.quantityStock} Unités
                    </div>
                  </div>
                </MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
        <div className="card-footer d-flex">
          <p className="Price card-text mr-4">{this.props.price} €</p>
          <p className="Quantity card-text">
            {this.props.quantityStock} unités
          </p>
        </div>
      </div>
    );
  }
}
