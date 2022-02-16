import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik, onChange, handleSubmit } from 'formik';

const Authentification = () => (
    <div>
        {/* <Login /> */}
        <br></br>
        <br></br>
        <br></br>
        <h1>Authentification</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email incorrect';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
                if (!values.password) {
                    errors.password = 'Password incorrect';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                ) {
                    errors.email = 'Password incorrect';
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >

            {({ values, handleChange, handleSubmit, handleBlur, errors, touched, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    {/* <Login /> */}
                    <div className="form-group">
                        <div className='form-group'>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label htmlFor="email">Email </label>
                            <Field
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            <ErrorMessage name={"email"} component="small" className="text-danger" />
                            <br />
                        </div>
                        {/* <br><br></br></br> */}
                        <div className='form-group'>
                            <label htmlFor="password">Password </label>
                            <Field
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name={"password"} component="small" className="text-danger" />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="button" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                    {/* <button type="submit" disabled={isSubmitting}>
                        Ok
                    </button> */}
                    <button type="button" className="btn btn-primary" disabled={isSubmitting}>Mot de passe oubli�</button>

                </Form>
            )}
        </Formik>
    </div>
);

export default Authentification;
