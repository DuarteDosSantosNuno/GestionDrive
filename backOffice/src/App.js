import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import BoardUser from "./components/board-user.component";
//import BoardModerator from "./components/board-moderator.component";
//import BoardAdmin from "./components/board-admin.component";
// import { logout } from "./actions/auth";
// import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import Myroutes from "./components/routes";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.logOut = this.logOut.bind(this);
  //   this.state = {
  //     showModeratorBoard: false,
  //     showAdminBoard: false,
  //     currentUser: undefined,
  //   };
  //   history.listen((location) => {
  //     props.dispatch(clearMessage()); // clear message when changing location
  //   });
  // }

  // componentDidMount() {
  //   const user = this.props.user;
  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }
  // }

  // logOut() {
  //   this.props.dispatch(logout());
  // }

  render() {
    //const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <Fragment history={history}>
        <Myroutes />
      </Fragment>
    );
  }
}

// function mapStateToProps(state) {
//   const { user } = state.auth;
//   return {
//     user,
//   };
// }

//export default connect(mapStateToProps)(App);
export default App;
