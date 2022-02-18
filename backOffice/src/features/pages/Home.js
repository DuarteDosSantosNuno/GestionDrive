import React, { Component } from 'react';
import '../styles/Home.css';

export default class Home extends Component {

    componentDidMount() {
        document.title = "Accueil - MomoDrive";       
    }
    

    render() {

        return (
            <div className="Home">
                <h2>Home</h2>
            </div>
        );
    }
}