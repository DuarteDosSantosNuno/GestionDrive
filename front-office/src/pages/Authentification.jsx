import { Formik, ErrorMessage, Field, Form } from "formik";
import { Component } from "react";
import * as yup from 'yup';
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { MDBInput } from "mdbreact";
import FormPage from "../components/Login";
import App from "../App";
import { Link } from 'react-router-dom';



const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default class Authentification extends Component {


    // let { id } = useParams()
    // const [user, setUser] = useState(id);

    // useEffect(

    // );



    constructor(props) {
        super(props);

        this.state = {
            initialsValues: {
                isLoading: true,
                email: '',
                password: '',

            }
        }
    }

    submit = (values) => {
        console.log(values);
        let value = {
            email: '',
            password: ''
        }

    }
    render() {
        const { initialsValues, isLoading } = this.state
        if (isLoading) return <h2>Loading</h2>
        return (
            <div>
                <Formik initialsValues={initialsValues} onSubmit={this.submit} validationSchema={validationSchema}>
                    {({ values, handleChange, handleSubmit, handleBlur, errors, touched/*, isSubmitting */ }) => (
                        <Form onSubmit={handleSubmit}/*className="bg-white border p-5 d-flex flex-column*/>
                            <div className="bg-white border p-5 d-flex-column">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <MDBInput
                                        type="text"
                                        name="email"
                                        disabled={this.state.disable}
                                        placeholder="*email"
                                        onChange={handleChange}
                                        onBLur={handleBlur}
                                        value={values.email}
                                    //   required={"erreur"}
                                    //  className=""
                                    />
                                    <ErrorMessage
                                        name={'email'}
                                        component='small'
                                        className="text-danger"
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <MDBInput
                                        type="text"
                                        name="password"
                                        disabled={this.state.disable}
                                        placeholder="*password"
                                        onChange={handleChange}
                                        onBLur={handleBlur}
                                        value={values.password}
                                    //  className=""
                                    />
                                    <ErrorMessage
                                        name={'password'}
                                        component='small'
                                        className="text-danger"
                                    />

                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block btn-primary" onClick={() => this.submit()}>Valider</button>
                                    {/* <button type="submit" className="btn btn-block btn-second" onClick={() => this.submit()}>Mot de passe oublie</button> */}
                                </div>
                            </div>


                        </Form>
                    )}

                </Formik>
            </div>
        )
    }
}


// const Authentification = () => (
//     <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <h1>Authentification</h1>
//         <Formik
//             initialValues={{
//                 email: '',
//                 password: ''
//             }}
//             validate={values => {
//                 const errors = {};
//                 console.log(values)
//                 if (!values.email) {
//                     errors.email = 'Email incorrect';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                 ) {
//                     errors.email = 'Adresse mail invalide';
//                 }
//                 return errors;
//                 if (!values.password) {
//                     errors.password = 'Password incorrect';
//                 } else if (
//                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
//                 ) {
//                     errors.email = 'Password incorrect';
//                 }
//                 return errors;
//             }}

//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     setSubmitting(false);
//                 }, 400);
//             }}
//         >

//             {({ values, handleChange, handleSubmit, handleBlur, errors, touched, isSubmitting }) => (
//                 <Form onSubmit={handleSubmit} className="bg-white border p-5 d-flex flex-column">
//                     <div className="bg-white border p-5 d-flex flex-column">
//                         <div className='form-group'>
//                             <br></br>
//                             <br></br>
//                             <br></br>
//                             <label htmlFor="email">Email </label>
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 value={values.email}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur} />
//                             <ErrorMessage name={"email"} component="small" className="text-danger" />
//                             <br />
//                         </div>
//                         {/* <br><br></br></br> */}
//                         <div className='form-group'>
//                             <label htmlFor="password">Password </label>
//                             <Field
//                                 type="password"
//                                 name="password"
//                                 value={values.password}
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                             />
//                             <ErrorMessage name={"password"} component="small" className="text-danger" />
//                         </div>
//                     </div>
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                     <button type="button" className="btn btn-primary" disabled={isSubmitting}>Login</button>
//                     {/* <button type="submit" disabled={isSubmitting}>
//                         Ok
//                     </button> */}
//                     <button type="button" className="btn btn-primary" disabled={isSubmitting}>Mot de passe oubli�</button>

//                 </Form>
//             )}
//         </Formik>
//     </div>
// );

// export default Authentification;


