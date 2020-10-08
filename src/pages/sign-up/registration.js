import React, { Component } from "react";
import SignUpPage from "./sign-up";


export default class Registration extends Component {
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
        <SignUpPage handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}