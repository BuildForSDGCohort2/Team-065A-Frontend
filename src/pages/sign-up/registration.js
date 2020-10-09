import { render } from "@testing-library/react";
import React, { Component } from "react";
import { CustomAlert } from "../../components/alerts/alerts";
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
    render(<CustomAlert type="success" message="Account created successfully." />, document.getElementById("info"));
  }

  render() {
    return (
      <>
        <SignUpPage handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </>
    );
  }
}