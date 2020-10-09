// import React from 'react';
// import './sign-up.css';

// const SignUpPage = (props) => {
//   return(
//     <div className="sign-up">

//     </div>
//    );
//  }

// export default SignUpPage;

import React, { Component } from "react";
import axios from "axios";
import "./sign-up.css";
import { EmailField, PasswordField } from "../../components/auth/auth";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: "",
      full_name: "",
      user_type: "teacher",
      registrationErrors: "",
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
    const {
      email,
      password,
      password_confirmation,
      phone,
      full_name,
      user_type,
    } = this.state;

    axios
      .post(
        "https://team065a-backend-arch.herokuapp.com/api/v1/sign_up",
        {
          users: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            phone: phone,
            full_name: full_name,
            user_type: user_type,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "Success") {
          this.props.handleSuccessfulAuth(response.data);
        }
        // console.log("signup response", response);
      })
      .catch((error) => {
        console.log("signup error", error);
      });
    console.log("form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <div className="sign-up-form">
        <h2 className="sign-up-header">Sign up now!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span className="input-group-addon"> I'm a </span>
            <select
              className="custom-select"
              name="user_type"
              placeholder=""
              value={this.state.user_type}
              onChange={this.handleChange}
              required
            >
              <option defaultValue value="teacher">
                Teacher
              </option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
              <option value="school">School</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              {" "}
              <i className="fa fa-user"></i>{" "}
            </span>
            <input
              className="form-control"
              type="text"
              name="full_name"
              placeholder="Full name"
              value={this.state.full_name}
              onChange={this.handleChange}
              required
            />
          </div>
          <EmailField this={this} />
          <div className="input-group">
            <span className="input-group-addon">
              {" "}
              <i className="fa fa-phone"></i>{" "}
            </span>
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          <PasswordField this={this} />
          <div className="input-group">
            <span className="input-group-addon">
              {" "}
              <i className="fa fa-lock"></i>{" "}
            </span>
            <input
              className="form-control"
              type="password"
              name="password_confirmation"
              placeholder="Password again"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    );
  }
}
