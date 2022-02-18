import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import * as MDB from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";





const Login = () => {
    return (
        <MDB.MDBContainer >
            <MDB.MDBRow className="d-flex justify-content-center">
                <MDB.MDBCol md="4" sm="12" lg="4">
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <MDB.MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                            success="right" />

                        <MDB.MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </div>
                    <div className="text-center">
                        <MDB.MDBBtn color="info"><NavLink to={{ pathname: '/Home' }}>Valider</NavLink></MDB.MDBBtn>
                    </div>
                </MDB.MDBCol>
            </MDB.MDBRow>
        </MDB.MDBContainer>
    );
};

export default Login;


