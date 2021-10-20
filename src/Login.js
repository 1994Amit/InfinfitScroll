import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "foo" && password === "bar") {
      localStorage.setItem("token", "sssdsdsd");
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="./userlist" />;
    }
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="username"
            vaue={this.state.username}
            onChange={this.onChange}
            placeholder="username"
          />
          <br/>
          <input
            type="password"
            name="password"
            vaue={this.state.password}
            onChange={this.onChange}
            placeholder="password"
          />
          <br/>
          <input class='button' type="submit" />
        </form>
      </div>
    );
  }
}
