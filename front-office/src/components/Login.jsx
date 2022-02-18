import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Authentification from "../pages/Authentification";
import { NavLink } from "react-router-dom";





const FormPage = () => {
    return (
        <MDBContainer >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="4" sm="12" lg="4">
                    {/* <form> */}
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />

                        <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                        {/* <MDBBtn  disabled={isSubmitting} component={Authentification}>Login</MDBBtn> */}
                        <MDBBtn color="info"><NavLink to={{ pathname: '/Home' }}>Valider</NavLink></MDBBtn>
                    </div>
                    {/* </form> */}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default FormPage;


