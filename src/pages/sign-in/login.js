import React, { Component } from "react";
import SignInPage from "./sign-in";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
      this.props.handleLogin(data);
    //   redirecting the user
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <SignInPage handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}