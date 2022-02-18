import React, { Component} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './features/pages/Navbar';
import Home from './features/pages/Home';
import Products from './features/pages/Products';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export default class App extends Component {

    render() {
        
        return (
            <div className="App">                   
                <BrowserRouter>
                    <Navbar /> 
                    <Routes>
                        <Route path="/" element={<Navigate to="/accueil" />} />
                        <Route index exact path="/accueil" element={<Home />} />
                        <Route exact path="/produits" element={<Products />} />
                    </Routes>
                </BrowserRouter>                 
            </div>
        );
    }
}
