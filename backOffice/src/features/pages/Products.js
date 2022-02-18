import React, { Component, useEffect } from 'react';
import axios from "axios";
import ProductItem from '../components/ProductItem';
import '../styles/Products.css';
import {MDBTooltip, MDBModalContent, MDBModalDialog, MDBModalTitle, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';





export default class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: [],
            apiCategorieResponse: [],
            addModal: false,
            deleteModal: false,
            editModal: false,
        };     
        
    }

    componentDidMount() {
        document.title = "Produits - MomoDrive";    

        axios.get("https://localhost:44329/api/v1/Product")
        .then(response => this.setState({
            apiResponse: response.data
        }));
        
        axios.get("https://localhost:44329/api/v1/Category")
        .then(response => this.setState({
            apiCategorieResponse: response.data
        }));  
    }

    toggleAddModal = () =>{
        this.setState({
          addModal: !this.state.addModal
        });
    }

    
    render() {
        console.log(this.state.apiResponse);
        console.log(this.state.apiCategorieResponse);

        return (
            <div className="">
                <div className="ProductHeader d-flex bg-primary">
                    <h2 className="Title text-white">Produits</h2>
                    <div className=""> 
                        <MDBTooltip tag='button' wrapperProps={{ className: 'Button bg-white text-info', onClick:this.toggleAddModal  }}  placement='bottom' title='Ajouter'>
                            <i className="fas fa-plus"></i>
                        </MDBTooltip>
                        <button className="Button bg-white text-info" data-mdb-toggle="tooltip" data-mdb-placement="bottom" title="Supprimer"><i className="fas fa-trash"></i></button>
                        <button className="Button bg-white text-info" data-mdb-toggle="tooltip" data-mdb-placement="bottom" title="Modifier"><i className="fas fa-edit"></i></button>
                        <MDBModal className="rounded" show={this.state.addModal} setShow={!this.state.addModal} tabIndex='-1'>
                            <MDBModalDialog>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>Ajouter un produit</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={this.toggleAddModal}> </MDBBtn>  
                                    </MDBModalHeader>
                                    <MDBModalBody className="text-start">
                                        <form>
                                            <label htmlFor="name">Nom</label>
                                            <input className="d-flex w-75 border-info rounded form-control" id="name" name="name" type="text"/>
                                            <br/>
                                            <label htmlFor="description">Description</label>
                                            <textarea className="d-flex w-75 border-info rounded form-control" id="description" name="description" rows="3"></textarea>
                                            <br/>
                                            <label htmlFor="quantity">Quantité</label>
                                            <input className="d-flex w-25 border-info rounded form-control" id="quantity" name="quantity" type="number"/>
                                            <br/>
                                            <label htmlFor="category">Catégorie</label>
                                            <select class="form-select w-25 border-info rounded form-control" id="category">
                                                <option selected>Choisissez une catégorie</option>                         
                                                {this.state.apiCategorieResponse?.map((element) => 
                                                    <option value={element.id}>{element.nom}</option>
                                                )}
                                            </select>
                                            <br/>
                                            <p className='my-1'>Disponibilité</p>
                                            <label htmlFor="yes">Oui</label>
                                            <input className=" border-info rounded m-2" name="available" type="radio" value="true"/>                                           
                                            <label htmlFor="no">Non</label>
                                            <input className="border-info rounded m-2" name="available" type="radio" value="false"/>
                                            <br/>
                                            <label htmlFor="image">Image</label>
                                            <input className="d-flex w-75 border-info rounded form-control" id="image" name="image" type="file"/>
                                            <br/>
                                            <label htmlFor="unit">Unité</label>
                                            <select class="form-select w-25 border-info rounded form-control" id="unity">
                                                <option selected>Choisissez une catégorie</option>                         
                                                <option value="unité">unité</option>
                                                <option value="lot">lot</option>
                                                <option value="pack">pack</option>              
                                            </select>
                                            <br/>
                                            <label htmlFor="price">Prix</label>
                                            <input className="d-flex w-25 border-info rounded form-control" id="price" name="price" type="number"/>
                                            <br/>
                                            <div className='d-flex justify-content-center'>
                                                <MDBBtn color='success' tag='button' wrapperProps={{type:"submit", className:""}}>
                                                    Envoyer
                                                </MDBBtn>  
                                            </div>                                            
                                        </form>  
                                                                          
                                    </MDBModalBody>            
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>                   
                    </div>                                    
                </div>
                
                <div className='ProductsList container'>
                    {this.state.apiResponse?.map((element) =>{ 
                        return <ProductItem key={element.id} 
                                            id={element.id} 
                                            image={element.productImages[0].src} 
                                            name={element.nom} 
                                            quantityStock={element.quantityStock} 
                                            price={element.units[0].prix} 
                                            unity={element.units[0].unite} 
                                            description={element.description} 
                                            category={element.category.nom} 
                                            rayon={element.category.rayon.nom}
                                />                        
                    })}
                </div>
            </div>
        );
    }
}