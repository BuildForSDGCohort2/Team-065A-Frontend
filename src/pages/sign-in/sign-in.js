// import React from 'react';
// import './sign-in.css';

// const SignInPage = (props) => {
//   return(
//     <div className="sign-in">
//     </div>
//    )

//  }

// export default SignInPage;

import React, { Component } from "react";
import axios from "axios";
import "./sign-in.css";
import { EmailField, PasswordField } from "../../components/auth/auth";

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
        // console.log('from signin.js', response.data.data);
        this.props.handleSuccessfulAuth(response.data);
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
        // console.log("login response", response);
      })
      .catch((error) => {
        console.log("login error", error);
      });
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
        </form>
      </div>
    );
  }
}
