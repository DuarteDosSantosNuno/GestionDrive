import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./loginComponent";
import Register from "./registerComponent";
import Profile from "./profileComponent";

export default class Myroutes extends Component {
  render() {
    return (
      <Routes>
        {/* <Route exact path={["/", "/home"]} element={Home} /> */}
        <Route exact path="/" element={Home} />
        {/* <Route exact path="/login" element={Login} />
        <Route exact path="/register" element={Register} />
        <Route exact path="/profile" element={Profile} /> */}
      </Routes>
    );
  }
}
