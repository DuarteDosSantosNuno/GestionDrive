// import { useFormik } from "formik";

// function Login() {
//     const initialValues = {
//         email: "",
//         password: "",
//         gcu: false
//     };

//     function handleSubmit(formValues) {
//         console.log("Form values", formValues)
//     }

//     const formik = useFormik({
//         initialValues,
//         onSubmit: handleSubmit,
//     });
// }









// import React from 'react';
// import Authentification from '../pages/Authentification';
// import {
//     MDBCard,
//     MDBCardImage,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardFooter,
//     MDBRow,
//     MDBCol,
// } from "mdb-react-ui-kit";

// export default class Login extends Component {
//     constructor(props) {
//         let loggedIn = false
//         this.state = {
//             username: '',
//             password: '',
//             loggedIn
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Login</h1>
//             </div>
//         )
//     }
// }

// const Login = () => {

//     const [basicLogin, setBasicLogin] = useState(false);

//     const toggleShow = () => setBasicLogin(!basicLogin);

//     return (
//         <MDBRow className="vh-100 gradient-custom">
//             <div className="container py-5 h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                     <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                         <div className="card bg-dark text-white" style="border-radius: 1rem;">
//                             <div className="card-body p-5 text-center">

//                                 <div className="mb-md-5 mt-md-4 pb-5">

//                                     <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//                                     <p className="text-white-50 mb-5">Please enter your login and password!</p>

//                                     <div className="form-outline form-white mb-4">
//                                         <input type="email" id="typeEmailX" className="form-control form-control-lg" />
//                                         <label className="form-label" for="typeEmailX">Email</label>
//                                     </div>

//                                     <div className="form-outline form-white mb-4">
//                                         <input type="password" id="typePasswordX" className="form-control form-control-lg" />
//                                         <label class="form-label" for="typePasswordX">Password</label>
//                                     </div>

//                                     {/* <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
//                                     <MDBBtn
//                                         className="btn-close"
//                                         color="none"
//                                         onClick={toggleShow}
//                                     >Forgot password?</MDBBtn>

//                                     <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
//                                     <MDBBtn
//                                         className="btn-close"
//                                         color="none"
//                                         onClick={toggleShow}
//                                     ></MDBBtn>

//                                     <div className="d-flex justify-content-center text-center mt-4 pt-1">
//                                         <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
//                                         <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
//                                         <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
//                                     </div>

//                                 </div>

//                                 <div>
//                                     <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </MDBRow>
//     );
// }
