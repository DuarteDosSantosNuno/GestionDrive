import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg">
        <div className="navbar-nav flex-row d-none d-md-flex">
          <NavLink className="nav-item text-info m-3 " to="/accueil">
            MomoDrive
          </NavLink>
          <NavLink className="nav-item text-info m-3" to="/accueil">
            Accueil
          </NavLink>
          <NavLink className="nav-item text-info m-3" to="/produits">
            Produits
          </NavLink>
          <NavLink className="nav-item text-info m-3" to="/users">
            Users
          </NavLink>
          <NavLink className="nav-item text-info m-3" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item text-info m-3" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    );
  }
}
