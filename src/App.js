import React, { Component } from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import UserList from "./UserList";
import Logout from "./Logout";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/userlist" component={UserList} />
      </Switch>
    );
  }
}
