import React from 'react'
import * as Yup from 'yup';
import Login from '../components/Login';
// import { authenticate } from './../api/backend/account';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { isAuthenticated } from '../shared/services/accountServices';
// import { URL_HOME } from './../shared/constants/urlConstants';
// import { signIn } from '../shared/redux-store/actions/authenticationActions';


const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required input"),
    password: Yup.string().required("Required input")
})


const LoginView = ({ history }) => {

    const [errorLog, setErrorLog] = useState(false)
    const dispatch = useDispatch()
    const initialValues = { username: '', password: '' }

    const handleLogin = (values) => {
        authenticate(values).then(res => {
            if (res.status === 200 && res.data.id_token) {
                dispatch(signIn(res.data.id_token))
                if (isAuthenticated) history.push(URL_HOME)
            }
        }).catch(() => setErrorLog(true))
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <Login
                submit={handleLogin}
                initialValues={initialValues}
                errorLog={errorLog}
                validationSchema={validationSchema}
            />
        </div>
    );
};

export default LoginView