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
import axios from 'axios';
import './sign-in.css';

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      LoginErrors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
      const { email, password } = this.state
      axios.post("https://team065a-backend-arch.herokuapp.com/api/v1/sign_in", {
        user: {
            email: email,
            password: password
        }
      },
      { withCredentials: true },
      ).then(response => {
          if (response.data.logged_in){
              this.props.handleSuccessfulAuth(response.data)
          }
          console.log('login response', response);
      }).catch(error => {
          console.log('login error', error);
      })
      console.log('form submitted')
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
