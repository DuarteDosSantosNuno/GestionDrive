import React from "react";
import { MDBBtn, MDBCardBody, MDBCard, MDBCardTitle, MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon } from 'mdbreact';
import { Formik, Form, Field } from 'formik';
import { UseMDBInput } from "./Authentification";
//import { MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';




// const FormLogin = ({ submit, initialValues, errorLog, validationShema }) =>
//     <Formik
//         initialValues={initialValues}
//         onSubmit={submit}
//         validationShema={validationShema}
//     >

//         <Form>

//             <img width="20" src="https://img.icons8.com/windows/32/000000/find-email.png" />
//             <Field label="Type your email" type="email" name="email" placeholder="Login" component={UseMDBInput} errorRight />
//             <br />
//             <img width="20" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-password-essentials-icongeek26-outline-icongeek26.png" />
//             <label icon="lock" htmlFor="password">Password </label>
//             <Field label="Type your password" type="password" name="password" placeholder="Password" component={UseMDBInput} errorRight />
//             <br />
//             <MDBBtn type="submit" color="succes" className="btn-block">Valider</MDBBtn>
//             {errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" />}
//         </Form>

//     </Formik>



// const Login = (props) => {

//     return (
//         <MDBCard style={{ width: "30rem" }}>
//             <MDBCardBody>
//                 <MDBCardTitle className="text-center">Sign in</MDBCardTitle>

//                 <FormLogin {...props} />
//             </MDBCardBody>
//         </MDBCard>


//         //Ne fonctionne Pas !

//         // <MDBContainer>
//         //     <MDBRow>
//         //         <MDBCol md="6">
//         //             <form>
//         //                 <p className="h5 text-center mb-4">Sign in</p>
//         //                 <MDBCardTitle className="text-center">Login</MDBCardTitle>
//         //                 <div className="grey-text">
//         //                     <MDBInput label="Type your email" group type="email" validate error="wrong"
//         //                         success="right" />

//         //                     <MDBInput label="Type your password" icon="lock" group type="password" validate />
//         //                 </div>
//         //                 <FormLogin {...props} />
//         //                 <div className="text-center">
//         //                     <MDBBtn
//         //                     >Login</MDBBtn>
//         //                 </div>
//         //             </form>
//         //         </MDBCol>
//         //     </MDBRow>
//         // </MDBContainer>
//     );
// };

// export default Login;


























import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MDBBtn, } from "mdb-react-ui-kit";
function Login() {
    const initialValues = {
        email: "",
        password: "",
        gcu: false
    };

    function handleSubmit(formValues) {
        console.log("Form values", formValues)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
    });
    //}

    return (
        <MDBRow className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style="border-radius: 1rem;">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        <label class="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>

                                    {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
                                    <MDBBtn
                                        className="btn-close"
                                        color="none"
                                        onClick={toggleShow}
                                    >Forgot password?</MDBBtn>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                    <MDBBtn
                                        className="btn-close"
                                        color="none"
                                        onClick={toggleShow}
                                    ></MDBBtn>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MDBRow>
    );
}
