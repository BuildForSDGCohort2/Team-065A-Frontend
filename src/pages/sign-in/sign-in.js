import React, { Component } from "react";
import axios from "axios";
import "./sign-in.css";
import { EmailField, PasswordField } from "../../components/auth/auth";
import { trackPromise } from "react-promise-tracker";

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      LoginErrors: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    trackPromise(
      axios
        .post(
          "https://team065a-backend-arch.herokuapp.com/api/v1/sign_in",
          {
            login: {
              email: email,
              password: password,
            },
          },
          { withCredentials: true }
        )
        .then((response) => {
          this.props.handleSuccessfulAuth(response.data);
        })
        .catch((error) => {
          console.log("login error", error);
      }));
    console.log("form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <div className="sign-in-form">
        <h3 className="sign-in-header">Sign in to your account</h3>
        <form onSubmit={this.handleSubmit}>
          <EmailField this={this} />
          <PasswordField this={this} />
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Sign in"
          />
          <p className="alternate-form-link"><a href="/sign_up">I'm new here.</a></p>
        </form>
      </div>
    );
  }
}
