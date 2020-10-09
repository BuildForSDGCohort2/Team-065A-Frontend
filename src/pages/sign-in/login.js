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
      <>
        <SignInPage handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </>
    );
  }
}