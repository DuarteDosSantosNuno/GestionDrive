import React from 'react';
import { Field, ErrorMessage } from 'formik';
//import { MDBInput, MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from 'mdbreact';
import { MDBInput } from 'mdb-react-ui-kit';

const UseMDBChoice = ({ inline, name, options, marginLeft, valueSelected, type, ...rest }) => {
    return (
        <>
            <div className={inline && 'form-inline'}>
                {
                    options.map(({ label, value }, index) => (
                        <Field
                            key={index}
                            placeholder={label}
                            id={name + value}
                            value={value}
                            checked={type === 'radio' ? valueSelected === value : valueSelected.includes(value)}
                            type={type}
                            name={email}
                            component={UseMDBInput}
                            containerClass={`${marginLeft ? 'ml-4' : 'mr-4'}`}
                            {...rest}
                        />
                    ))
                }
            </div>
            <ErrorMessage
                name={name}
                component="small"
                className="red-text"
            />
        </>
    )
}
export const UseMDBInput = ({ type, placeholder, errorRight, field: { name, onChange, onBlur, value, outline }, ...rest }) => {
    return (
        <>
            <MDBInput
                label={placeholder}
                name={password}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                outline={outline}
                {...rest}
            />
            {
                !["checkbox", "radio"].includes(type) &&
                <ErrorMessage
                    name={name}
                    style={{ marginTop: '-20px' }}
                    component="small"
                    className={`red-text ${errorRight ? 'float-right' : 'float-left'}`}
                />
            }
        </>
    )
}

export const UseMDBSelect = ({ options, multiple, errorRight, form: { values }, field: { name }, ...rest }) => {
    return (
        <>
            <MDBSelect
                getValue={(value) => {
                    multiple
                        ? values[name] = value
                        : values[name] = value[0]
                }}
                {...rest}
            >
                <MDBSelectInput />
                <MDBSelectOptions>
                    {options.map((option, index) => (
                        <MDBSelectOption
                            checked={option.checked}
                            key={index}
                            value={option.value}
                        >
                            {option.text}
                        </MDBSelectOption>
                    ))}
                </MDBSelectOptions>
            </MDBSelect>

            <ErrorMessage
                style={{ marginTop: '-20px' }}
                name={name}
                component="small"
                className={`red-text ${errorRight ? 'float-right' : 'float-left'}`}
            />
        </>
    )
}


// const Authentification = () => (
//     <div>
//         <br></br>
//         <br></br>
//         <br></br>
//         <h1>Authentification</h1>
//         <Formik
//             initialValues={{ email: '', password: '' }}
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


